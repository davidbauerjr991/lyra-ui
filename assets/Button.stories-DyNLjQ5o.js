import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DhMLlvMY.js";import{B as c}from"./button-BLVj2C8E.js";import{B as x}from"./badge-CJVmnMhy.js";import{I as C,M as S,S as k}from"./Button.shared-D_ALAx7H.js";import{C as V}from"./chevron-down-gMYAX9-q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-0SMGJ9Xv.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./tooltip-DKTByY8R.js";import"./index-DGBzHazk.js";import"./index-C-870Axa.js";import"./spinner-xIhFAlhc.js";import"./createLucideIcon-aII_sYFw.js";import"./ellipsis-vertical-D6ttVBVO.js";const H={title:"Custom Primitives/Button",component:c,tags:["autodocs"],parameters:{layout:"padded",backgrounds:{default:"lyra-shell"}},argTypes:{variant:{control:"select",options:["default","destructive","outline","ghost","icon"]},size:{control:"select",options:["sm","default","md","lg","xl","icon-sm","icon","icon-md","icon-lg","icon-xl","icon-2xl"]},disabled:{control:"boolean"}}};function D({variant:n="default",state:u="default",size:o="lg",iconStart:m=!1,iconEnd:b=!1,iconOnly:t=!1,badge:l=!1,loading:p=!1,tooltip:f=!0,disabledContrast:g="default"}){const[s,y]=v.useState(0);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(c,{variant:t&&n==="ghost"?"icon":n,size:t?C[o]:o,disabled:u==="disabled","aria-label":t?"More options":void 0,tooltip:t?f:void 0,loading:p,disabledContrast:g,badge:t&&l?4:void 0,onClick:()=>y(h=>h+1),children:t?e.jsx(S,{}):e.jsxs(e.Fragment,{children:[m&&e.jsx(k,{className:"h-4 w-4",strokeWidth:1.5}),"Button",l&&e.jsx(x,{shape:"circle",variant:"critical",size:"sm",count:4}),b&&e.jsx(V,{className:"h-4 w-4",strokeWidth:1.5})]})}),e.jsxs("span",{className:"lyra-body-sm text-lyra-fg-secondary",children:["Clicked ",s," ",s===1?"time":"times"]})]})}const a={args:{variant:"default",state:"default",size:"lg",iconStart:!1,iconEnd:!1,iconOnly:!1,badge:!1,loading:!1,tooltip:!0,disabledContrast:"default"},parameters:{controls:{include:["State","Icon start","Icon end","Icon only","With badge","Type","Size","Loading","Tooltip","Disabled contrast","state","iconStart","iconEnd","iconOnly","badge","variant","size","loading","tooltip","disabledContrast"],sort:"none"}},argTypes:{state:{name:"State",control:"radio",options:["default","disabled"],labels:{default:"Default",disabled:"Disabled"},description:"Disabled blocks clicks and dims the button.",table:{category:"Behavior",defaultValue:{summary:"default"}}},loading:{name:"Loading",control:"boolean",description:"Spinner over the label, `aria-busy`, clicks ignored; the button keeps its width and stays focusable (`loading`). Try it with Clicked count.",table:{category:"Behavior",defaultValue:{summary:"false"}}},tooltip:{name:"Tooltip",control:"boolean",description:"Icon-only buttons: show the accessible name as a tooltip on hover and keyboard focus (`tooltip`). Never automatic, so a button already wrapped in a Tooltip doesn't show two.",if:{arg:"iconOnly",truthy:!0},table:{category:"Content",defaultValue:{summary:"false"}}},disabledContrast:{name:"Disabled contrast",control:"radio",options:["default","high"],labels:{default:"Default (40% opacity)",high:"High (readable)"},description:"Contrast of a disabled Ghost or icon button (`disabledContrast`). Set State to Disabled and Type to Ghost to compare.",if:{arg:"state",eq:"disabled"},table:{category:"Appearance",defaultValue:{summary:"default"}}},iconStart:{name:"Icon start",control:"boolean",description:"Leading icon before the label.",if:{arg:"iconOnly",truthy:!1},table:{category:"Content",defaultValue:{summary:"false"}}},iconEnd:{name:"Icon end",control:"boolean",description:"Trailing icon after the label.",if:{arg:"iconOnly",truthy:!1},table:{category:"Content",defaultValue:{summary:"false"}}},iconOnly:{name:"Icon only",control:"boolean",description:"Square icon button with no label.",table:{category:"Content",defaultValue:{summary:"false"}}},badge:{name:"With badge",control:"boolean",description:"Count badge: on the corner for icon-only buttons (`badge` prop), inline after the label otherwise.",table:{category:"Content",defaultValue:{summary:"false"}}},variant:{name:"Type",control:"radio",options:["default","destructive","outline","ghost"],labels:{default:"Primary",destructive:"Destructive",outline:"Outline",ghost:"Ghost"},description:"Visual style of the button.",table:{category:"Appearance",defaultValue:{summary:"default"}}},size:{name:"Size",control:"radio",options:["sm","default","lg","xl"],labels:{sm:"24px",default:"32px",lg:"36px",xl:"40px"},description:"Button height; icon-only buttons are square at the same size.",table:{category:"Appearance",defaultValue:{summary:"lg"}}}},render:n=>e.jsx(D,{...n})};var i,r,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "default",
    state: "default",
    size: "lg",
    iconStart: false,
    iconEnd: false,
    iconOnly: false,
    badge: false,
    loading: false,
    tooltip: true,
    disabledContrast: "default"
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too so
      // either lookup works.
      include: ["State", "Icon start", "Icon end", "Icon only", "With badge", "Type", "Size", "Loading", "Tooltip", "Disabled contrast", "state", "iconStart", "iconEnd", "iconOnly", "badge", "variant", "size", "loading", "tooltip", "disabledContrast"],
      sort: "none"
    }
  },
  argTypes: {
    state: {
      name: "State",
      control: "radio",
      options: ["default", "disabled"],
      labels: {
        default: "Default",
        disabled: "Disabled"
      },
      description: "Disabled blocks clicks and dims the button.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "default"
        }
      }
    },
    loading: {
      name: "Loading",
      control: "boolean",
      description: "Spinner over the label, \`aria-busy\`, clicks ignored; the button keeps its width and stays focusable (\`loading\`). Try it with Clicked count.",
      table: {
        category: "Behavior",
        defaultValue: {
          summary: "false"
        }
      }
    },
    tooltip: {
      name: "Tooltip",
      control: "boolean",
      description: "Icon-only buttons: show the accessible name as a tooltip on hover and keyboard focus (\`tooltip\`). Never automatic, so a button already wrapped in a Tooltip doesn't show two.",
      if: {
        arg: "iconOnly",
        truthy: true
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    disabledContrast: {
      name: "Disabled contrast",
      control: "radio",
      options: ["default", "high"],
      labels: {
        default: "Default (40% opacity)",
        high: "High (readable)"
      },
      description: "Contrast of a disabled Ghost or icon button (\`disabledContrast\`). Set State to Disabled and Type to Ghost to compare.",
      if: {
        arg: "state",
        eq: "disabled"
      },
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    },
    iconStart: {
      name: "Icon start",
      control: "boolean",
      description: "Leading icon before the label.",
      if: {
        arg: "iconOnly",
        truthy: false
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    iconEnd: {
      name: "Icon end",
      control: "boolean",
      description: "Trailing icon after the label.",
      if: {
        arg: "iconOnly",
        truthy: false
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    iconOnly: {
      name: "Icon only",
      control: "boolean",
      description: "Square icon button with no label.",
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
      description: "Count badge: on the corner for icon-only buttons (\`badge\` prop), inline after the label otherwise.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    variant: {
      name: "Type",
      control: "radio",
      options: ["default", "destructive", "outline", "ghost"],
      labels: {
        default: "Primary",
        destructive: "Destructive",
        outline: "Outline",
        ghost: "Ghost"
      },
      description: "Visual style of the button.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "default", "lg", "xl"],
      labels: {
        sm: "24px",
        default: "32px",
        lg: "36px",
        xl: "40px"
      },
      description: "Button height; icon-only buttons are square at the same size.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "lg"
        }
      }
    }
  },
  render: args => <ButtonDemo {...args} />
}`,...(d=(r=a.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,H as default};
