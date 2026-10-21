import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-DhMLlvMY.js";import{M as u}from"./menu-item-uivF4bHz.js";import{B as v}from"./badge-BpOJAIFg.js";import{M as A}from"./MenuItem.shared-cuszaFXn.js";import{C as S}from"./chevron-right-BP9ksYh_.js";import{S as N}from"./star-CKl-uXvS.js";import{B}from"./box-DjPaLKGI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-BLSKlp9E.js";import"./index-1evVQkiP.js";import"./createLucideIcon-aII_sYFw.js";const P={title:"Custom Primitives/MenuItem",component:u,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}}};function I({count:t=1,density:p="comfortable",icon:f=!1,header:h=!1,description:b=!1,badge:a=!1,submenu:g=!1,rightSlot:o=!1,separator:y=!1,container:r=!0,padding:s=!0,leftBorder:w=!0,maxWidth:x=!0}){const C=a||o,i=Array.from({length:t},(M,W)=>e.jsxs(V.Fragment,{children:[e.jsx(u,{header:h?"New Case":void 0,label:"Menu Item",icon:f?e.jsx(B,{className:"h-4 w-4",strokeWidth:1.5}):void 0,description:b?"Supporting description text":void 0,rightElement:C?e.jsxs("div",{className:"flex items-center gap-2",children:[a&&e.jsx(v,{shape:"circle",variant:"info",size:"sm",children:"New"}),o&&e.jsx(N,{className:"h-4 w-4 text-lyra-fg-secondary flex-shrink-0",strokeWidth:1.5})]}):void 0,trailingIcon:g?e.jsx(S,{className:"h-4 w-4 text-lyra-fg-secondary flex-shrink-0",strokeWidth:1.5,"aria-hidden":"true"}):void 0,comfortable:p==="comfortable",className:w?void 0:"[&>span:first-child]:!hidden",onClick:()=>{}}),y&&e.jsx("div",{role:"separator",className:`border-b border-lyra-border-subtle ${r&&!s?"my-0":"my-1.5"}`})]},W)),l=x?"w-full max-w-72":"w-full";return r?e.jsx("div",{className:`${l} ${A} ${s?"p-1":"overflow-hidden"}`,children:i}):e.jsx("div",{className:l,children:i})}const n={args:{count:1,density:"comfortable",icon:!1,header:!1,description:!1,badge:!1,submenu:!1,rightSlot:!1,separator:!1,container:!0,padding:!0,leftBorder:!0,maxWidth:!0},parameters:{controls:{include:["Number of items","Density","Icon left","Header","With description","With badge","With submenu","With right slot","Separator","Container","Container padding","Left border","Max width","count","density","icon","header","description","badge","submenu","rightSlot","separator","container","padding","leftBorder","maxWidth"],sort:"none"}},argTypes:{count:{name:"Number of items",control:{type:"range",min:1,max:5,step:1},description:"How many identical rows to show, 1 to 5.",table:{category:"Content",defaultValue:{summary:"1"}}},density:{name:"Density",control:"radio",options:["comfortable","compact"],labels:{comfortable:"Comfortable",compact:"Compact"},description:"Row padding: comfortable is 12px top and bottom, compact is 6px (`comfortable`).",table:{category:"Appearance",defaultValue:{summary:"comfortable"}}},icon:{name:"Icon left",control:"boolean",description:"Icon on the left (`icon`).",table:{category:"Content",defaultValue:{summary:"false"}}},header:{name:"Header",control:"boolean",description:"Bold title line above the label (`header`).",table:{category:"Content",defaultValue:{summary:"false"}}},description:{name:"With description",control:"boolean",description:"Supporting text under the label (`description`).",table:{category:"Content",defaultValue:{summary:"false"}}},badge:{name:"With badge",control:"boolean",description:'A "New" badge on the right (`rightElement`).',table:{category:"Content",defaultValue:{summary:"false"}}},submenu:{name:"With submenu",control:"boolean",description:"Chevron at the far right (`trailingIcon`).",table:{category:"Content",defaultValue:{summary:"false"}}},rightSlot:{name:"With right slot",control:"boolean",description:"A star on the right (`rightElement`), after the badge if both are on.",table:{category:"Content",defaultValue:{summary:"false"}}},separator:{name:"Separator",control:"boolean",description:"A divider under the row, as `Menu` draws between groups.",table:{category:"Appearance",defaultValue:{summary:"false"}}},container:{name:"Container",control:"boolean",description:"Wraps the row in the menu panel (border, shadow, padding) it normally sits in.",table:{category:"Appearance",defaultValue:{summary:"true"}}},padding:{name:"Container padding",control:"boolean",description:"Space around the rows inside the container (`p-1`). Off, the rows sit flush against its edges.",if:{arg:"container",truthy:!0},table:{category:"Appearance",defaultValue:{summary:"true"}}},leftBorder:{name:"Left border",control:"boolean",description:"The accent bar on the row's left edge that shows on hover and press. Off hides it.",table:{category:"Appearance",defaultValue:{summary:"true"}}},maxWidth:{name:"Max width",control:"boolean",description:"On caps the width at 288px. Off stretches the list to the full width of the canvas.",table:{category:"Appearance",defaultValue:{summary:"true"}}}},render:t=>e.jsx(I,{...t})};var d,c,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    count: 1,
    density: "comfortable",
    icon: false,
    header: false,
    description: false,
    badge: false,
    submenu: false,
    rightSlot: false,
    separator: false,
    container: true,
    padding: true,
    leftBorder: true,
    maxWidth: true
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Number of items", "Density", "Icon left", "Header", "With description", "With badge", "With submenu", "With right slot", "Separator", "Container", "Container padding", "Left border", "Max width", "count", "density", "icon", "header", "description", "badge", "submenu", "rightSlot", "separator", "container", "padding", "leftBorder", "maxWidth"],
      sort: "none"
    }
  },
  argTypes: {
    count: {
      name: "Number of items",
      control: {
        type: "range",
        min: 1,
        max: 5,
        step: 1
      },
      description: "How many identical rows to show, 1 to 5.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "1"
        }
      }
    },
    density: {
      name: "Density",
      control: "radio",
      options: ["comfortable", "compact"],
      labels: {
        comfortable: "Comfortable",
        compact: "Compact"
      },
      description: "Row padding: comfortable is 12px top and bottom, compact is 6px (\`comfortable\`).",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "comfortable"
        }
      }
    },
    icon: {
      name: "Icon left",
      control: "boolean",
      description: "Icon on the left (\`icon\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    header: {
      name: "Header",
      control: "boolean",
      description: "Bold title line above the label (\`header\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    description: {
      name: "With description",
      control: "boolean",
      description: "Supporting text under the label (\`description\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    badge: {
      name: "With badge",
      control: "boolean",
      description: "A \\"New\\" badge on the right (\`rightElement\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    submenu: {
      name: "With submenu",
      control: "boolean",
      description: "Chevron at the far right (\`trailingIcon\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    rightSlot: {
      name: "With right slot",
      control: "boolean",
      description: "A star on the right (\`rightElement\`), after the badge if both are on.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    separator: {
      name: "Separator",
      control: "boolean",
      description: "A divider under the row, as \`Menu\` draws between groups.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "false"
        }
      }
    },
    container: {
      name: "Container",
      control: "boolean",
      description: "Wraps the row in the menu panel (border, shadow, padding) it normally sits in.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    padding: {
      name: "Container padding",
      control: "boolean",
      description: "Space around the rows inside the container (\`p-1\`). Off, the rows sit flush against its edges.",
      if: {
        arg: "container",
        truthy: true
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    leftBorder: {
      name: "Left border",
      control: "boolean",
      description: "The accent bar on the row's left edge that shows on hover and press. Off hides it.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    maxWidth: {
      name: "Max width",
      control: "boolean",
      description: "On caps the width at 288px. Off stretches the list to the full width of the canvas.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    }
  },
  render: args => <MenuItemBasicDemo {...args} />
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const U=["Default"];export{n as Default,U as __namedExportsOrder,P as default};
