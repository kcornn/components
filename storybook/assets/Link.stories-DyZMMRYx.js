import{j as h}from"./jsx-runtime-u17CrQMm.js";function c({href:s,children:l,target:i="_blank",rel:p="noopener noreferrer",className:m="",color:d="primary"}){const u={primary:"text-primary-600 hover:text-primary-700",secondary:"text-secondary-600 hover:text-secondary-700",accent:"text-accent-600 hover:text-accent-700",neutral:"text-neutral-600 hover:text-neutral-700",white:"text-white hover:text-gray-200",black:"text-black hover:text-gray-800"};return h.jsx("a",{href:s,target:i,rel:p,className:`${u[d]} underline ${m}`,children:l})}c.__docgenInfo={description:"",methods:[],displayName:"Link",props:{href:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},target:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_blank"',computed:!1}},rel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"noopener noreferrer"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},color:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "accent"
| "neutral"
| "white"
| "black"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"white"'},{name:"literal",value:'"black"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}}};const k={title:"Components/Link",component:c,tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary","secondary","accent","neutral","white","black"],description:"Color variant for the link"},href:{control:"text",description:"URL for the link"},target:{control:{type:"select"},options:["_blank","_self","_parent","_top"],description:"Target attribute for the link"},children:{control:"text",description:"Link text content"}}},e={args:{href:"https://example.com",children:"Primary Link",color:"primary"}},r={args:{href:"https://example.com",children:"Secondary Link",color:"secondary"}},a={args:{href:"https://example.com",children:"Accent Link",color:"accent"}},t={args:{href:"https://example.com",children:"Neutral Link",color:"neutral"}},n={args:{href:"https://example.com",children:"White Link",color:"white"},parameters:{backgrounds:{default:"dark"}}},o={args:{href:"https://example.com",children:"Black Link",color:"black"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "Primary Link",
    color: "primary"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "Secondary Link",
    color: "secondary"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "Accent Link",
    color: "accent"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "Neutral Link",
    color: "neutral"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "White Link",
    color: "white"
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "Black Link",
    color: "black"
  }
}`,...o.parameters?.docs?.source}}};const y=["Primary","Secondary","Accent","Neutral","White","Black"];export{a as Accent,o as Black,t as Neutral,e as Primary,r as Secondary,n as White,y as __namedExportsOrder,k as default};
