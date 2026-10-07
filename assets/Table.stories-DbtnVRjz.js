import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DhMLlvMY.js";import{T as we,u as Ie,i as Oe,C as We,a as Ve,b as le,c as F,d as Ke,k as _e,f as Ue,S as Ye,e as i,G as ce}from"./table-D1rGpBC3.js";import{C as ue}from"./checkbox-CfX6-3Wq.js";import{M as $e}from"./menu-radix-9vcg5XDz.js";import{m as Xe,e as he,d as de,a as pe,b as be,f as u,t as Ze,c as eo,A as oo,g as to}from"./Table.queryBuilder-BQmH3ICS.js";import{C as ro}from"./circle-check-CVZLkmkV.js";import{M as no}from"./minus-CVnigrff.js";import{E as ao}from"./ellipsis-vertical-D6ttVBVO.js";import{C as so}from"./chevron-down-gMYAX9-q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./search-input-DbdcjRuV.js";import"./clear-button-Cb_QiePp.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./search-CZxBQJsH.js";import"./arrow-right-DLDQNhbU.js";import"./select-Ct-JPb8f.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./popover-Cbqqiubp.js";import"./index-DRSiSFY5.js";import"./container-header-i6DKumQe.js";import"./arrow-left-Bi_-X62A.js";import"./button-CLz1-b9g.js";import"./index-1evVQkiP.js";import"./badge-BIS9woDA.js";import"./spinner-xIhFAlhc.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./input-CHxvM1hc.js";import"./filter-chip-CakUwLBw.js";import"./sliders-horizontal-DYIYVQYC.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./arrow-up-DehsnLlv.js";import"./check-Dr3vGcdY.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./refresh-cw-D4nVfeiS.js";import"./pencil-IFm_bK0G.js";import"./copy-CtBWyGKZ.js";import"./trash-2-DTLo779S.js";import"./toggle-group-CTqjs6Td.js";import"./kebab-menu-button-CUREWany.js";import"./plus-BKUBo5Qt.js";const{useArgs:io}=__STORYBOOK_MODULE_PREVIEW_API__,Ct={title:"Custom Primitives/Table",component:we,tags:["autodocs"],parameters:{layout:"padded"}};function lo(c){return c===null?"asc":c==="asc"?"desc":null}const co={name:120,description:120,createdBy:100,region:90,status:90};function uo({startingSelection:c="none",sortable:s=!1,resizable:h=!1,toolbar:C=!1,showSearch:R=!0,showFilters:ye=!0,queryBuilder:d=!1,filterCount:xe=2,showColumns:k=!0,showActions:Se=!0,showTitle:Ce=!1,grouped:T=!1,groupBy:M="team",footer:D=!1,showDisplayCount:Te=!0,showRowsPerPage:ve=!0,autoFit:q=!1,showJumpButtons:Ae=!0,rowActions:G=!0,rowCount:z=5,maxHeight:Fe=!0,ariaLabel:Be="Agent desktops"}){const p=n.useMemo(()=>Xe(z),[z]),[N,E]=n.useState(c==="all"?p.map(e=>e.id):c==="some"?p.slice(0,2).map(e=>e.id):[]),[b,Q]=n.useState(null),[m,H]=n.useState(null),Re=e=>{if(b===e){const t=lo(m);H(t),t===null&&Q(null)}else Q(e),H("asc")},[J,De]=n.useState(""),[L,I]=n.useState(he),[O,Ne]=n.useState(new Set(de.map(e=>e.key))),g=ye&&!d,[j,W]=n.useState(pe),[f,v]=n.useState(null),[je,V]=n.useState(void 0),K=f!==null&&be(f),_=to.slice(0,xe),U=C&&R?J.trim().toLowerCase():"",Pe=e=>{if(U&&![e.name,e.description,e.createdBy].some(t=>t.toLowerCase().includes(U)))return!1;if(C&&g)for(const{key:t}of _){const r=L[t]??[];if(r.length>0&&!r.includes(u(e,t)))return!1}return!0},a=e=>!(C&&k)||O.has(e),l=p.filter(Pe).sort((e,t)=>{if(!s||!b||!m)return 0;const r=u(e,b).toLowerCase(),S=u(t,b).toLowerCase();return r<S?m==="asc"?-1:1:r>S?m==="asc"?1:-1:0}),[ke,Y]=n.useState(1),[Me,qe]=n.useState(10),$=Ie(40,40,3),X=D&&q,w=X?$.rowsPerPage:Me,Z=Math.max(1,Math.ceil(l.length/w)),ee=Math.min(ke,Z),A=(ee-1)*w,oe=D?l.slice(A,A+w):l,Ge=N.length===p.length?!0:N.length>0?"indeterminate":!1,ze=e=>b===e?m:null,te=e=>h?{resizable:!0,columnKey:e,minWidth:co[e]}:{},y=e=>h?{columnKey:e}:{},[P,re]=n.useState(T?M:null),Ee=T&&P!==null,ne=(e,t)=>o.jsx($e,{align:"start",modal:!1,className:"w-56",trigger:o.jsx("button",{type:"button","aria-label":`${t} column menu`,className:"flex h-6 w-6 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:o.jsx(so,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})}),items:[P===e?{id:"ungroup",label:"Ungroup rows",icon:o.jsx(ce,{className:"h-4 w-4",strokeWidth:1.5}),onClick:()=>re(null)}:{id:"group",label:`Group by "${t}"`,icon:o.jsx(ce,{className:"h-4 w-4",strokeWidth:1.5}),onClick:()=>re(e)}]}),ae=(e,t)=>T?o.jsxs("span",{className:"flex items-center gap-1",children:[t,ne(e,t)]}):t,x=(e,t,r)=>s?o.jsx(Ye,{className:r,sortDirection:ze(e),onSort:()=>Re(e),labelAction:T?ne(e,t):void 0,...te(e),children:t}):o.jsx(F,{className:r,...te(e),children:ae(e,t)}),[se,Qe]=n.useState(new Set),He=e=>Qe(t=>{const r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r}),Je=(()=>{const e=new Map;for(const t of oe){const r=u(t,P??M);e.set(r,[...e.get(r)??[],t])}return Array.from(e,([t,r])=>({label:t,rows:r}))})(),ie=e=>{const t=N.includes(e.id);return o.jsxs(le,{"data-state":t?"selected":void 0,children:[o.jsx(i,{className:"w-[40px] shrink-0",children:o.jsx(ue,{"aria-label":`Select ${e.name}`,checked:t,onCheckedChange:r=>E(S=>r===!0?[...S,e.id]:S.filter(Le=>Le!==e.id))})}),a("name")&&o.jsx(i,{className:"flex-[2] text-lyra-fg-link cursor-pointer hover:underline",...y("name"),children:e.name}),a("published")&&o.jsx(i,{className:"flex-1",children:e.published?o.jsx(ro,{className:"h-5 w-5 text-lyra-status-success-strong",strokeWidth:1.5}):o.jsx(no,{className:"h-5 w-5 text-lyra-fg-disabled",strokeWidth:1.5})}),a("description")&&o.jsx(i,{className:"flex-[2]",...y("description"),children:e.description}),a("createdBy")&&o.jsx(i,{className:"flex-[1.3]",...y("createdBy"),children:e.createdBy}),a("region")&&o.jsx(i,{className:"flex-1",...y("region"),children:u(e,"region")}),a("status")&&o.jsx(i,{className:"flex-1",...y("status"),children:u(e,"status")}),G&&o.jsx(i,{className:"w-[48px] shrink-0",children:o.jsx("button",{"aria-label":"More options",className:"flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:o.jsx(ao,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})})]},e.id)};return o.jsxs("div",{className:"flex flex-col",style:{height:Fe?400:"calc(100vh - 2rem)"},children:[C&&o.jsx(Oe,{title:Ce?"Agent desktops":void 0,searchQuery:R?J:void 0,onSearchChange:R?De:void 0,recordCount:l.length,showAdvancedSearch:d,advancedSearchContent:d?o.jsx(oo,{root:j,onUpdate:e=>{W(e),f!==null&&!be(e)&&v(null)}}):void 0,advancedSearchApplied:d&&K,advancedSearchTitle:je,advancedSearchDescription:K&&f&&eo(f)||void 0,onAdvancedSearchApply:()=>v(j),onSaveSearch:e=>{V(e),v(j)},filterDefs:g?_:void 0,filterValues:g?L:void 0,onFilterChange:g?(e,t)=>I(r=>({...r,[e]:t})):void 0,onFilterClear:g?()=>I(he()):d?()=>{v(null),W(pe()),V(void 0)}:void 0,actionDefs:Se?Ze:void 0,actions:k?o.jsx(We,{columns:de,visibleColumns:O,onVisibilityChange:Ne}):void 0}),o.jsx("div",{ref:X?$.containerRef:void 0,className:"min-h-0 flex-1",children:o.jsxs(we,{"aria-label":Be,children:[o.jsx(Ve,{children:o.jsxs(le,{className:"hover:bg-transparent",children:[o.jsx(F,{className:"w-[40px] shrink-0",children:o.jsx(ue,{"aria-label":"Select all rows",checked:Ge,onCheckedChange:e=>E(e===!0?p.map(t=>t.id):[])})}),a("name")&&x("name","Name","flex-[2]"),a("published")&&o.jsx(F,{className:"flex-1",children:ae("published","Published")}),a("description")&&x("description","Description","flex-[2]"),a("createdBy")&&x("createdBy","Created By","flex-[1.3]"),a("region")&&x("region","Region","flex-1"),a("status")&&x("status","Status","flex-1"),G&&o.jsx(F,{className:"w-[48px] shrink-0",children:o.jsx("span",{className:"sr-only",children:"Actions"})})]})}),o.jsx(Ke,{children:Ee?Je.map(e=>o.jsxs(n.Fragment,{children:[o.jsx(_e,{label:e.label,count:e.rows.length,expanded:!se.has(e.label),onToggle:()=>He(e.label)}),!se.has(e.label)&&e.rows.map(ie)]},e.label)):oe.map(ie)})]})}),D&&o.jsx(Ue,{currentPage:ee,totalPages:Z,onPageChange:Y,rowsPerPage:w,onRowsPerPageChange:e=>{qe(e),Y(1)},totalRecords:l.length,displayStart:l.length===0?0:A+1,displayEnd:Math.min(A+w,l.length),showDisplayCount:Te,showRowsPerPage:ve&&!q,showJumpButtons:Ae})]})}const B={args:{startingSelection:"none",sortable:!1,resizable:!1,toolbar:!1,showSearch:!0,showFilters:!0,queryBuilder:!1,filterCount:2,showColumns:!0,showActions:!0,showTitle:!1,grouped:!1,groupBy:"team",footer:!1,showDisplayCount:!0,showRowsPerPage:!0,autoFit:!1,showJumpButtons:!0,rowActions:!0,rowCount:5,maxHeight:!0,ariaLabel:"Agent desktops"},parameters:{controls:{include:["startingSelection","sortable","resizable","toolbar","showSearch","showFilters","queryBuilder","Query builder","filterCount","showColumns","showActions","showTitle","grouped","groupBy","footer","showDisplayCount","showRowsPerPage","autoFit","Auto-fit rows","showJumpButtons","ariaLabel","rowActions","rowCount","maxHeight","Max height","Number of rows","Starting selection","Sortable columns","Resizable columns","Toolbar","Search","Filters","Number of filters","Column toggle","Action buttons","Title","Grouped","Group by","Footer","Display count","Rows per page","Jump buttons","Accessible label","Row actions column"],sort:"none"}},argTypes:{startingSelection:{name:"Starting selection",control:"radio",options:["none","some","all"],description:"Which rows start selected. Selected rows are highlighted, and the header checkbox shows a dash when only some are selected.",table:{category:"Behavior"}},sortable:{name:"Sortable columns",control:"boolean",description:"Makes Name, Description and Created By sortable headers (`SortableTableHead`).",table:{category:"Behavior"}},resizable:{name:"Resizable columns",control:"boolean",description:"Adds a drag handle on the right edge of the Name, Description and Created By headers (`resizable`, `columnKey`). Focus a handle and use the arrow keys to resize from the keyboard.",table:{category:"Behavior"}},toolbar:{name:"Toolbar",control:"boolean",description:"Shows a toolbar above the table (`TableToolbar`) with a record count. Its own controls appear under Toolbar once this is on.",table:{category:"Behavior"}},showSearch:{name:"Search",control:"boolean",description:"Quick search in the toolbar. It filters the rows by name, description or creator (`searchQuery`).",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},showFilters:{name:"Filters",control:"boolean",description:"Filter chips for Description and Created By that filter the rows (`filterDefs`).",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},queryBuilder:{name:"Query builder",control:"boolean",description:"A Query Builder button that opens a panel for building a query from criteria and And/Or/Not groups (`showAdvancedSearch`). It replaces the filter chips, so turning it on switches Filters off and Filters can't be turned back on while it is on. Applying a query is display-only in this demo.",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},filterCount:{name:"Number of filters",control:"select",options:[1,2,3,4,5,6,7,8,9,10],description:"How many filter chips the toolbar shows, up to 10, added in this order: Description, Created By, Published, Team, Region, Status, Priority, Channel, Language, Tier. Each one filters the rows.",if:{arg:"showFilters",truthy:!0},table:{category:"Toolbar"}},showColumns:{name:"Column toggle",control:"boolean",description:"A menu to show or hide the table's columns (`ColumnToggle`).",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},showActions:{name:"Action buttons",control:"boolean",description:"Refresh, Edit, Copy and Delete icon buttons (`actionDefs`). They don't do anything in this demo.",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},showTitle:{name:"Title",control:"boolean",description:"Shows a title above the search row (`title`).",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},grouped:{name:"Grouped",control:"boolean",description:"Buckets the rows under collapsible group headers with a count (`TableGroupRow`). Groups start expanded. Each column header also gets a menu button to group by that column or ungroup.",table:{category:"Behavior"}},groupBy:{name:"Group by",control:"select",options:["team","region","status","published","description","createdBy"],description:"Which attribute the rows are grouped by. Description and Created By are unique per row here, so each makes one group per row; Team, Region, Status and Published give a few larger groups.",if:{arg:"grouped",truthy:!0},table:{category:"Behavior"}},footer:{name:"Footer",control:"boolean",description:"Shows a pagination footer below the table (`TableFooter`). Its own controls appear under Footer once this is on.",table:{category:"Behavior"}},showDisplayCount:{name:"Display count",control:"boolean",description:"The “Displaying X–Y of Z” record count (`showDisplayCount`).",if:{arg:"footer",truthy:!0},table:{category:"Footer"}},autoFit:{name:"Auto-fit rows",control:"boolean",description:"Rows per page is worked out from the table's height, so exactly as many rows as fit are shown and the footer pages through the rest (resize the window to see it adapt). The rows-per-page selector is hidden while this is on.",if:{arg:"footer",truthy:!0},table:{category:"Footer"}},showRowsPerPage:{name:"Rows per page",control:"boolean",description:"The rows-per-page selector (`showRowsPerPage`).",if:{arg:"footer",truthy:!0},table:{category:"Footer"}},showJumpButtons:{name:"Jump buttons",control:"boolean",description:"First-page and last-page buttons (`showJumpButtons`).",if:{arg:"footer",truthy:!0},table:{category:"Footer"}},rowCount:{name:"Number of rows",control:"select",options:[5,10,20,30,40,50,60,70,80,90,100],description:"Total rows in the table.",table:{category:"Content"}},maxHeight:{name:"Max height",control:"boolean",description:"On: the table sits in a 400px box. Off: it fills the full page height and the footer is fixed to the bottom of the page.",table:{category:"Appearance"}},ariaLabel:{name:"Accessible label",control:"text",description:"Name read by screen readers for the table (`aria-label`).",table:{category:"Content"}},rowActions:{name:"Row actions column",control:"boolean",description:"Shows the ⋮ button at the end of each row.",table:{category:"Appearance"}}},render:function(s){const[,h]=io();return n.useEffect(()=>{s.queryBuilder&&s.showFilters&&h({showFilters:!1})},[s.queryBuilder,s.showFilters,h]),o.jsx(uo,{...s},JSON.stringify(s))}};var me,ge,fe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    startingSelection: "none",
    sortable: false,
    resizable: false,
    toolbar: false,
    showSearch: true,
    showFilters: true,
    queryBuilder: false,
    filterCount: 2,
    showColumns: true,
    showActions: true,
    showTitle: false,
    grouped: false,
    groupBy: "team",
    footer: false,
    showDisplayCount: true,
    showRowsPerPage: true,
    autoFit: false,
    showJumpButtons: true,
    rowActions: true,
    rowCount: 5,
    maxHeight: true,
    ariaLabel: "Agent desktops"
  },
  parameters: {
    controls: {
      include: ["startingSelection", "sortable", "resizable", "toolbar", "showSearch", "showFilters", "queryBuilder", "Query builder", "filterCount", "showColumns", "showActions", "showTitle", "grouped", "groupBy", "footer", "showDisplayCount", "showRowsPerPage", "autoFit", "Auto-fit rows", "showJumpButtons", "ariaLabel", "rowActions", "rowCount", "maxHeight", "Max height", "Number of rows", "Starting selection", "Sortable columns", "Resizable columns", "Toolbar", "Search", "Filters", "Number of filters", "Column toggle", "Action buttons", "Title", "Grouped", "Group by", "Footer", "Display count", "Rows per page", "Jump buttons", "Accessible label", "Row actions column"],
      sort: "none"
    }
  },
  argTypes: {
    startingSelection: {
      name: "Starting selection",
      control: "radio",
      options: ["none", "some", "all"],
      description: "Which rows start selected. Selected rows are highlighted, and the header checkbox shows a dash when only some are selected.",
      table: {
        category: "Behavior"
      }
    },
    sortable: {
      name: "Sortable columns",
      control: "boolean",
      description: "Makes Name, Description and Created By sortable headers (\`SortableTableHead\`).",
      table: {
        category: "Behavior"
      }
    },
    resizable: {
      name: "Resizable columns",
      control: "boolean",
      description: "Adds a drag handle on the right edge of the Name, Description and Created By headers (\`resizable\`, \`columnKey\`). Focus a handle and use the arrow keys to resize from the keyboard.",
      table: {
        category: "Behavior"
      }
    },
    toolbar: {
      name: "Toolbar",
      control: "boolean",
      description: "Shows a toolbar above the table (\`TableToolbar\`) with a record count. Its own controls appear under Toolbar once this is on.",
      table: {
        category: "Behavior"
      }
    },
    showSearch: {
      name: "Search",
      control: "boolean",
      description: "Quick search in the toolbar. It filters the rows by name, description or creator (\`searchQuery\`).",
      if: {
        arg: "toolbar",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    showFilters: {
      name: "Filters",
      control: "boolean",
      description: "Filter chips for Description and Created By that filter the rows (\`filterDefs\`).",
      if: {
        arg: "toolbar",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    queryBuilder: {
      name: "Query builder",
      control: "boolean",
      description: "A Query Builder button that opens a panel for building a query from criteria and And/Or/Not groups (\`showAdvancedSearch\`). It replaces the filter chips, so turning it on switches Filters off and Filters can't be turned back on while it is on. Applying a query is display-only in this demo.",
      if: {
        arg: "toolbar",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    filterCount: {
      name: "Number of filters",
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      description: "How many filter chips the toolbar shows, up to 10, added in this order: Description, Created By, Published, Team, Region, Status, Priority, Channel, Language, Tier. Each one filters the rows.",
      if: {
        arg: "showFilters",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    showColumns: {
      name: "Column toggle",
      control: "boolean",
      description: "A menu to show or hide the table's columns (\`ColumnToggle\`).",
      if: {
        arg: "toolbar",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    showActions: {
      name: "Action buttons",
      control: "boolean",
      description: "Refresh, Edit, Copy and Delete icon buttons (\`actionDefs\`). They don't do anything in this demo.",
      if: {
        arg: "toolbar",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    showTitle: {
      name: "Title",
      control: "boolean",
      description: "Shows a title above the search row (\`title\`).",
      if: {
        arg: "toolbar",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    grouped: {
      name: "Grouped",
      control: "boolean",
      description: "Buckets the rows under collapsible group headers with a count (\`TableGroupRow\`). Groups start expanded. Each column header also gets a menu button to group by that column or ungroup.",
      table: {
        category: "Behavior"
      }
    },
    groupBy: {
      name: "Group by",
      control: "select",
      options: ["team", "region", "status", "published", "description", "createdBy"],
      description: "Which attribute the rows are grouped by. Description and Created By are unique per row here, so each makes one group per row; Team, Region, Status and Published give a few larger groups.",
      if: {
        arg: "grouped",
        truthy: true
      },
      table: {
        category: "Behavior"
      }
    },
    footer: {
      name: "Footer",
      control: "boolean",
      description: "Shows a pagination footer below the table (\`TableFooter\`). Its own controls appear under Footer once this is on.",
      table: {
        category: "Behavior"
      }
    },
    showDisplayCount: {
      name: "Display count",
      control: "boolean",
      description: "The “Displaying X–Y of Z” record count (\`showDisplayCount\`).",
      if: {
        arg: "footer",
        truthy: true
      },
      table: {
        category: "Footer"
      }
    },
    autoFit: {
      name: "Auto-fit rows",
      control: "boolean",
      description: "Rows per page is worked out from the table's height, so exactly as many rows as fit are shown and the footer pages through the rest (resize the window to see it adapt). The rows-per-page selector is hidden while this is on.",
      if: {
        arg: "footer",
        truthy: true
      },
      table: {
        category: "Footer"
      }
    },
    showRowsPerPage: {
      name: "Rows per page",
      control: "boolean",
      description: "The rows-per-page selector (\`showRowsPerPage\`).",
      if: {
        arg: "footer",
        truthy: true
      },
      table: {
        category: "Footer"
      }
    },
    showJumpButtons: {
      name: "Jump buttons",
      control: "boolean",
      description: "First-page and last-page buttons (\`showJumpButtons\`).",
      if: {
        arg: "footer",
        truthy: true
      },
      table: {
        category: "Footer"
      }
    },
    rowCount: {
      name: "Number of rows",
      control: "select",
      options: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      description: "Total rows in the table.",
      table: {
        category: "Content"
      }
    },
    maxHeight: {
      name: "Max height",
      control: "boolean",
      description: "On: the table sits in a 400px box. Off: it fills the full page height and the footer is fixed to the bottom of the page.",
      table: {
        category: "Appearance"
      }
    },
    ariaLabel: {
      name: "Accessible label",
      control: "text",
      description: "Name read by screen readers for the table (\`aria-label\`).",
      table: {
        category: "Content"
      }
    },
    rowActions: {
      name: "Row actions column",
      control: "boolean",
      description: "Shows the ⋮ button at the end of each row.",
      table: {
        category: "Appearance"
      }
    }
  },
  render: function Render(args) {
    // \`useArgs\` only works inside a story function, so it lives here rather
    // than in a child component. Query builder and filter chips are mutually
    // exclusive: while the query builder is on, Filters is switched off and
    // stays off.
    const [, updateArgs] = useArgs();
    useEffect(() => {
      if (args.queryBuilder && args.showFilters) updateArgs({
        showFilters: false
      });
    }, [args.queryBuilder, args.showFilters, updateArgs]);
    return (
      // \`key\` remounts the demo when a control changes — \`useState\`'s initial
      // value only applies on first mount.
      <TableDemo key={JSON.stringify(args)} {...args} />
    );
  }
}`,...(fe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const Tt=["Default"];export{B as Default,Tt as __namedExportsOrder,Ct as default};
