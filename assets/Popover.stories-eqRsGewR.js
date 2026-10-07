import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{P as m}from"./popover-Cbqqiubp.js";import{B as f}from"./button-BLVj2C8E.js";import{M as b}from"./menu-BOmxrDJo.js";import{p as y,P as x,m as w,a as A}from"./Popover.shared-DAESSlJ4.js";import"./index-DhMLlvMY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DRSiSFY5.js";import"./index-DGBzHazk.js";import"./index-2UU9FgV2.js";import"./index-D7lG0nq1.js";import"./index-0SMGJ9Xv.js";import"./index-C-870Axa.js";import"./Combination-DrhKiBYc.js";import"./tslib.es6-Ytcc2UEA.js";import"./utils-BLSKlp9E.js";import"./container-header-i6DKumQe.js";import"./tooltip-DKTByY8R.js";import"./arrow-left-Bi_-X62A.js";import"./createLucideIcon-aII_sYFw.js";import"./x-CzxgOx-T.js";import"./index-1evVQkiP.js";import"./badge-CJVmnMhy.js";import"./spinner-xIhFAlhc.js";import"./menu-item-5A6Jq-l-.js";import"./scroll-chevron-CXy7dwCM.js";import"./chevron-right-BP9ksYh_.js";import"./chevron-left-CtyUClJQ.js";import"./chevron-down-gMYAX9-q.js";import"./chevron-up-dmEEfYqc.js";import"./input-CHxvM1hc.js";import"./error-icon-solid-eVlwMcX6.js";import"./label-amkU61wz.js";import"./circle-help-DYnzmdO5.js";import"./select-DJKQGHZg.js";import"./index-pcZVUfq6.js";import"./index-4W-125c9.js";import"./index-CylpBFcA.js";import"./checkbox-CfX6-3Wq.js";import"./minus-CVnigrff.js";import"./check-Dr3vGcdY.js";import"./search-CZxBQJsH.js";import"./copy-CtBWyGKZ.js";import"./settings-B3RqFsd1.js";import"./trash-2-DTLo779S.js";const he={title:"Headless Primitives/Popover",component:m,tags:["autodocs"],parameters:{layout:"centered",backgrounds:{default:"lyra-shell"}}};function P({menu:e=!1,content:c="text",title:o=!0,footer:p=!1,placement:d="bottom",align:u="center",showArrow:h=!0,maxHeight:a="none",maxWidth:r="none",screenReaderHint:g=!1}){return n.jsx(m,{screenReaderHint:g,title:o?x:void 0,footer:p?y:void 0,placement:d,align:u,showArrow:h,maxHeight:a==="none"?void 0:a,maxWidth:r==="none"?void 0:r,bodyPadding:!e,content:e?n.jsx(b,{items:w,bare:!0,className:"w-full min-w-[200px]"}):n.jsx(A,{kind:c,padTop:!o}),children:n.jsx(f,{children:"Open Popover"})})}const t={args:{menu:!1,content:"text",title:!0,footer:!1,placement:"bottom",align:"center",showArrow:!0,maxHeight:"none",maxWidth:"none",screenReaderHint:!1},parameters:{controls:{include:["Menu","Content","Title","Footer","Placement","Align","Show arrow","Max height","Max width","Screen reader hint","menu","content","title","footer","placement","align","showArrow","maxHeight","maxWidth","screenReaderHint"],sort:"none"}},argTypes:{menu:{name:"Menu",control:"boolean",description:"Shows an actions menu in the popover instead of the content below.",table:{category:"Content",defaultValue:{summary:"false"}}},content:{name:"Content",control:"radio",options:["text","long","form"],labels:{text:"Short text",long:"Long list",form:"Form"},description:"What's inside. Pair Long list with Max height to see it scroll, and Form with Max width.",if:{arg:"menu",truthy:!1},table:{category:"Content",defaultValue:{summary:"text"}}},title:{name:"Title",control:"boolean",description:"Header row with a title (`title`).",table:{category:"Content",defaultValue:{summary:"true"}}},footer:{name:"Footer",control:"boolean",description:"Pinned Cancel / Confirm buttons outside the scroll area (`footer`).",table:{category:"Content",defaultValue:{summary:"false"}}},screenReaderHint:{name:"Screen reader hint",control:"boolean",description:'Adds a visually hidden "Press Tab to navigate, Escape to close" that screen readers announce when it opens (`screenReaderHint`). Nothing changes on screen.',table:{category:"Accessibility",defaultValue:{summary:"false"}}},placement:{name:"Placement",control:"radio",options:["top","bottom","left","right"],labels:{top:"Top",bottom:"Bottom",left:"Left",right:"Right"},description:"Which side of the button it opens on.",table:{category:"Appearance",defaultValue:{summary:"bottom"}}},align:{name:"Align",control:"radio",options:["start","center","end"],labels:{start:"Start",center:"Center",end:"End"},description:"Alignment against the button along that side.",table:{category:"Appearance",defaultValue:{summary:"center"}}},showArrow:{name:"Show arrow",control:"boolean",description:"Arrow pointing at the button.",table:{category:"Appearance",defaultValue:{summary:"true"}}},maxHeight:{name:"Max height",control:"radio",options:["none","240px"],labels:{none:"None","240px":"240px"},description:"Caps the height; the content scrolls past it.",table:{category:"Appearance",defaultValue:{summary:"none"}}},maxWidth:{name:"Max width",control:"radio",options:["none","560px"],labels:{none:"Default","560px":"560px"},description:"Raises the width cap for wide content such as forms.",table:{category:"Appearance",defaultValue:{summary:"default"}}}},render:e=>n.jsx(P,{...e},JSON.stringify(e))};var i,s,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    menu: false,
    content: "text",
    title: true,
    footer: false,
    placement: "bottom",
    align: "center",
    showArrow: true,
    maxHeight: "none",
    maxWidth: "none",
    screenReaderHint: false
  },
  parameters: {
    controls: {
      // Storybook matches \`include\` against each control's display \`name\`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Menu", "Content", "Title", "Footer", "Placement", "Align", "Show arrow", "Max height", "Max width", "Screen reader hint", "menu", "content", "title", "footer", "placement", "align", "showArrow", "maxHeight", "maxWidth", "screenReaderHint"],
      sort: "none"
    }
  },
  argTypes: {
    menu: {
      name: "Menu",
      control: "boolean",
      description: "Shows an actions menu in the popover instead of the content below.",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    content: {
      name: "Content",
      control: "radio",
      options: ["text", "long", "form"],
      labels: {
        text: "Short text",
        long: "Long list",
        form: "Form"
      },
      description: "What's inside. Pair Long list with Max height to see it scroll, and Form with Max width.",
      if: {
        arg: "menu",
        truthy: false
      },
      table: {
        category: "Content",
        defaultValue: {
          summary: "text"
        }
      }
    },
    title: {
      name: "Title",
      control: "boolean",
      description: "Header row with a title (\`title\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "true"
        }
      }
    },
    footer: {
      name: "Footer",
      control: "boolean",
      description: "Pinned Cancel / Confirm buttons outside the scroll area (\`footer\`).",
      table: {
        category: "Content",
        defaultValue: {
          summary: "false"
        }
      }
    },
    screenReaderHint: {
      name: "Screen reader hint",
      control: "boolean",
      description: "Adds a visually hidden \\"Press Tab to navigate, Escape to close\\" that screen readers announce when it opens (\`screenReaderHint\`). Nothing changes on screen.",
      table: {
        category: "Accessibility",
        defaultValue: {
          summary: "false"
        }
      }
    },
    placement: {
      name: "Placement",
      control: "radio",
      options: ["top", "bottom", "left", "right"],
      labels: {
        top: "Top",
        bottom: "Bottom",
        left: "Left",
        right: "Right"
      },
      description: "Which side of the button it opens on.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "bottom"
        }
      }
    },
    align: {
      name: "Align",
      control: "radio",
      options: ["start", "center", "end"],
      labels: {
        start: "Start",
        center: "Center",
        end: "End"
      },
      description: "Alignment against the button along that side.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "center"
        }
      }
    },
    showArrow: {
      name: "Show arrow",
      control: "boolean",
      description: "Arrow pointing at the button.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "true"
        }
      }
    },
    maxHeight: {
      name: "Max height",
      control: "radio",
      options: ["none", "240px"],
      labels: {
        none: "None",
        "240px": "240px"
      },
      description: "Caps the height; the content scrolls past it.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "none"
        }
      }
    },
    maxWidth: {
      name: "Max width",
      control: "radio",
      options: ["none", "560px"],
      labels: {
        none: "Default",
        "560px": "560px"
      },
      description: "Raises the width cap for wide content such as forms.",
      table: {
        category: "Appearance",
        defaultValue: {
          summary: "default"
        }
      }
    }
  },
  render: args =>
  // \`key\` remounts the demo when a control changes, so the popover closes.
  <PopoverDemo key={JSON.stringify(args)} {...args} />
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const ge=["Default"];export{t as Default,ge as __namedExportsOrder,he as default};
