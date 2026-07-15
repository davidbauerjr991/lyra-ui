import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as t,C as s}from"./cxone-logo-CS0SsXdD.js";import"./index-CXOcBcs0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";const v=[{items:[{label:"Admin"},{label:"Supervisor"},{label:"Agent"},{label:"Congingy AI"}]},{items:[{label:"Workforce Management"},{label:"Quality Management"},{label:"interaction Hub"},{label:"My Zone"}]},{items:[{label:"Dashboard"},{label:"Analytics"}]}],W={title:"UI/AppHeader/AppMenu",component:t,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}},a={render:()=>e.jsx(t,{groups:v,footer:e.jsx(s,{})})},n={name:"With Active Item",render:()=>{const f=[{items:[{label:"Admin"},{label:"Supervisor"},{label:"Agent",active:!0},{label:"Congingy AI"}]},{items:[{label:"Workforce Management"},{label:"Quality Management"},{label:"interaction Hub"},{label:"My Zone"}]},{items:[{label:"Dashboard"},{label:"Analytics"}]}];return e.jsx(t,{groups:f,footer:e.jsx(s,{})})}},r={name:"Item States",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary",children:'Hover and click items to see interactive states. The "Agent" item below is shown in the selected/active state.'}),e.jsx(t,{groups:[{items:[{label:"Admin"},{label:"Agent",active:!0},{label:"Congingy AI"}]}],footer:e.jsx(s,{})})]})},o={name:"Without Footer",render:()=>e.jsx(t,{groups:v})};var l,i,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <AppMenu groups={sampleGroups} footer={<CXoneLogo />} />
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "With Active Item",
  render: () => {
    const groups: AppMenuGroup[] = [{
      items: [{
        label: "Admin"
      }, {
        label: "Supervisor"
      }, {
        label: "Agent",
        active: true
      }, {
        label: "Congingy AI"
      }]
    }, {
      items: [{
        label: "Workforce Management"
      }, {
        label: "Quality Management"
      }, {
        label: "interaction Hub"
      }, {
        label: "My Zone"
      }]
    }, {
      items: [{
        label: "Dashboard"
      }, {
        label: "Analytics"
      }]
    }];
    return <AppMenu groups={groups} footer={<CXoneLogo />} />;
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,b,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Item States",
  render: () => <div className="space-y-6">
      <p className="lyra-body-sm text-lyra-fg-secondary">
        Hover and click items to see interactive states. The "Agent" item below is shown in the selected/active state.
      </p>
      <AppMenu groups={[{
      items: [{
        label: "Admin"
      }, {
        label: "Agent",
        active: true
      }, {
        label: "Congingy AI"
      }]
    }]} footer={<CXoneLogo />} />
    </div>
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var A,y,h;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Without Footer",
  render: () => <AppMenu groups={sampleGroups} />
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const C=["Default","WithActiveItem","States","WithoutFooter"];export{a as Default,r as States,n as WithActiveItem,o as WithoutFooter,C as __namedExportsOrder,W as default};
