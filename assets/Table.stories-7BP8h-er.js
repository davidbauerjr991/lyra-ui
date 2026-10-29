import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DhMLlvMY.js";import{T as Fe,u as co,i as ho,C as uo,a as bo,b as fe,c as O,d as po,k as go,f as mo,S as fo,e as l,G as ye}from"./table--4Qx2r7x.js";import{C as yo}from"./container-C-GZbWug.js";import{f as wo,h as Co}from"./Container.shared-BTYWyEJs.js";import{C as we}from"./checkbox-BvtSqiEO.js";import{M as vo}from"./menu-radix-Bz1NtL8K.js";import{m as So,e as Ce,d as ve,f as b,t as To,a as Bo}from"./Table.shared-H7Rkas-_.js";import{e as Se,q as Q,d as xo,Q as Ao}from"./query-builder-Bas0a1uC.js";import{s as Te}from"./QueryBuilder.shared-DlHmQIuB.js";import{C as Fo}from"./circle-check-CVZLkmkV.js";import{M as Ho}from"./minus-CVnigrff.js";import{E as Ro}from"./ellipsis-vertical-D6ttVBVO.js";import{C as Oo}from"./chevron-down-gMYAX9-q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./show-more-zdMS6Dq2.js";import"./index-C3zmQXEb.js";import"./index-DOha2xPu.js";import"./index-C-870Axa.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./search-input-DMWMFm0V.js";import"./clear-button-dDMqPq-B.js";import"./tooltip-BnyLRSaS.js";import"./index-Bbt6qZUg.js";import"./x-CzxgOx-T.js";import"./createLucideIcon-aII_sYFw.js";import"./search-CZxBQJsH.js";import"./arrow-right-DLDQNhbU.js";import"./select-CqLB1K6d.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-FhkANc9R.js";import"./circle-help-DYnzmdO5.js";import"./popover-DKthd7ap.js";import"./index-DjOBIGyd.js";import"./container-header-CRBwP-Mp.js";import"./arrow-left-Bi_-X62A.js";import"./button-Cje2PXGX.js";import"./index-1evVQkiP.js";import"./badge-DnlHYDBX.js";import"./spinner-C_wii8DA.js";import"./loader-D8U98l95.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-up-dmEEfYqc.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./filter-chip-C5aRaTvf.js";import"./panel-left-DpPMtm_V.js";import"./panel-right-D5VBrIHO.js";import"./sliders-horizontal-DYIYVQYC.js";import"./arrow-up-DehsnLlv.js";import"./container-footer-BSIaMmWX.js";import"./tag-DQ3sj_Kb.js";import"./tabs-CB4kH1Fe.js";import"./kebab-menu-button-RTa_65iY.js";import"./trash-2-DTLo779S.js";import"./settings-B3RqFsd1.js";import"./box-DjPaLKGI.js";import"./grip-vertical-B5uO6fqM.js";import"./check-Dr3vGcdY.js";import"./index-DiXulCDa.js";import"./index-DDAUwIz-.js";import"./refresh-cw-D4nVfeiS.js";import"./pencil-IFm_bK0G.js";import"./copy-CtBWyGKZ.js";import"./input-DV2xaBHs.js";import"./toggle-group-DA1eutEW.js";import"./plus-BKUBo5Qt.js";const{useArgs:qo}=__STORYBOOK_MODULE_PREVIEW_API__,ar={title:"Custom Primitives/Table",component:Fe,tags:["autodocs"],parameters:{layout:"padded"}};function ko(d){return d===null?"asc":d==="asc"?"desc":null}const Do={name:120,description:120,createdBy:100,region:90,status:90};function No({startingSelection:d="none",sortable:a=!1,resizable:h=!1,striped:p=!1,container:s=!1,containerHeader:x=!1,containerHeaderTitle:He="Agent desktops",containerHeaderSubhead:Re="",containerHeaderActions:Oe=!0,containerHeaderBordered:qe=!0,containerFooter:z=!1,containerFooterAlign:ke="right",containerFooterBordered:De=!0,toolbar:A=!1,showSearch:F=!0,serverSearch:L=!1,showFilters:Ne=!0,queryBuilder:g=!1,queryBuilderLabel:je="Query Builder",queryBuilderFooter:k=!0,queryBuilderSave:Pe=!0,filterCount:Qe=2,showColumns:M=!0,showActions:ze=!0,showTitle:Le=!1,showRecordCount:Me=!1,grouped:H=!1,groupBy:E="team",footer:D=!1,showDisplayCount:Ee=!0,showRowsPerPage:We=!0,autoFit:W=!1,showJumpButtons:Ge=!0,rowActions:G=!0,rowCount:J=5,maxHeight:Je=!0,ariaLabel:Ie="Agent desktops"}){const m=n.useMemo(()=>So(J),[J]),[N,I]=n.useState(d==="all"?m.map(e=>e.id):d==="some"?m.slice(0,2).map(e=>e.id):[]),[f,V]=n.useState(null),[y,K]=n.useState(null),Ve=e=>{if(f===e){const t=ko(y);K(t),t===null&&V(null)}else V(e),K("asc")},[_,Ke]=n.useState(""),[U,Y]=n.useState(Ce),[$,_e]=n.useState(new Set(ve.map(e=>e.key))),u=Ne,[j,X]=n.useState(Se),[w,C]=n.useState(null),[Ue,Z]=n.useState(void 0),ee=w!==null&&Q(w),oe=Bo.slice(0,Qe),[Ye,$e]=n.useState(""),te=A&&F?(L?Ye:_).trim().toLowerCase():"",Xe=e=>{if(te&&![e.name,e.description,e.createdBy].some(t=>t.toLowerCase().includes(te)))return!1;if(A&&u)for(const{key:t}of oe){const r=U[t]??[];if(r.length>0&&!r.includes(b(e,t)))return!1}return!0},i=e=>!(A&&M)||$.has(e),c=m.filter(Xe).sort((e,t)=>{if(!a||!f||!y)return 0;const r=b(e,f).toLowerCase(),B=b(t,f).toLowerCase();return r<B?y==="asc"?-1:1:r>B?y==="asc"?1:-1:0}),[Ze,re]=n.useState(1),[eo,oo]=n.useState(10),ne=co(40,40,3),ae=D&&W,v=ae?ne.rowsPerPage:eo,ie=Math.max(1,Math.ceil(c.length/v)),se=Math.min(Ze,ie),R=(se-1)*v,le=D?c.slice(R,R+v):c,to=N.length===m.length?!0:N.length>0?"indeterminate":!1,ro=e=>f===e?y:null,ce=e=>h?{resizable:!0,columnKey:e,minWidth:Do[e]}:{},S=e=>h?{columnKey:e}:{},[P,de]=n.useState(H?E:null),no=H&&P!==null,he=(e,t)=>o.jsx(vo,{align:"start",modal:!1,className:"w-56",trigger:o.jsx("button",{type:"button","aria-label":`${t} column menu`,className:"flex h-6 w-6 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus",children:o.jsx(Oo,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})}),items:[P===e?{id:"ungroup",label:"Ungroup rows",icon:o.jsx(ye,{className:"h-4 w-4",strokeWidth:1.5}),onClick:()=>de(null)}:{id:"group",label:`Group by "${t}"`,icon:o.jsx(ye,{className:"h-4 w-4",strokeWidth:1.5}),onClick:()=>de(e)}]}),ue=(e,t)=>H?o.jsxs("span",{className:"flex items-center gap-1",children:[t,he(e,t)]}):t,T=(e,t,r)=>a?o.jsx(fo,{className:r,sortDirection:ro(e),onSort:()=>Ve(e),labelAction:H?he(e,t):void 0,...ce(e),children:t}):o.jsx(O,{className:r,...ce(e),children:ue(e,t)}),[be,ao]=n.useState(new Set),io=e=>ao(t=>{const r=new Set(t);return r.has(e)?r.delete(e):r.add(e),r}),so=(()=>{const e=new Map;for(const t of le){const r=b(t,P??E);e.set(r,[...e.get(r)??[],t])}return Array.from(e,([t,r])=>({label:t,rows:r}))})(),pe=e=>{const t=N.includes(e.id);return o.jsxs(fe,{"data-state":t?"selected":void 0,children:[o.jsx(l,{className:"w-[40px] shrink-0",children:o.jsx(we,{"aria-label":`Select ${e.name}`,checked:t,onCheckedChange:r=>I(B=>r===!0?[...B,e.id]:B.filter(lo=>lo!==e.id))})}),i("name")&&o.jsx(l,{className:"flex-[2] text-lyra-fg-link cursor-pointer hover:underline",...S("name"),children:e.name}),i("published")&&o.jsx(l,{className:"flex-1",children:e.published?o.jsx(Fo,{className:"h-5 w-5 text-lyra-status-success-strong",strokeWidth:1.5}):o.jsx(Ho,{className:"h-5 w-5 text-lyra-fg-disabled",strokeWidth:1.5})}),i("description")&&o.jsx(l,{className:"flex-[2]",...S("description"),children:e.description}),i("createdBy")&&o.jsx(l,{className:"flex-[1.3]",...S("createdBy"),children:e.createdBy}),i("region")&&o.jsx(l,{className:"flex-1",...S("region"),children:b(e,"region")}),i("status")&&o.jsx(l,{className:"flex-1",...S("status"),children:b(e,"status")}),G&&o.jsx(l,{className:"w-[48px] shrink-0",children:o.jsx("button",{"aria-label":"More options",className:"flex h-7 w-7 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-bg-surface-shell transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2",children:o.jsx(Ro,{className:"h-4 w-4",strokeWidth:1.5,"aria-hidden":"true"})})})]},e.id)},ge=s?"px-4":void 0,me=o.jsxs("div",{className:s?"flex min-h-0 flex-1 flex-col":"flex flex-col",style:s?void 0:{height:Je?400:"calc(100vh - 2rem)"},children:[A&&o.jsx(ho,{className:ge,title:Le?"Agent desktops":void 0,searchQuery:F?_:void 0,onSearchChange:F?Ke:void 0,onSearchSubmit:F&&L?$e:void 0,recordCount:c.length,showRecordCount:Me,showAdvancedSearch:g,advancedSearchLabel:je.trim()||void 0,advancedSearchContent:g?o.jsx(Ao,{criteria:Te,value:j,onChange:e=>{X(e),k?w!==null&&!Q(e)&&C(null):C(Q(e)?e:null)}}):void 0,advancedSearchApplied:g&&ee,advancedSearchTitle:Ue,advancedSearchDescription:ee&&w&&xo(w,Te)||void 0,onAdvancedSearchApply:()=>C(j),advancedSearchFooter:k,onSaveSearch:k&&Pe?e=>{Z(e),C(j)}:void 0,filterDefs:u?oe:void 0,filterValues:u?U:void 0,onFilterChange:u?(e,t)=>Y(r=>({...r,[e]:t})):void 0,onFilterClear:u||g?()=>{u&&Y(Ce()),g&&(C(null),X(Se()),Z(void 0))}:void 0,actionDefs:ze?To:void 0,actions:M?o.jsx(uo,{columns:ve,visibleColumns:$,onVisibilityChange:_e}):void 0}),o.jsx("div",{ref:ae?ne.containerRef:void 0,className:"min-h-0 flex-1",children:o.jsxs(Fe,{"aria-label":Ie,striped:p,children:[o.jsx(bo,{children:o.jsxs(fe,{className:"hover:bg-transparent",children:[o.jsx(O,{className:"w-[40px] shrink-0",children:o.jsx(we,{"aria-label":"Select all rows",checked:to,onCheckedChange:e=>I(e===!0?m.map(t=>t.id):[])})}),i("name")&&T("name","Name","flex-[2]"),i("published")&&o.jsx(O,{className:"flex-1",children:ue("published","Published")}),i("description")&&T("description","Description","flex-[2]"),i("createdBy")&&T("createdBy","Created By","flex-[1.3]"),i("region")&&T("region","Region","flex-1"),i("status")&&T("status","Status","flex-1"),G&&o.jsx(O,{className:"w-[48px] shrink-0",children:o.jsx("span",{className:"sr-only",children:"Actions"})})]})}),o.jsx(po,{children:no?so.map(e=>o.jsxs(n.Fragment,{children:[o.jsx(go,{label:e.label,count:e.rows.length,expanded:!be.has(e.label),onToggle:()=>io(e.label)}),!be.has(e.label)&&e.rows.map(pe)]},e.label)):le.map(pe)})]})}),D&&o.jsx(mo,{className:ge,currentPage:se,totalPages:ie,onPageChange:re,rowsPerPage:v,onRowsPerPageChange:e=>{oo(e),re(1)},totalRecords:c.length,displayStart:c.length===0?0:R+1,displayEnd:Math.min(R+v,c.length),showDisplayCount:Ee,showRowsPerPage:We&&!W,showJumpButtons:Ge})]});return s?o.jsx(yo,{radius:"md",className:"flex flex-col overflow-hidden",headerTitle:x?He:void 0,headerSubhead:x&&Re||void 0,headerActions:x&&Oe?Co:void 0,headerBordered:x&&qe,footerActions:z?wo:void 0,footerAlign:ke,footerBordered:z&&De,style:{resize:"both",width:"100%",maxWidth:"100%",height:420,minWidth:320,minHeight:200},children:me}):me}const q={args:{startingSelection:"none",sortable:!1,resizable:!1,striped:!1,container:!1,containerHeader:!1,containerHeaderTitle:"Agent desktops",containerHeaderSubhead:"",containerHeaderActions:!0,containerHeaderBordered:!0,containerFooter:!1,containerFooterAlign:"right",containerFooterBordered:!0,toolbar:!1,showSearch:!0,serverSearch:!1,searchControlsOn:!1,showFilters:!0,queryBuilder:!1,queryBuilderLabel:"Query Builder",queryBuilderFooter:!0,queryBuilderSave:!0,queryBuilderControlsOn:!1,filterCount:2,showColumns:!0,showActions:!0,showTitle:!1,showRecordCount:!1,grouped:!1,groupBy:"team",footer:!1,showDisplayCount:!0,showRowsPerPage:!0,autoFit:!1,showJumpButtons:!0,rowActions:!0,rowCount:5,maxHeight:!0,ariaLabel:"Agent desktops"},parameters:{controls:{include:["startingSelection","sortable","resizable","striped","container","containerHeader","containerHeaderTitle","containerHeaderSubhead","containerHeaderActions","containerHeaderBordered","containerFooter","containerFooterAlign","containerFooterBordered","toolbar","showSearch","serverSearch","showFilters","queryBuilder","Query builder","queryBuilderLabel","Query builder label","queryBuilderFooter","Query builder footer","queryBuilderSave","Query builder save","filterCount","showColumns","showActions","showTitle","showRecordCount","grouped","groupBy","footer","showDisplayCount","showRowsPerPage","autoFit","Auto-fit rows","showJumpButtons","ariaLabel","rowActions","rowCount","maxHeight","Max height","Number of rows","Starting selection","Sortable columns","Resizable columns","Striped rows","Resizable container","Container header","Header title","Header subhead","Header actions","Header divider","Container footer","Footer alignment","Footer divider","Toolbar","Search","Server-side search","Filters","Number of filters","Column toggle","Action buttons","Title","Record count","Grouped","Group by","Footer","Display count","Rows per page","Jump buttons","Accessible label","Row actions column"],sort:"none"}},argTypes:{startingSelection:{name:"Starting selection",control:"radio",options:["none","some","all"],description:"Which rows start selected. Selected rows are highlighted, and the header checkbox shows a dash when only some are selected.",table:{category:"Behavior"}},sortable:{name:"Sortable columns",control:"boolean",description:"Makes Name, Description and Created By sortable headers (`SortableTableHead`).",table:{category:"Behavior"}},resizable:{name:"Resizable columns",control:"boolean",description:"Adds a drag handle on the right edge of the Name, Description and Created By headers (`resizable`, `columnKey`). Focus a handle and use the arrow keys to resize from the keyboard. The dividers only show while the pointer is over the table header (always on touch screens).",table:{category:"Behavior"}},striped:{name:"Striped rows",control:"boolean",description:"Shades every other body row with a subtle surface so long rows are easier to follow (`striped` on `Table`). Hover and selected rows keep their own colors; the header is never striped.",table:{category:"Appearance"}},container:{name:"Resizable container",control:"boolean",description:"Puts the table in a lyra-ui `Container` you can drag to resize from its bottom-right corner. Use it to try Auto-fit rows (turn on Footer, then Auto-fit rows: rows per page follows the box's height) and the toolbar and footer width breakpoints. The box's size replaces Max height.",table:{category:"Behavior"}},containerHeader:{name:"Container header",control:"boolean",description:"A title and a settings button across the top of the container (`headerTitle`, `headerActions`), with a divider below it.",if:{arg:"container",truthy:!0},table:{category:"Behavior"}},containerFooter:{name:"Container footer",control:"boolean",description:"Cancel and Save buttons along the bottom of the container (`footerActions`), with a divider above them.",if:{arg:"container",truthy:!0},table:{category:"Behavior"}},containerHeaderTitle:{name:"Header title",control:"text",description:"Title text in the container header (`headerTitle`).",if:{arg:"containerHeader",truthy:!0},table:{category:"Container header"}},containerHeaderSubhead:{name:"Header subhead",control:"text",description:"Caption under the title (`headerSubhead`). Leave empty for none.",if:{arg:"containerHeader",truthy:!0},table:{category:"Container header"}},containerHeaderActions:{name:"Header actions",control:"boolean",description:"A settings icon button on the right of the header (`headerActions`).",if:{arg:"containerHeader",truthy:!0},table:{category:"Container header"}},containerHeaderBordered:{name:"Header divider",control:"boolean",description:"A dividing line below the header (`headerBordered`).",if:{arg:"containerHeader",truthy:!0},table:{category:"Container header"}},containerFooterAlign:{name:"Footer alignment",control:"inline-radio",options:["left","right","full"],description:"Where the footer buttons sit: left, right, or stretched to fill the width (`footerAlign`).",if:{arg:"containerFooter",truthy:!0},table:{category:"Container footer"}},containerFooterBordered:{name:"Footer divider",control:"boolean",description:"A dividing line above the footer (`footerBordered`).",if:{arg:"containerFooter",truthy:!0},table:{category:"Container footer"}},toolbar:{name:"Toolbar",control:"boolean",description:"Shows a toolbar above the table (`TableToolbar`) with a record count. Its own controls appear under Toolbar once this is on.",table:{category:"Behavior"}},showSearch:{name:"Search",control:"boolean",description:"Quick search in the toolbar. It filters the rows by name, description or creator (`searchQuery`).",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},serverSearch:{name:"Server-side search",control:"boolean",description:"Adds a submit button to the search field (`onSearchSubmit`). Once a term is typed, an arrow button appears; the rows only filter when it is clicked or Enter is pressed, instead of on every keystroke. Clearing the field resets the results.",if:{arg:"searchControlsOn",truthy:!0},table:{category:"Toolbar"}},searchControlsOn:{description:"Story plumbing: true while Toolbar and Search are both on.",control:!1,table:{disable:!0}},showFilters:{name:"Filters",control:"boolean",description:"Filter chips for Description and Created By that filter the rows (`filterDefs`).",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},queryBuilder:{name:"Query builder",control:"boolean",description:"A Query Builder button that opens a panel for building a query from criteria and And/Or/Not groups (`showAdvancedSearch`). It can be on together with the filter chips; one Clear button resets both. Applying a query is display-only in this demo.",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},queryBuilderLabel:{name:"Query builder label",control:"text",description:'Text on the Query Builder button (`advancedSearchLabel`). Once a query is applied the button reads "Applied Filters" (`advancedSearchAppliedLabel`).',if:{arg:"queryBuilderControlsOn",truthy:!0},table:{category:"Toolbar"}},queryBuilderFooter:{name:"Query builder footer",control:"boolean",description:"The Apply and Cancel buttons along the bottom of the Query Builder popover (`advancedSearchFooter`). Off: no footer, so there's nothing to confirm and every edit applies straight away (this demo does that).",if:{arg:"queryBuilderControlsOn",truthy:!0},table:{category:"Toolbar"}},queryBuilderSave:{name:"Query builder save",control:"boolean",description:"The Save Search button in the popover footer (shown when `onSaveSearch` is passed). Only applies while the footer is on.",if:{arg:"queryBuilderControlsOn",truthy:!0},table:{category:"Toolbar"}},queryBuilderControlsOn:{description:"Story plumbing: true while Toolbar and Query builder are both on.",control:!1,table:{disable:!0}},filterCount:{name:"Number of filters",control:"select",options:[1,2,3,4,5,6,7,8,9,10],description:"How many filter chips the toolbar shows, up to 10, added in this order: Description, Created By, Published, Team, Region, Status, Priority, Channel, Language, Tier. Each one filters the rows.",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},showColumns:{name:"Column toggle",control:"boolean",description:"A menu to show or hide the table's columns (`ColumnToggle`).",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},showActions:{name:"Action buttons",control:"boolean",description:"Refresh, Edit, Copy and Delete icon buttons (`actionDefs`). They don't do anything in this demo.",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},showTitle:{name:"Title",control:"boolean",description:"Shows a title above the search row (`title`).",if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},showRecordCount:{name:"Record count",control:"boolean",description:'Shows the total record count in the toolbar\'s title area (`showRecordCount` + `recordCount`). With Title on it reads "Title | 5 Records"; with Title off the count shows on its own. Off with Title on shows the title only.',if:{arg:"toolbar",truthy:!0},table:{category:"Toolbar"}},grouped:{name:"Grouped",control:"boolean",description:"Buckets the rows under collapsible group headers with a count (`TableGroupRow`). Groups start expanded. Each column header also gets a menu button to group by that column or ungroup.",table:{category:"Behavior"}},groupBy:{name:"Group by",control:"select",options:["team","region","status","published","description","createdBy"],description:"Which attribute the rows are grouped by. Description and Created By are unique per row here, so each makes one group per row; Team, Region, Status and Published give a few larger groups.",if:{arg:"grouped",truthy:!0},table:{category:"Behavior"}},footer:{name:"Footer",control:"boolean",description:"Shows a pagination footer below the table (`TableFooter`). Its own controls appear under Footer once this is on.",table:{category:"Behavior"}},showDisplayCount:{name:"Display count",control:"boolean",description:"The “Displaying X–Y of Z” record count (`showDisplayCount`).",if:{arg:"footer",truthy:!0},table:{category:"Footer"}},autoFit:{name:"Auto-fit rows",control:"boolean",description:"Rows per page is worked out from the table's height, so exactly as many rows as fit are shown and the footer pages through the rest (resize the window to see it adapt). The rows-per-page selector is hidden while this is on.",if:{arg:"footer",truthy:!0},table:{category:"Footer"}},showRowsPerPage:{name:"Rows per page",control:"boolean",description:"The rows-per-page selector (`showRowsPerPage`).",if:{arg:"footer",truthy:!0},table:{category:"Footer"}},showJumpButtons:{name:"Jump buttons",control:"boolean",description:"First-page and last-page buttons (`showJumpButtons`).",if:{arg:"footer",truthy:!0},table:{category:"Footer"}},rowCount:{name:"Number of rows",control:"select",options:[5,10,20,30,40,50,60,70,80,90,100],description:"Total rows in the table.",table:{category:"Content"}},maxHeight:{name:"Max height",control:"boolean",description:"On: the table sits in a 400px box. Off: it fills the full page height and the footer is fixed to the bottom of the page. Hidden while Resizable container is on, because the container's own size sets the height then.",if:{arg:"container",truthy:!1},table:{category:"Appearance"}},ariaLabel:{name:"Accessible label",control:"text",description:"Name read by screen readers for the table (`aria-label`).",table:{category:"Content"}},rowActions:{name:"Row actions column",control:"boolean",description:"Shows the ⋮ button at the end of each row.",table:{category:"Appearance"}}},render:function(a){const[,h]=qo(),p=!!(a.toolbar&&a.showSearch),s=!!(a.toolbar&&a.queryBuilder);return n.useEffect(()=>{a.searchControlsOn!==p&&h({searchControlsOn:p}),a.queryBuilderControlsOn!==s&&h({queryBuilderControlsOn:s})},[a.searchControlsOn,p,a.queryBuilderControlsOn,s,h]),o.jsx(No,{...a},JSON.stringify(a))}};var Be,xe,Ae;q.parameters={...q.parameters,docs:{...(Be=q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    startingSelection: "none",
    sortable: false,
    resizable: false,
    striped: false,
    container: false,
    containerHeader: false,
    containerHeaderTitle: "Agent desktops",
    containerHeaderSubhead: "",
    containerHeaderActions: true,
    containerHeaderBordered: true,
    containerFooter: false,
    containerFooterAlign: "right",
    containerFooterBordered: true,
    toolbar: false,
    showSearch: true,
    serverSearch: false,
    searchControlsOn: false,
    showFilters: true,
    queryBuilder: false,
    queryBuilderLabel: "Query Builder",
    queryBuilderFooter: true,
    queryBuilderSave: true,
    queryBuilderControlsOn: false,
    filterCount: 2,
    showColumns: true,
    showActions: true,
    showTitle: false,
    showRecordCount: false,
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
      include: ["startingSelection", "sortable", "resizable", "striped", "container", "containerHeader", "containerHeaderTitle", "containerHeaderSubhead", "containerHeaderActions", "containerHeaderBordered", "containerFooter", "containerFooterAlign", "containerFooterBordered", "toolbar", "showSearch", "serverSearch", "showFilters", "queryBuilder", "Query builder", "queryBuilderLabel", "Query builder label", "queryBuilderFooter", "Query builder footer", "queryBuilderSave", "Query builder save", "filterCount", "showColumns", "showActions", "showTitle", "showRecordCount", "grouped", "groupBy", "footer", "showDisplayCount", "showRowsPerPage", "autoFit", "Auto-fit rows", "showJumpButtons", "ariaLabel", "rowActions", "rowCount", "maxHeight", "Max height", "Number of rows", "Starting selection", "Sortable columns", "Resizable columns", "Striped rows", "Resizable container", "Container header", "Header title", "Header subhead", "Header actions", "Header divider", "Container footer", "Footer alignment", "Footer divider", "Toolbar", "Search", "Server-side search", "Filters", "Number of filters", "Column toggle", "Action buttons", "Title", "Record count", "Grouped", "Group by", "Footer", "Display count", "Rows per page", "Jump buttons", "Accessible label", "Row actions column"],
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
      description: "Adds a drag handle on the right edge of the Name, Description and Created By headers (\`resizable\`, \`columnKey\`). Focus a handle and use the arrow keys to resize from the keyboard. The dividers only show while the pointer is over the table header (always on touch screens).",
      table: {
        category: "Behavior"
      }
    },
    striped: {
      name: "Striped rows",
      control: "boolean",
      description: "Shades every other body row with a subtle surface so long rows are easier to follow (\`striped\` on \`Table\`). Hover and selected rows keep their own colors; the header is never striped.",
      table: {
        category: "Appearance"
      }
    },
    container: {
      name: "Resizable container",
      control: "boolean",
      description: "Puts the table in a lyra-ui \`Container\` you can drag to resize from its bottom-right corner. Use it to try Auto-fit rows (turn on Footer, then Auto-fit rows: rows per page follows the box's height) and the toolbar and footer width breakpoints. The box's size replaces Max height.",
      table: {
        category: "Behavior"
      }
    },
    containerHeader: {
      name: "Container header",
      control: "boolean",
      description: "A title and a settings button across the top of the container (\`headerTitle\`, \`headerActions\`), with a divider below it.",
      if: {
        arg: "container",
        truthy: true
      },
      table: {
        category: "Behavior"
      }
    },
    containerFooter: {
      name: "Container footer",
      control: "boolean",
      description: "Cancel and Save buttons along the bottom of the container (\`footerActions\`), with a divider above them.",
      if: {
        arg: "container",
        truthy: true
      },
      table: {
        category: "Behavior"
      }
    },
    containerHeaderTitle: {
      name: "Header title",
      control: "text",
      description: "Title text in the container header (\`headerTitle\`).",
      if: {
        arg: "containerHeader",
        truthy: true
      },
      table: {
        category: "Container header"
      }
    },
    containerHeaderSubhead: {
      name: "Header subhead",
      control: "text",
      description: "Caption under the title (\`headerSubhead\`). Leave empty for none.",
      if: {
        arg: "containerHeader",
        truthy: true
      },
      table: {
        category: "Container header"
      }
    },
    containerHeaderActions: {
      name: "Header actions",
      control: "boolean",
      description: "A settings icon button on the right of the header (\`headerActions\`).",
      if: {
        arg: "containerHeader",
        truthy: true
      },
      table: {
        category: "Container header"
      }
    },
    containerHeaderBordered: {
      name: "Header divider",
      control: "boolean",
      description: "A dividing line below the header (\`headerBordered\`).",
      if: {
        arg: "containerHeader",
        truthy: true
      },
      table: {
        category: "Container header"
      }
    },
    containerFooterAlign: {
      name: "Footer alignment",
      control: "inline-radio",
      options: ["left", "right", "full"],
      description: "Where the footer buttons sit: left, right, or stretched to fill the width (\`footerAlign\`).",
      if: {
        arg: "containerFooter",
        truthy: true
      },
      table: {
        category: "Container footer"
      }
    },
    containerFooterBordered: {
      name: "Footer divider",
      control: "boolean",
      description: "A dividing line above the footer (\`footerBordered\`).",
      if: {
        arg: "containerFooter",
        truthy: true
      },
      table: {
        category: "Container footer"
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
    serverSearch: {
      name: "Server-side search",
      control: "boolean",
      description: "Adds a submit button to the search field (\`onSearchSubmit\`). Once a term is typed, an arrow button appears; the rows only filter when it is clicked or Enter is pressed, instead of on every keystroke. Clearing the field resets the results.",
      // Only while the toolbar and its Search are both on (see \`searchControlsOn\`
      // and the \`useEffect\` in \`render\` — a control can only depend on one arg).
      if: {
        arg: "searchControlsOn",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    searchControlsOn: {
      description: "Story plumbing: true while Toolbar and Search are both on.",
      control: false,
      table: {
        disable: true
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
      description: "A Query Builder button that opens a panel for building a query from criteria and And/Or/Not groups (\`showAdvancedSearch\`). It can be on together with the filter chips; one Clear button resets both. Applying a query is display-only in this demo.",
      if: {
        arg: "toolbar",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    queryBuilderLabel: {
      name: "Query builder label",
      control: "text",
      description: "Text on the Query Builder button (\`advancedSearchLabel\`). Once a query is applied the button reads \\"Applied Filters\\" (\`advancedSearchAppliedLabel\`).",
      if: {
        arg: "queryBuilderControlsOn",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    queryBuilderFooter: {
      name: "Query builder footer",
      control: "boolean",
      description: "The Apply and Cancel buttons along the bottom of the Query Builder popover (\`advancedSearchFooter\`). Off: no footer, so there's nothing to confirm and every edit applies straight away (this demo does that).",
      if: {
        arg: "queryBuilderControlsOn",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    queryBuilderSave: {
      name: "Query builder save",
      control: "boolean",
      description: "The Save Search button in the popover footer (shown when \`onSaveSearch\` is passed). Only applies while the footer is on.",
      if: {
        arg: "queryBuilderControlsOn",
        truthy: true
      },
      table: {
        category: "Toolbar"
      }
    },
    queryBuilderControlsOn: {
      description: "Story plumbing: true while Toolbar and Query builder are both on.",
      control: false,
      table: {
        disable: true
      }
    },
    filterCount: {
      name: "Number of filters",
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      description: "How many filter chips the toolbar shows, up to 10, added in this order: Description, Created By, Published, Team, Region, Status, Priority, Channel, Language, Tier. Each one filters the rows.",
      if: {
        arg: "toolbar",
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
    showRecordCount: {
      name: "Record count",
      control: "boolean",
      description: "Shows the total record count in the toolbar's title area (\`showRecordCount\` + \`recordCount\`). With Title on it reads \\"Title | 5 Records\\"; with Title off the count shows on its own. Off with Title on shows the title only.",
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
      description: "On: the table sits in a 400px box. Off: it fills the full page height and the footer is fixed to the bottom of the page. Hidden while Resizable container is on, because the container's own size sets the height then.",
      if: {
        arg: "container",
        truthy: false
      },
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
    // A control can only depend on one other control, but Server-side search needs
    // Toolbar and Search on, and the Query builder options need Toolbar and Query
    // builder on — so keep hidden args in step with each pair.
    const [, updateArgs] = useArgs();
    const searchControlsOn = Boolean(args.toolbar && args.showSearch);
    const queryBuilderControlsOn = Boolean(args.toolbar && args.queryBuilder);
    useEffect(() => {
      if (args.searchControlsOn !== searchControlsOn) updateArgs({
        searchControlsOn
      });
      if (args.queryBuilderControlsOn !== queryBuilderControlsOn) updateArgs({
        queryBuilderControlsOn
      });
    }, [args.searchControlsOn, searchControlsOn, args.queryBuilderControlsOn, queryBuilderControlsOn, updateArgs]);
    return (
      // \`key\` remounts the demo when a control changes — \`useState\`'s initial
      // value only applies on first mount.
      <TableDemo key={JSON.stringify(args)} {...args} />
    );
  }
}`,...(Ae=(xe=q.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};const ir=["Default"];export{q as Default,ir as __namedExportsOrder,ar as default};
