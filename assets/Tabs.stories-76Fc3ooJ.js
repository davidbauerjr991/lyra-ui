import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DhMLlvMY.js";import{T as R,a as L,b as F,c as _}from"./tabs-6i-SsgbO.js";import{R as P}from"./Tabs.shared-Ctp19rlq.js";import{L as H}from"./layout-grid-Be0M4-D4.js";import{S as $}from"./settings-B3RqFsd1.js";import{F as Y}from"./file-text-DK8c8V5C.js";import{L as G}from"./lock-CXrNv7Qc.js";import{B as J}from"./bell-16x-NcfM.js";import{S as U}from"./star-CKl-uXvS.js";import{A as q}from"./arrow-left-Bi_-X62A.js";import{A as K}from"./arrow-right-DLDQNhbU.js";import{P as Q}from"./pencil-IFm_bK0G.js";import{C as X}from"./copy-CtBWyGKZ.js";import{T as Z}from"./trash-2-DTLo779S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./utils-BLSKlp9E.js";import"./kebab-menu-button-ELtDHAkh.js";import"./menu-radix-CtpLdDaB.js";import"./index-DGBzHazk.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./createLucideIcon-aII_sYFw.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./badge-CJVmnMhy.js";import"./index-1evVQkiP.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-BOmxrDJo.js";import"./menu-item-5A6Jq-l-.js";import"./tooltip-DKTByY8R.js";import"./x-CzxgOx-T.js";const Ye={title:"Custom Primitives/Tabs",component:R,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{fullWidth:{control:"boolean"},overflowMenu:{control:"boolean"}}},T=[3,12,5,8,24,1],ee={success:"success",warning:"warning",error:"critical"},x=[H,$,Y,G,J,U];function oe({tabCount:l=3,overflowMenu:C=!1,fullWidth:M=!1,withIcons:V=!1,iconOnly:h=!1,removable:B=!1,withMenu:b=!1,reorderable:s=!1,withBadge:p=!1,badgeType:f="number",size:I="md",withSeverity:O=!1,severityType:N="success"}){const[t,u]=S.useState(()=>Array.from({length:l},(e,a)=>a)),[d,y]=S.useState(0),j=P,g=e=>{const a=t.filter(n=>n!==e);u(a),d===e&&a.length>0&&y(a[0])},v=(e,a)=>{const n=t.indexOf(e),r=n+a;if(r<0||r>=t.length)return;const i=[...t];i.splice(n,1),i.splice(r,0,e),u(i),_(`Tab Section ${e+1}, moved to position ${r+1} of ${t.length}`)},D=e=>{const a=t.indexOf(e),n=b?[{id:"rename",label:"Rename",icon:o.jsx(Q,{className:"h-4 w-4",strokeWidth:1.5})},{id:"duplicate",label:"Duplicate",icon:o.jsx(X,{className:"h-4 w-4",strokeWidth:1.5})}]:[],r=s?[{id:"move-left",label:"Move left",icon:o.jsx(q,{className:"h-4 w-4",strokeWidth:1.5}),disabled:a===0,onClick:()=>v(e,-1)},{id:"move-right",label:"Move right",icon:o.jsx(K,{className:"h-4 w-4",strokeWidth:1.5}),disabled:a===t.length-1,onClick:()=>v(e,1)}]:[],w=[n,r,b?[{id:"delete",label:"Delete",icon:o.jsx(Z,{className:"h-4 w-4",strokeWidth:1.5}),onClick:()=>g(e)}]:[]].filter(c=>c.length>0);if(w.length!==0)return w.flatMap((c,E)=>E===0?c:["separator",...c])},z=e=>u(e.map(Number));return o.jsxs("div",{children:[o.jsx(R,{fullWidth:M,size:I,overflowMenu:C,reorderable:s,keyboardReorder:s,onReorder:z,"aria-label":"Demo tabs",children:t.map(e=>{const a=x[e%x.length],n=T[e%T.length],r=o.jsx(a,{className:"h-4 w-4",strokeWidth:1.5});return o.jsx(L,{active:d===e,onClick:()=>y(e),icon:V||h?r:void 0,iconOnly:h,badge:p&&f==="number"?n:void 0,error:p&&f==="error",severity:O?ee[N]:void 0,onRemove:B?()=>g(e):void 0,removeIcon:j,removeFocusable:!0,menuItems:D(e),menuFocusable:!0,children:s?`Tab Section ${e+1}`:"Tab Section"},e)})}),t.map(e=>o.jsx(F,{active:d===e,children:o.jsxs("div",{className:"p-4 lyra-body-md text-lyra-fg-default",children:["Content for tab ",e+1]})},e)),s&&o.jsx("p",{className:"lyra-body-sm text-lyra-fg-secondary mt-2",children:"Drag a tab, or focus one and press Ctrl+Shift+← / →. Each tab’s kebab menu also has Move left / Move right."})]})}const m={render:l=>o.jsx(oe,{...l},JSON.stringify(l)),args:{tabCount:3,overflowMenu:!1,fullWidth:!1,withIcons:!1,iconOnly:!1,removable:!1,withMenu:!1,reorderable:!1,withBadge:!1,badgeType:"number",size:"md",withSeverity:!1,severityType:"success"},parameters:{controls:{include:["Overflow menu","Removable","With menu","Reorderable","Number of tabs","Full width","With icons","Icon only","With badge","Badge type","Size","With severity","Severity type","overflowMenu","removable","withMenu","reorderable","tabCount","fullWidth","withIcons","iconOnly","withBadge","badgeType","size","withSeverity","severityType"],sort:"none"}},argTypes:{overflowMenu:{name:"Overflow menu",control:"boolean",description:"When the row runs out of room, collapses extra tabs into a “More” dropdown (`overflowMenu`).",table:{category:"Behavior",defaultValue:{summary:"false"}}},removable:{name:"Removable",control:"boolean",description:"Adds a close button to each tab that removes it (`onRemove`). Change any control to bring removed tabs back.",table:{category:"Behavior",defaultValue:{summary:"false"}}},withMenu:{name:"With menu",control:"boolean",description:"Adds a kebab (⋮) menu to each tab (`menuItems`) with Rename, Duplicate and Delete. With Removable on too, the “×” sits at the far right, after the kebab. Reach both with the arrow keys, right after their tab.",table:{category:"Behavior",defaultValue:{summary:"false"}}},reorderable:{name:"Reorderable",control:"boolean",description:"Lets people reorder the tabs: drag one, press Ctrl+Shift+Left / Right on a focused tab, or use Move left / Move right in its kebab menu (`reorderable`, `keyboardReorder`). Changes are announced to screen readers.",table:{category:"Behavior",defaultValue:{summary:"false"}}},tabCount:{name:"Number of tabs",control:{type:"range",min:1,max:6,step:1},description:"How many tabs to show.",table:{category:"Content",defaultValue:{summary:"3"}}},fullWidth:{name:"Full width",control:"boolean",description:"Tabs stretch to fill the whole row (`fullWidth`).",table:{category:"Appearance",defaultValue:{summary:"false"}}},withIcons:{name:"With icons",control:"boolean",description:"Puts an icon before each tab’s text (`icon`). Hidden when Icon only is on, which always shows icons.",if:{arg:"iconOnly",truthy:!1},table:{category:"Appearance",defaultValue:{summary:"false"}}},withBadge:{name:"With badge",control:"boolean",description:"Adds a badge to each tab (`badge` or `error`): after the text, or on the icon’s top-right corner when Icon only is on.",table:{category:"Appearance",defaultValue:{summary:"false"}}},badgeType:{name:"Badge type",control:"radio",options:["number","error"],description:"Number shows a count (`badge`); error shows a red “!” (`error`).",if:{arg:"withBadge",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"number"}}},size:{name:"Size",control:"radio",options:["md","sm"],description:"Medium (48px) or small, a compact 36px row (`size`).",table:{category:"Appearance",defaultValue:{summary:"md"}}},withSeverity:{name:"With severity",control:"boolean",description:"Colors the tabs by how urgent they are (`severity`).",table:{category:"Appearance",defaultValue:{summary:"false"}}},severityType:{name:"Severity type",control:"radio",options:["success","warning","error"],description:"Success (green), warning (amber) or error (red).",if:{arg:"withSeverity",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"success"}}},iconOnly:{name:"Icon only",control:"boolean",description:"Shows just the icon on each tab (`iconOnly`). The label stays for screen readers and appears in a tooltip on hover or focus.",table:{category:"Appearance",defaultValue:{summary:"false"}}}}};var W,k,A;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <TabsDemo key={JSON.stringify(args)} {...args} />,
  args: {
    tabCount: 3,
    overflowMenu: false,
    fullWidth: false,
    withIcons: false,
    iconOnly: false,
    removable: false,
    withMenu: false,
    reorderable: false,
    withBadge: false,
    badgeType: "number",
    size: "md",
    withSeverity: false,
    severityType: "success"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Overflow menu", "Removable", "With menu", "Reorderable", "Number of tabs", "Full width", "With icons", "Icon only", "With badge", "Badge type", "Size", "With severity", "Severity type", "overflowMenu", "removable", "withMenu", "reorderable", "tabCount", "fullWidth", "withIcons", "iconOnly", "withBadge", "badgeType", "size", "withSeverity", "severityType"],
      sort: "none"
    }
  },
  argTypes: {
    overflowMenu: {
      name: "Overflow menu",
      control: "boolean",
      description: "When the row runs out of room, collapses extra tabs into a “More” dropdown (\`overflowMenu\`).",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    removable: {
      name: "Removable",
      control: "boolean",
      description: "Adds a close button to each tab that removes it (\`onRemove\`). Change any control to bring removed tabs back.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    withMenu: {
      name: "With menu",
      control: "boolean",
      description: "Adds a kebab (⋮) menu to each tab (\`menuItems\`) with Rename, Duplicate and Delete. With Removable on too, the “×” sits at the far right, after the kebab. Reach both with the arrow keys, right after their tab.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    reorderable: {
      name: "Reorderable",
      control: "boolean",
      description: "Lets people reorder the tabs: drag one, press Ctrl+Shift+Left / Right on a focused tab, or use Move left / Move right in its kebab menu (\`reorderable\`, \`keyboardReorder\`). Changes are announced to screen readers.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    tabCount: {
      name: "Number of tabs",
      control: {
        type: "range",
        min: 1,
        max: 6,
        step: 1
      },
      description: "How many tabs to show.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "3"
        }
      }
    },
    fullWidth: {
      name: "Full width",
      control: "boolean",
      description: "Tabs stretch to fill the whole row (\`fullWidth\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    withIcons: {
      name: "With icons",
      control: "boolean",
      description: "Puts an icon before each tab’s text (\`icon\`). Hidden when Icon only is on, which always shows icons.",
      if: {
        arg: "iconOnly",
        truthy: false
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    withBadge: {
      name: "With badge",
      control: "boolean",
      description: "Adds a badge to each tab (\`badge\` or \`error\`): after the text, or on the icon’s top-right corner when Icon only is on.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    badgeType: {
      name: "Badge type",
      control: "radio",
      options: ["number", "error"],
      description: "Number shows a count (\`badge\`); error shows a red “!” (\`error\`).",
      if: {
        arg: "withBadge",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "number"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["md", "sm"],
      description: "Medium (48px) or small, a compact 36px row (\`size\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "md"
        }
      }
    },
    withSeverity: {
      name: "With severity",
      control: "boolean",
      description: "Colors the tabs by how urgent they are (\`severity\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    severityType: {
      name: "Severity type",
      control: "radio",
      options: ["success", "warning", "error"],
      description: "Success (green), warning (amber) or error (red).",
      if: {
        arg: "withSeverity",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "success"
        }
      }
    },
    iconOnly: {
      name: "Icon only",
      control: "boolean",
      description: "Shows just the icon on each tab (\`iconOnly\`). The label stays for screen readers and appears in a tooltip on hover or focus.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    }
  }
}`,...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const Ge=["Default"];export{m as Default,Ge as __namedExportsOrder,Ye as default};
