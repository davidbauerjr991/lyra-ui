import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DhMLlvMY.js";import{C as h}from"./container-header-D4Ea_yH4.js";import{B as a}from"./button-CRbHmIRe.js";import{B as v}from"./badge-Bcxq6Iyh.js";import{I as V}from"./info-icon-CVWl96lq.js";import{T as j,a as D}from"./tabs-CPb-HBhE.js";import{S as A}from"./settings-B3RqFsd1.js";import{G as I}from"./grip-vertical-B5uO6fqM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./utils-BLSKlp9E.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./index-1evVQkiP.js";import"./spinner-xIhFAlhc.js";import"./kebab-menu-button-9ocCcIsG.js";import"./menu-radix-CvLtHTnr.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./index-ufxNB_-2.js";import"./index-DDAUwIz-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./ellipsis-vertical-D6ttVBVO.js";import"./menu-t1I_d-Gy.js";import"./menu-item-uivF4bHz.js";import"./trash-2-DTLo779S.js";function H({title:t="Container Title",bordered:b=!1,background:g="none",showClose:f=!1,showDraggable:o=!1,showBack:p=!1,showIcon:r=!1,showBadge:y=!1,showSubhead:w=!1,showActions:s=!1,showButtons:l=!1,showTabs:B=!1,showTitle:C=!0}){const[T,k]=S.useState(0),x=["Overview","Detail","History"];return e.jsx(h,{title:C?t:void 0,bordered:b,background:g,className:o?"cursor-grab select-none active:cursor-grabbing":void 0,icon:o||r?e.jsxs("span",{className:"flex items-center gap-1.5",children:[o&&e.jsx("span",{"aria-hidden":"true",className:"flex text-lyra-fg-secondary",children:e.jsx(I,{className:"h-4 w-4",strokeWidth:1.5})}),r&&e.jsx(V,{className:"h-5 w-5"})]}):void 0,onBack:p?()=>{}:void 0,onClose:f?()=>{}:void 0,titleBadge:y?e.jsx(v,{shape:"circle",count:5,variant:"critical",size:"sm"}):void 0,subhead:w?"Filter and search across all records":void 0,actions:s||l?e.jsxs(e.Fragment,{children:[l&&e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",size:"md",children:"Action"}),e.jsx(a,{variant:"outline",size:"md",children:"Action"})]}),s&&e.jsx(a,{variant:"ghost",size:"icon",title:"Settings",children:e.jsx(A,{className:"h-4 w-4",strokeWidth:1.5})})]}):void 0,tabs:B?e.jsx(j,{className:"px-4",children:x.map((i,c)=>e.jsx(D,{active:T===c,onClick:()=>k(c),children:i},i))}):void 0})}const ye={title:"Custom Primitives/ContainerHeader",component:h,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}},n={parameters:{controls:{include:["Title","Title text","Style","Header divider","Draggable","Back button","Close button","Icon","Badge","Subhead","Actions","Buttons","Tabs","showTitle","title","background","bordered","showDraggable","showBack","showClose","showIcon","showBadge","showSubhead","showActions","showButtons","showTabs"],sort:"none"}},args:{title:"Container Title",showTitle:!0,background:"none",bordered:!1,showDraggable:!1,showBack:!1,showClose:!1,showIcon:!1,showBadge:!1,showSubhead:!1,showActions:!1,showButtons:!1,showTabs:!1},argTypes:{showTitle:{name:"Title",control:"boolean",description:"Show the header title (`title`). Turn it off for an icon-only or action-only header.",table:{category:"Content",defaultValue:{summary:"true"}}},title:{name:"Title text",control:"text",description:"Text of the title.",if:{arg:"showTitle",truthy:!0},table:{category:"Content"}},background:{name:"Style",control:"radio",options:["none","subtle"],labels:{none:"None",subtle:"Subtle"},description:"Header background (`background`).",table:{category:"Appearance",defaultValue:{summary:"none"}}},bordered:{name:"Header divider",control:"boolean",description:"Border along the bottom edge of the header (`bordered`). Dropped automatically when tabs are on.",table:{category:"Appearance",defaultValue:{summary:"false"}}},showDraggable:{name:"Draggable",control:"boolean",description:"Show the drag grip before the title and make the whole header a grab target (grab cursor), as in a floating panel. Placement only: it doesn't drag anything here (`Draggable` and `Modal`'s `draggable` do the dragging).",table:{category:"Content",defaultValue:{summary:"false"}}},showBack:{name:"Back button",control:"boolean",description:"Back arrow before the title (`onBack`), for drilling into a sub-view.",table:{category:"Content",defaultValue:{summary:"false"}}},showClose:{name:"Close button",control:"boolean",description:"Built-in close button at the far right (`onClose`).",table:{category:"Content",defaultValue:{summary:"false"}}},showIcon:{name:"Icon",control:"boolean",description:"Icon to the left of the title (`icon`).",table:{category:"Content",defaultValue:{summary:"false"}}},showBadge:{name:"Badge",control:"boolean",description:"Count badge inline after the title (`titleBadge`).",table:{category:"Content",defaultValue:{summary:"false"}}},showSubhead:{name:"Subhead",control:"boolean",description:"Supporting line under the title (`subhead`).",table:{category:"Content",defaultValue:{summary:"false"}}},showActions:{name:"Actions",control:"boolean",description:"Icon action on the right (`actions`).",table:{category:"Content",defaultValue:{summary:"false"}}},showButtons:{name:"Buttons",control:"boolean",description:"Two outline buttons on the right (`actions`).",table:{category:"Content",defaultValue:{summary:"false"}}},showTabs:{name:"Tabs",control:"boolean",description:"Tab row inside the header (`tabs`).",table:{category:"Content",defaultValue:{summary:"false"}}}},render:t=>e.jsx(H,{...t},JSON.stringify(t))};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display name, so both names and keys are listed.
      include: ["Title", "Title text", "Style", "Header divider", "Draggable", "Back button", "Close button", "Icon", "Badge", "Subhead", "Actions", "Buttons", "Tabs", "showTitle", "title", "background", "bordered", "showDraggable", "showBack", "showClose", "showIcon", "showBadge", "showSubhead", "showActions", "showButtons", "showTabs"],
      sort: "none"
    }
  },
  args: {
    title: "Container Title",
    showTitle: true,
    background: "none",
    bordered: false,
    showDraggable: false,
    showBack: false,
    showClose: false,
    showIcon: false,
    showBadge: false,
    showSubhead: false,
    showActions: false,
    showButtons: false,
    showTabs: false
  },
  argTypes: {
    showTitle: {
      name: "Title",
      control: "boolean",
      description: "Show the header title (\`title\`). Turn it off for an icon-only or action-only header.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    title: {
      name: "Title text",
      control: "text",
      description: "Text of the title.",
      if: {
        arg: "showTitle",
        truthy: true
      },
      table: {
        category: "Content"
      }
    },
    background: {
      name: "Style",
      control: "radio",
      options: ["none", "subtle"],
      labels: {
        none: "None",
        subtle: "Subtle"
      },
      description: "Header background (\`background\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "none"
        }
      }
    },
    bordered: {
      name: "Header divider",
      control: "boolean",
      description: "Border along the bottom edge of the header (\`bordered\`). Dropped automatically when tabs are on.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showDraggable: {
      name: "Draggable",
      control: "boolean",
      description: "Show the drag grip before the title and make the whole header a grab target (grab cursor), as in a floating panel. Placement only: it doesn't drag anything here (\`Draggable\` and \`Modal\`'s \`draggable\` do the dragging).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showBack: {
      name: "Back button",
      control: "boolean",
      description: "Back arrow before the title (\`onBack\`), for drilling into a sub-view.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showClose: {
      name: "Close button",
      control: "boolean",
      description: "Built-in close button at the far right (\`onClose\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Icon to the left of the title (\`icon\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showBadge: {
      name: "Badge",
      control: "boolean",
      description: "Count badge inline after the title (\`titleBadge\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showSubhead: {
      name: "Subhead",
      control: "boolean",
      description: "Supporting line under the title (\`subhead\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Icon action on the right (\`actions\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showButtons: {
      name: "Buttons",
      control: "boolean",
      description: "Two outline buttons on the right (\`actions\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    showTabs: {
      name: "Tabs",
      control: "boolean",
      description: "Tab row inside the header (\`tabs\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    }
  },
  render: args => <HeaderDemo key={JSON.stringify(args)} {...args} />
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const we=["Default"];export{n as Default,we as __namedExportsOrder,ye as default};
