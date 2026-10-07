import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "../button";
import { Input } from "../input";
import { FilterChip } from "../filter-chip";
import { ToggleGroup } from "../toggle-group";
import { Check, Copy, Plus } from "lucide-react";

/* The Query Builder panel (criteria chips, And/Or/Not groups, copyable
   description) shared by the Table Default playground's "Query builder"
   control and the Variants "Toolbar — Query Builder" page. */

/* ── Full filter-builder shared with the Advanced Search popover ── */

const AS_TEXT_OPS = [
  { value: "contains", label: "Contains" }, { value: "does-not-contain", label: "Does Not Contain" },
  { value: "equals", label: "Equals" }, { value: "not-equals", label: "Not Equals" },
  { value: "starts-with", label: "Starts With" }, { value: "ends-with", label: "Ends With" },
];
const AS_NUM_OPS = [
  { value: "equals", label: "Equals" }, { value: "not-equals", label: "Not Equals" },
  { value: "greater-than", label: "Greater Than" }, { value: "less-than", label: "Less Than" },
];
const AS_CRITERIA_DEFS: Record<string, { label: string; operators: typeof AS_TEXT_OPS; options: {value:string;label:string}[] }> = {
  "first-name": { label: "First Name", operators: AS_TEXT_OPS, options: [{value:"jane",label:"Jane"},{value:"john",label:"John"},{value:"alice",label:"Alice"}] },
  "last-name":  { label: "Last Name",  operators: AS_TEXT_OPS, options: [{value:"smith",label:"Smith"},{value:"jones",label:"Jones"}] },
  "age":        { label: "Age",        operators: AS_NUM_OPS,  options: [{value:"25",label:"25"},{value:"30",label:"30"},{value:"40",label:"40"}] },
  "gender":     { label: "Gender",     operators: [{value:"equals",label:"Equals"},{value:"not-equals",label:"Not Equals"}], options: [{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"non-binary",label:"Non-binary"}] },
  "department": { label: "Department", operators: AS_TEXT_OPS, options: [{value:"engineering",label:"Engineering"},{value:"design",label:"Design"},{value:"sales",label:"Sales"}] },
  "status":     { label: "Status",     operators: [{value:"equals",label:"Equals"},{value:"not-equals",label:"Not Equals"}], options: [{value:"active",label:"Active"},{value:"inactive",label:"Inactive"},{value:"pending",label:"Pending"}] },
};
const AS_LOGIC_ITEMS = [{value:"and",label:"And"},{value:"or",label:"Or"},{value:"not",label:"Not"}];
const AS_OP_LABELS: Record<string,string> = {
  "contains":"Contains","does-not-contain":"Does Not Contain","equals":"Equals","not-equals":"Not Equals",
  "starts-with":"Starts With","ends-with":"Ends With","greater-than":"Greater Than","less-than":"Less Than",
};

export type AsLogic = "and"|"or"|"not";
export interface AsChip { uid:string; criteriaId:string; operator:string; values:string[] }
export interface AsGroup { id:string; logicOperator:AsLogic; chips:AsChip[]; subGroups:AsGroup[] }

let _asUid = 100;
const asNextUid = () => String(++_asUid);
const asMakeChip = (id:string): AsChip => ({ uid:asNextUid(), criteriaId:id, operator:AS_CRITERIA_DEFS[id].operators[0].value, values:[] });
const asMakeGroup = (): AsGroup => ({ id:asNextUid(), logicOperator:"and", chips:[], subGroups:[] });

export function asBuildString(g: AsGroup, depth=0): string {
  const joiner = g.logicOperator==="not" ? " AND " : ` ${g.logicOperator.toUpperCase()} `;
  const parts = [
    ...g.chips.map(c => {
      const def = AS_CRITERIA_DEFS[c.criteriaId];
      const vals = c.values.length>0 ? c.values.map(v=>`'${def.options.find(o=>o.value===v)?.label??v}'`).join(", ") : "''";
      return `${def.label} ${AS_OP_LABELS[c.operator]??c.operator} ${vals}`;
    }),
    ...g.subGroups.map(s=>asBuildString(s,depth+1)),
  ].filter(Boolean);
  if (!parts.length) return "";
  const inner = parts.join(joiner);
  if (g.logicOperator==="not") return `NOT (${inner})`;
  return depth===0 && parts.length===1 ? inner : `(${inner})`;
}

