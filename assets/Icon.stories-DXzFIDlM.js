import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as s}from"./icon-C6TtoyBV.js";import{I as o}from"./input-BgypaUyl.js";import{S as p}from"./star-BBKukw_S.js";import{B as m}from"./bell-BjgN3fdD.js";import{S as ce}from"./search-aUstRSOi.js";import{S as le}from"./settings-Ddbozet5.js";import{U as te}from"./user-rDz6zf5M.js";import{H as be}from"./house-7dsFQekL.js";import{c as v}from"./createLucideIcon-DEcfmm_F.js";import{F as Ie}from"./file-text-D-AW36xm.js";import{M as ie}from"./mail-CGsQAUqz.js";import{P as de}from"./phone-Di4N1bEU.js";import{C as me}from"./calendar-BHEDU7EC.js";import{L as pe}from"./lock-DfVEDs20.js";import{D as xe}from"./download-DQY7JPv0.js";import{C as je}from"./chevron-down-BRCsRsv-.js";import{a as fe,E as Ne}from"./eye-B9IHUGxF.js";import{I as ye}from"./label-DRpt0Xe7.js";import{T as ue}from"./triangle-alert-Btkn3DL5.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DsDWII6n.js";import"./index-DNfP5j1O.js";import"./index-DWcjTdiE.js";import"./index-DujEZ9g2.js";import"./error-icon-DM5nl_7y.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=v("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=v("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=v("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),ea={title:"Atoms/Icon",component:s,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}},argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["default","secondary","action","disabled","inverse","on-primary","active-strong","active-subtle","status-success","status-warning","status-critical","status-info","inherit"]},background:{control:"select",options:["none","primary","active","success","warning","critical","info","neutral","surface"]},shape:{control:"select",options:["none","rounded","circle"]}}},c={name:"Decorative Icon",render:()=>e.jsxs("div",{className:"flex items-center gap-2 rounded-lyra-md border border-lyra-border-subtle px-4 py-3",children:[e.jsx(s,{icon:p,size:"md",color:"action",decorative:!0}),e.jsx("span",{className:"lyra-body-md text-lyra-fg-default",children:"Saved to favorites"})]})},l={name:"Informative Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{icon:ge,size:"md",color:"status-success",label:"Success"}),e.jsx(s,{icon:ue,size:"md",color:"status-warning",label:"Warning"}),e.jsx(s,{icon:ve,size:"md",color:"status-critical",label:"Error"}),e.jsx(s,{icon:ye,size:"md",color:"status-info",label:"Info"})]}),e.jsxs("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Each icon has an ",e.jsx("code",{children:"aria-label"})," and ",e.jsx("code",{children:'role="img"'}),"."]})]})},t={name:"Tooltip Icon",render:()=>e.jsxs("div",{className:"flex items-center gap-4 p-6",children:[e.jsx(s,{icon:m,size:"md",color:"action",label:"Notifications",tooltip:!0}),e.jsx(s,{icon:le,size:"md",color:"action",label:"Settings",tooltip:!0}),e.jsx(s,{icon:te,size:"md",color:"action",label:"Profile",tooltip:!0}),e.jsx(s,{icon:xe,size:"md",color:"action",label:"Download",tooltip:!0})]})},i={name:"Input Leading Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(o,{label:"Search",placeholder:"Search...",startIcon:e.jsx(s,{icon:ce,size:"sm",color:"secondary",decorative:!0})}),e.jsx(o,{label:"Email",placeholder:"you@example.com",startIcon:e.jsx(s,{icon:ie,size:"sm",color:"secondary",decorative:!0})}),e.jsx(o,{label:"Phone",placeholder:"+1 (555) 000-0000",startIcon:e.jsx(s,{icon:de,size:"sm",color:"secondary",decorative:!0})})]})},d={name:"Input Trailing Icon",render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-72",children:[e.jsx(o,{label:"Password",type:"password",placeholder:"Enter password",endIcon:e.jsx(s,{icon:fe,size:"sm",color:"secondary",decorative:!0})}),e.jsx(o,{label:"Due date",placeholder:"MM/DD/YYYY",endIcon:e.jsx(s,{icon:me,size:"sm",color:"secondary",decorative:!0})}),e.jsx(o,{label:"Token",placeholder:"Paste token...",endIcon:e.jsx(s,{icon:pe,size:"sm",color:"disabled",decorative:!0})})]})},x={render:()=>e.jsx("div",{className:"flex items-center gap-6",children:["sm","md","lg"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:p,size:a,color:"action",decorative:!0}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:a})]},a))})},f={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6 p-4",children:[["default","Default"],["secondary","Secondary"],["action","Action"],["disabled","Disabled"],["active-strong","Active Strong"],["status-success","Success"],["status-warning","Warning"],["status-critical","Critical"],["status-info","Info"]].map(([a,r])=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:p,size:"md",color:a,decorative:!0}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:r})]},a))})},y={name:"Background variants",render:()=>e.jsxs("div",{className:"flex flex-col gap-8 p-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Rounded"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["primary","active","success","warning","critical","info","neutral","surface"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:m,size:"md",background:a,shape:"rounded",decorative:!0}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:a})]},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Circle"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["primary","active","success","warning","critical","info","neutral","surface"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:m,size:"md",background:a,shape:"circle",decorative:!0}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:a})]},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"lyra-label text-lyra-fg-secondary mb-3",children:"Sizes"}),e.jsx("div",{className:"flex items-end gap-4",children:["sm","md","lg"].map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{icon:m,size:a,background:"active",shape:"circle",decorative:!0}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:a})]},a))})]})]})},u={name:"All Variants",render:()=>{const a=["sm","md","lg"],r=[["default","Default"],["secondary","Secondary"],["action","Action"],["disabled","Disabled"],["active-strong","Active Strong"],["status-success","Success"],["status-warning","Warning"],["status-critical","Critical"],["status-info","Info"]];return e.jsx("div",{className:"flex flex-col gap-8 p-4",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-left pr-6 pb-3 lyra-body-sm text-lyra-fg-secondary font-medium",children:"Color \\ Size"}),a.map(n=>e.jsx("th",{className:"px-6 pb-3 lyra-body-sm text-lyra-fg-secondary font-medium text-center",children:n},n))]})}),e.jsx("tbody",{children:r.map(([n,he])=>e.jsxs("tr",{children:[e.jsx("td",{className:"pr-6 py-3 lyra-body-sm text-lyra-fg-secondary whitespace-nowrap",children:he}),a.map(h=>e.jsx("td",{className:"px-6 py-3 text-center",children:e.jsx(s,{icon:p,size:h,color:n,decorative:!0})},h))]},n))})]})})})}},g={name:"Common Icons",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4 p-4",children:[[ce,"Search"],[m,"Bell"],[le,"Settings"],[te,"User"],[be,"Home"],[ze,"Folder"],[Ie,"FileText"],[ie,"Mail"],[de,"Phone"],[me,"Calendar"],[pe,"Lock"],[xe,"Download"],[je,"ChevronDown"],[fe,"Eye"],[Ne,"EyeOff"],[p,"Star"],[ye,"Info"],[ue,"AlertTriangle"],[ge,"CheckCircle"],[ve,"XCircle"]].map(([a,r])=>e.jsxs("div",{className:"flex flex-col items-center gap-1 w-16",children:[e.jsx(s,{icon:a,size:"md",color:"default",decorative:!0}),e.jsx("span",{className:"lyra-body-sm text-lyra-fg-secondary text-center leading-tight",children:r})]},r))})};var b,I,j,N,z;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Decorative Icon",
  render: () => <div className="flex items-center gap-2 rounded-lyra-md border border-lyra-border-subtle px-4 py-3">
      <Icon icon={Star} size="md" color="action" decorative />
      <span className="lyra-body-md text-lyra-fg-default">Saved to favorites</span>
    </div>
}`,...(j=(I=c.parameters)==null?void 0:I.docs)==null?void 0:j.source},description:{story:"Decorative icons are purely visual. They are hidden from assistive\ntechnology with `aria-hidden` and should only be used when nearby\ntext already conveys the meaning.",...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.description}}};var S,w,C,k,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Informative Icon",
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Icon icon={CheckCircle} size="md" color="status-success" label="Success" />
        <Icon icon={AlertTriangle} size="md" color="status-warning" label="Warning" />
        <Icon icon={XCircle} size="md" color="status-critical" label="Error" />
        <Icon icon={Info} size="md" color="status-info" label="Info" />
      </div>
      <p className="lyra-body-sm text-lyra-fg-secondary">
        Each icon has an <code>aria-label</code> and <code>role="img"</code>.
      </p>
    </div>
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"Informative icons carry semantic meaning. Provide a `label` so screen\nreaders can announce the icon's purpose.",...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};var T,A,E,B,L;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Tooltip Icon",
  render: () => <div className="flex items-center gap-4 p-6">
      <Icon icon={Bell} size="md" color="action" label="Notifications" tooltip />
      <Icon icon={Settings} size="md" color="action" label="Settings" tooltip />
      <Icon icon={User} size="md" color="action" label="Profile" tooltip />
      <Icon icon={Download} size="md" color="action" label="Download" tooltip />
    </div>
}`,...(E=(A=t.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:"Tooltip icons show a tooltip on hover using the `label` as content.\nUseful when an icon appears without visible text.",...(L=(B=t.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var P,M,F,Y,U;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Input Leading Icon",
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input label="Search" placeholder="Search..." startIcon={<Icon icon={Search} size="sm" color="secondary" decorative />} />
      <Input label="Email" placeholder="you@example.com" startIcon={<Icon icon={Mail} size="sm" color="secondary" decorative />} />
      <Input label="Phone" placeholder="+1 (555) 000-0000" startIcon={<Icon icon={Phone} size="sm" color="secondary" decorative />} />
    </div>
}`,...(F=(M=i.parameters)==null?void 0:M.docs)==null?void 0:F.source},description:{story:"Icons used inside Input components — passed as the `startIcon` or\n`endIcon` render prop.",...(U=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:U.description}}};var V,H,W,X,O;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Input Trailing Icon",
  render: () => <div className="flex flex-col gap-4 w-72">
      <Input label="Password" type="password" placeholder="Enter password" endIcon={<Icon icon={Eye} size="sm" color="secondary" decorative />} />
      <Input label="Due date" placeholder="MM/DD/YYYY" endIcon={<Icon icon={Calendar} size="sm" color="secondary" decorative />} />
      <Input label="Token" placeholder="Paste token..." endIcon={<Icon icon={Lock} size="sm" color="disabled" decorative />} />
    </div>
}`,...(W=(H=d.parameters)==null?void 0:H.docs)==null?void 0:W.source},description:{story:"Icons used as trailing (end) decorations inside an Input.",...(O=(X=d.parameters)==null?void 0:X.docs)==null?void 0:O.description}}};var R,_,q;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      {(["sm", "md", "lg"] as IconSize[]).map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Icon icon={Star} size={size} color="action" decorative />
          <span className="lyra-body-sm text-lyra-fg-secondary">{size}</span>
        </div>)}
    </div>
}`,...(q=(_=x.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var Z,G,J;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 p-4">
      {([["default", "Default"], ["secondary", "Secondary"], ["action", "Action"], ["disabled", "Disabled"], ["active-strong", "Active Strong"], ["status-success", "Success"], ["status-warning", "Warning"], ["status-critical", "Critical"], ["status-info", "Info"]] as [IconColor, string][]).map(([color, label]) => <div key={color} className="flex flex-col items-center gap-2">
          <Icon icon={Star} size="md" color={color} decorative />
          <span className="lyra-body-sm text-lyra-fg-secondary">{label}</span>
        </div>)}
    </div>
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,$;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Background variants",
  render: () => <div className="flex flex-col gap-8 p-4">
      {/* Rounded */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Rounded</p>
        <div className="flex flex-wrap gap-4">
          {(["primary", "active", "success", "warning", "critical", "info", "neutral", "surface"] as const).map(bg => <div key={bg} className="flex flex-col items-center gap-2">
              <Icon icon={Bell} size="md" background={bg} shape="rounded" decorative />
              <span className="lyra-body-sm text-lyra-fg-secondary">{bg}</span>
            </div>)}
        </div>
      </div>

      {/* Circle */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Circle</p>
        <div className="flex flex-wrap gap-4">
          {(["primary", "active", "success", "warning", "critical", "info", "neutral", "surface"] as const).map(bg => <div key={bg} className="flex flex-col items-center gap-2">
              <Icon icon={Bell} size="md" background={bg} shape="circle" decorative />
              <span className="lyra-body-sm text-lyra-fg-secondary">{bg}</span>
            </div>)}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Sizes</p>
        <div className="flex items-end gap-4">
          {(["sm", "md", "lg"] as const).map(size => <div key={size} className="flex flex-col items-center gap-2">
              <Icon icon={Bell} size={size} background="active" shape="circle" decorative />
              <span className="lyra-body-sm text-lyra-fg-secondary">{size}</span>
            </div>)}
        </div>
      </div>
    </div>
}`,...($=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var ee,ae,se;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => {
    const sizes = ["sm", "md", "lg"] as IconSize[];
    const colors = [["default", "Default"], ["secondary", "Secondary"], ["action", "Action"], ["disabled", "Disabled"], ["active-strong", "Active Strong"], ["status-success", "Success"], ["status-warning", "Warning"], ["status-critical", "Critical"], ["status-info", "Info"]] as [IconColor, string][];
    return <div className="flex flex-col gap-8 p-4">
        <div className="overflow-x-auto">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="text-left pr-6 pb-3 lyra-body-sm text-lyra-fg-secondary font-medium">Color \\ Size</th>
                {sizes.map(size => <th key={size} className="px-6 pb-3 lyra-body-sm text-lyra-fg-secondary font-medium text-center">
                    {size}
                  </th>)}
              </tr>
            </thead>
            <tbody>
              {colors.map(([color, label]) => <tr key={color}>
                  <td className="pr-6 py-3 lyra-body-sm text-lyra-fg-secondary whitespace-nowrap">{label}</td>
                  {sizes.map(size => <td key={size} className="px-6 py-3 text-center">
                      <Icon icon={Star} size={size} color={color} decorative />
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>;
  }
}`,...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,oe,ne;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Common Icons",
  render: () => <div className="flex flex-wrap gap-4 p-4">
      {[[Search, "Search"], [Bell, "Bell"], [Settings, "Settings"], [User, "User"], [Home, "Home"], [Folder, "Folder"], [FileText, "FileText"], [Mail, "Mail"], [Phone, "Phone"], [Calendar, "Calendar"], [Lock, "Lock"], [Download, "Download"], [ChevronDown, "ChevronDown"], [Eye, "Eye"], [EyeOff, "EyeOff"], [Star, "Star"], [Info, "Info"], [AlertTriangle, "AlertTriangle"], [CheckCircle, "CheckCircle"], [XCircle, "XCircle"]].map(([LIcon, name]) => <div key={name as string} className="flex flex-col items-center gap-1 w-16">
          <Icon icon={LIcon as any} size="md" color="default" decorative />
          <span className="lyra-body-sm text-lyra-fg-secondary text-center leading-tight">
            {name as string}
          </span>
        </div>)}
    </div>
}`,...(ne=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const aa=["DecorativeIcon","InformativeIcon","TooltipIcon","InputLeadingIcon","InputTrailingIcon","Sizes","Colors","BackgroundVariants","AllVariants","CommonIcons"];export{u as AllVariants,y as BackgroundVariants,f as Colors,g as CommonIcons,c as DecorativeIcon,l as InformativeIcon,i as InputLeadingIcon,d as InputTrailingIcon,x as Sizes,t as TooltipIcon,aa as __namedExportsOrder,ea as default};
