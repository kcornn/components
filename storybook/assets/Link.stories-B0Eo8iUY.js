import{j as r}from"./jsx-runtime-u17CrQMm.js";import{a as k}from"./createSvgIcon-DFKM-E6r.js";import"./iframe-Bh5grHrG.js";import"./preload-helper-DUauIqh9.js";function f({href:e,children:d,target:m="_blank",rel:u="noopener noreferrer",className:h="",color:x="primary"}){const y={primary:"text-primary-600 hover:text-primary-700",secondary:"text-secondary-600 hover:text-secondary-700",accent:"text-accent-600 hover:text-accent-700",neutral:"text-neutral-600 hover:text-neutral-700"};return r.jsx("a",{href:e,target:m,rel:u,className:`${y[x]} underline ${h}`,children:d})}f.__docgenInfo={description:"",methods:[],displayName:"Link",props:{href:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},target:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_blank"',computed:!1}},rel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"noopener noreferrer"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "accent" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const v=k(r.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}));function a({href:e,children:d,target:m="_blank",rel:u="noopener noreferrer",className:h="",color:x="primary",icon:y=r.jsx(v,{fontSize:"small"})}){const g={primary:"text-primary-600 hover:text-primary-700",secondary:"text-secondary-600 hover:text-secondary-700",accent:"text-accent-600 hover:text-accent-700",neutral:"text-neutral-600 hover:text-neutral-700"};return r.jsxs("a",{href:e,target:m,rel:u,className:`${g[x]} underline inline-flex items-center gap-1 ${h}`,children:[d,y]})}a.__docgenInfo={description:"",methods:[],displayName:"LinkExternal",props:{href:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},target:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"_blank"',computed:!1}},rel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"noopener noreferrer"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "accent" | "neutral"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'<OpenInNewIcon fontSize="small" />',computed:!1}}}};const R={title:"Components/Link",component:f,tags:["autodocs"],argTypes:{color:{control:{type:"select"},options:["primary","secondary","accent","neutral"],description:"Color variant for the link"},href:{control:"text",description:"URL for the link"},target:{control:{type:"select"},options:["_blank","_self","_parent","_top"],description:"Target attribute for the link"},children:{control:"text",description:"Link text content"}}},n={args:{href:"https://example.com",children:"Primary Link",color:"primary"}},t={args:{href:"https://example.com",children:"Secondary Link",color:"secondary"}},o={args:{href:"https://example.com",children:"Accent Link",color:"accent"}},c={args:{href:"https://example.com",children:"Neutral Link",color:"neutral"}},s={args:{href:"https://example.com",children:"External Primary Link",color:"primary"},render:e=>r.jsx(a,{...e})},l={args:{href:"https://example.com",children:"External Secondary Link",color:"secondary"},render:e=>r.jsx(a,{...e})},i={args:{href:"https://example.com",children:"External Accent Link",color:"accent"},render:e=>r.jsx(a,{...e})},p={args:{href:"https://example.com",children:"External Neutral Link",color:"neutral"},render:e=>r.jsx(a,{...e})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "Primary Link",
    color: "primary"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "Secondary Link",
    color: "secondary"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "Accent Link",
    color: "accent"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "Neutral Link",
    color: "neutral"
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "External Primary Link",
    color: "primary"
  },
  render: args => <LinkExternal {...args} />
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "External Secondary Link",
    color: "secondary"
  },
  render: args => <LinkExternal {...args} />
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "External Accent Link",
    color: "accent"
  },
  render: args => <LinkExternal {...args} />
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: "https://example.com",
    children: "External Neutral Link",
    color: "neutral"
  },
  render: args => <LinkExternal {...args} />
}`,...p.parameters?.docs?.source}}};const T=["Primary","Secondary","Accent","Neutral","ExternalPrimary","ExternalSecondary","ExternalAccent","ExternalNeutral"];export{o as Accent,i as ExternalAccent,p as ExternalNeutral,s as ExternalPrimary,l as ExternalSecondary,c as Neutral,n as Primary,t as Secondary,T as __namedExportsOrder,R as default};