// Portal-based criteria menu
function AsCriteriaMenu({ onSelect }: { onSelect:(id:string)=>void }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({top:0,left:0});
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (btnRef.current) { const r=btnRef.current.getBoundingClientRect(); setPos({top:r.bottom+4,left:r.left}); }
    setOpen(v=>!v);
  };
  React.useEffect(() => {
    if (!open) return;
    const h=(e:MouseEvent)=>{
      if (menuRef.current?.contains(e.target as Node)) return;
      if (btnRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown",h);
    return ()=>document.removeEventListener("mousedown",h);
  },[open]);

  return (
    <>
      <Button ref={btnRef} variant="outline" size="md" onClick={handleOpen}>
        <Plus className="h-3.5 w-3.5" strokeWidth={2} /> Criteria
      </Button>
      {open && ReactDOM.createPortal(
        <div ref={menuRef} style={{position:"fixed",top:pos.top,left:pos.left,zIndex:9999}}
          className="min-w-[180px] rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg p-2">
          {Object.entries(AS_CRITERIA_DEFS).map(([id,def])=>(
            <button key={id} type="button" onClick={()=>{onSelect(id);setOpen(false);}}
              className="w-full flex items-center px-3 py-2 lyra-body-md text-lyra-fg-default rounded-lyra-sm text-left hover:bg-lyra-state-hover transition-colors">
              {def.label}
            </button>
          ))}
        </div>, document.body
      )}
    </>
  );
}

function AsGroupRow({ group, isRoot, onUpdate, onDelete }: {
  group:AsGroup; isRoot?:boolean; onUpdate:(g:AsGroup)=>void; onDelete?:()=>void;
}) {
  const addChip=(id:string)=>onUpdate({...group,chips:[...group.chips,asMakeChip(id)]});
  const removeChip=(uid:string)=>onUpdate({...group,chips:group.chips.filter(c=>c.uid!==uid)});
  const updateChip=(uid:string,p:Partial<AsChip>)=>onUpdate({...group,chips:group.chips.map(c=>c.uid===uid?{...c,...p}:c)});
  const addSub=()=>onUpdate({...group,subGroups:[...group.subGroups,asMakeGroup()]});
  const updateSub=(id:string,g:AsGroup)=>onUpdate({...group,subGroups:group.subGroups.map(s=>s.id===id?g:s)});
  const removeSub=(id:string)=>onUpdate({...group,subGroups:group.subGroups.filter(s=>s.id!==id)});

  return (
    <div className={!isRoot?"w-full border border-lyra-border-subtle rounded-lyra-md p-3 bg-lyra-bg-surface-canvas":"w-full"}>
      <div className="flex items-center gap-2 mb-2">
        <ToggleGroup items={AS_LOGIC_ITEMS} value={group.logicOperator}
          onValueChange={v=>v&&onUpdate({...group,logicOperator:v as AsLogic})} />
        <span className="lyra-body-sm text-lyra-fg-secondary">
          {group.logicOperator==="and"?"All conditions must match":group.logicOperator==="or"?"Any one condition must match":"No conditions must match"}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2 w-full">
        {group.chips.map(chip=>{
          const def=AS_CRITERIA_DEFS[chip.criteriaId];
          return (
            <FilterChip key={chip.uid} label={def.label} operators={def.operators}
              selectedOperator={chip.operator} onOperatorChange={op=>updateChip(chip.uid,{operator:op})}
              options={def.options} selectedValues={chip.values}
              onSelectionChange={vals=>updateChip(chip.uid,{values:vals})}
              onRemove={()=>removeChip(chip.uid)} />
          );
        })}
        <AsCriteriaMenu onSelect={addChip} />
        <Button variant="outline" size="md" onClick={addSub}><Plus className="h-3.5 w-3.5" strokeWidth={2}/>Group</Button>
        {!isRoot && onDelete && <Button variant="ghost" size="md" onClick={onDelete}>Delete</Button>}
      </div>
      {group.subGroups.length>0 && (
        <div className="mt-3 flex flex-col gap-2">
          {group.subGroups.map(sub=>(
            <AsGroupRow key={sub.id} group={sub} onUpdate={g=>updateSub(sub.id,g)} onDelete={()=>removeSub(sub.id)} />
          ))}
        </div>
      )}
    </div>
  );
}

export function AdvancedSearchContent({ root, onUpdate }: { root: AsGroup; onUpdate: (g: AsGroup) => void }) {
  const [copied, setCopied] = useState(false);
  const description = asBuildString(root) || "No criteria defined";

  const handleCopy = () => {
    navigator.clipboard.writeText(description).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);});
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      <AsGroupRow group={root} isRoot onUpdate={onUpdate} />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="lyra-label text-lyra-fg-default">Criteria Description</span>
          <button type="button" onClick={handleCopy}
            className="lyra-hit-24 inline-flex items-center gap-1.5 lyra-body-sm text-lyra-fg-secondary hover:text-lyra-fg-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus rounded-lyra-xs px-1"
            aria-label="Copy criteria description">
            {copied?<><Check className="h-3.5 w-3.5 text-lyra-status-success-strong" strokeWidth={2}/>Copied</>
                   :<><Copy className="h-3.5 w-3.5" strokeWidth={1.5}/>Copy</>}
          </button>
        </div>
        <Input value={description} readonly className="w-full" />
      </div>
    </div>
  );
}


/** An empty query. */
export const emptyAsRoot = (): AsGroup => ({ id: "as-root", logicOperator: "and", chips: [], subGroups: [] });

/** True when the query has at least one criteria chip anywhere in it. */
export const asHasAnyFilters = (g: AsGroup): boolean =>
  g.chips.length > 0 || g.subGroups.some(asHasAnyFilters);
