import{j as r}from"./jsx-runtime-u17CrQMm.js";import{a as S,B as a}from"./Button-B24a6U6x.js";const e=S(r.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),g=S(r.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"})),P=S(r.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),B=S(r.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"})),I=S(r.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})),{fn:f}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Button",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["primary","primaryShadow","secondary","tertiary"]},colorPalette:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["sm","md","lg"]}},args:{onClick:f()}},n={name:"Primary",args:{variant:"primary",children:"Primary"}},t={name:"Primary Shadow",args:{variant:"primaryShadow",children:"Primary Shadow"}},o={name:"Secondary",args:{variant:"secondary",children:"Secondary"}},i={name:"Tertiary",args:{variant:"tertiary",children:"Tertiary"}},s={name:"Button Sizes",render:()=>r.jsxs("div",{className:"flex gap-4 flex-wrap items-center",children:[r.jsx(a,{size:"sm",variant:"primary",children:"Small"}),r.jsx(a,{size:"md",variant:"primary",children:"Medium"}),r.jsx(a,{size:"lg",variant:"primary",children:"Large"})]})},c={args:{isLoading:!0,variant:"primary",children:"Loading..."}},l={args:{disabled:!0,variant:"primary",children:"Disabled"}},d={name:"With Left Icon",args:{variant:"primary",leftIcon:r.jsx(e,{}),children:"Add Item"}},m={name:"With Right Icon",args:{variant:"primary",rightIcon:r.jsx(I,{}),children:"Next"}},p={name:"Icon Only",args:{variant:"primary","aria-label":"Add",children:r.jsx(e,{})}},y={name:"Icon Variants",render:()=>r.jsxs("div",{className:"flex gap-4 flex-wrap",children:[r.jsx(a,{variant:"primary",leftIcon:r.jsx(e,{}),children:"Primary"}),r.jsx(a,{variant:"secondary",leftIcon:r.jsx(P,{}),children:"Secondary"}),r.jsx(a,{variant:"tertiary",leftIcon:r.jsx(g,{}),children:"Tertiary"})]})},u={name:"Icon Sizes",render:()=>r.jsxs("div",{className:"flex gap-4 flex-wrap items-center",children:[r.jsx(a,{size:"sm",variant:"primary",leftIcon:r.jsx(e,{}),children:"Small"}),r.jsx(a,{size:"md",variant:"primary",leftIcon:r.jsx(e,{}),children:"Medium"}),r.jsx(a,{size:"lg",variant:"primary",leftIcon:r.jsx(e,{}),children:"Large"})]})},h={name:"Icon Only Variants",render:()=>r.jsxs("div",{className:"flex gap-4 flex-wrap",children:[r.jsx(a,{variant:"primary","aria-label":"Add",children:r.jsx(e,{})}),r.jsx(a,{variant:"secondary","aria-label":"Edit",children:r.jsx(P,{})}),r.jsx(a,{variant:"tertiary","aria-label":"Delete",children:r.jsx(g,{})}),r.jsx(a,{variant:"primary","aria-label":"Search",children:r.jsx(B,{})})]})},v={name:"Color Palettes",render:()=>r.jsxs("div",{className:"flex gap-4 flex-wrap",children:[r.jsx(a,{variant:"primary",colorPalette:"primary",children:"Primary Palette"}),r.jsx(a,{variant:"primary",colorPalette:"secondary",children:"Secondary Palette"}),r.jsx(a,{variant:"secondary",colorPalette:"primary",children:"Secondary (Primary Border)"}),r.jsx(a,{variant:"secondary",colorPalette:"secondary",children:"Secondary (Secondary Border)"})]})},x={name:"Color Palette Variants",render:()=>r.jsxs("div",{className:"flex gap-4 flex-wrap",children:[r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsx(a,{variant:"primary",colorPalette:"primary",children:"Primary/Purple"}),r.jsx(a,{variant:"primaryShadow",colorPalette:"primary",children:"Primary Shadow/Purple"}),r.jsx(a,{variant:"secondary",colorPalette:"primary",children:"Secondary/Purple Border"}),r.jsx(a,{variant:"tertiary",colorPalette:"primary",children:"Tertiary/Purple"})]}),r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsx(a,{variant:"primary",colorPalette:"secondary",children:"Primary/Rose"}),r.jsx(a,{variant:"primaryShadow",colorPalette:"secondary",children:"Primary Shadow/Rose"}),r.jsx(a,{variant:"secondary",colorPalette:"secondary",children:"Secondary/Rose Border"}),r.jsx(a,{variant:"tertiary",colorPalette:"secondary",children:"Tertiary/Rose"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    variant: "primary",
    children: "Primary"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Primary Shadow",
  args: {
    variant: "primaryShadow",
    children: "Primary Shadow"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Secondary",
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Tertiary",
  args: {
    variant: "tertiary",
    children: "Tertiary"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Button Sizes",
  render: () => <div className="flex gap-4 flex-wrap items-center">
      <Button size="sm" variant="primary">
        Small
      </Button>
      <Button size="md" variant="primary">
        Medium
      </Button>
      <Button size="lg" variant="primary">
        Large
      </Button>
    </div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    variant: "primary",
    children: "Loading..."
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    variant: "primary",
    children: "Disabled"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "With Left Icon",
  args: {
    variant: "primary",
    leftIcon: <AddIcon />,
    children: "Add Item"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With Right Icon",
  args: {
    variant: "primary",
    rightIcon: <ArrowForwardIcon />,
    children: "Next"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Icon Only",
  args: {
    variant: "primary",
    "aria-label": "Add",
    children: <AddIcon />
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Icon Variants",
  render: () => <div className="flex gap-4 flex-wrap">
      <Button variant="primary" leftIcon={<AddIcon />}>
        Primary
      </Button>
      <Button variant="secondary" leftIcon={<EditIcon />}>
        Secondary
      </Button>
      <Button variant="tertiary" leftIcon={<DeleteIcon />}>
        Tertiary
      </Button>
    </div>
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Icon Sizes",
  render: () => <div className="flex gap-4 flex-wrap items-center">
      <Button size="sm" variant="primary" leftIcon={<AddIcon />}>
        Small
      </Button>
      <Button size="md" variant="primary" leftIcon={<AddIcon />}>
        Medium
      </Button>
      <Button size="lg" variant="primary" leftIcon={<AddIcon />}>
        Large
      </Button>
    </div>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Icon Only Variants",
  render: () => <div className="flex gap-4 flex-wrap">
      <Button variant="primary" aria-label="Add">
        <AddIcon />
      </Button>
      <Button variant="secondary" aria-label="Edit">
        <EditIcon />
      </Button>
      <Button variant="tertiary" aria-label="Delete">
        <DeleteIcon />
      </Button>
      <Button variant="primary" aria-label="Search">
        <SearchIcon />
      </Button>
    </div>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Color Palettes",
  render: () => <div className="flex gap-4 flex-wrap">
      <Button variant="primary" colorPalette="primary">
        Primary Palette
      </Button>
      <Button variant="primary" colorPalette="secondary">
        Secondary Palette
      </Button>
      <Button variant="secondary" colorPalette="primary">
        Secondary (Primary Border)
      </Button>
      <Button variant="secondary" colorPalette="secondary">
        Secondary (Secondary Border)
      </Button>
    </div>
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Color Palette Variants",
  render: () => <div className="flex gap-4 flex-wrap">
      <div className="flex flex-col gap-2">
        <Button variant="primary" colorPalette="primary">
          Primary/Purple
        </Button>
        <Button variant="primaryShadow" colorPalette="primary">
          Primary Shadow/Purple
        </Button>
        <Button variant="secondary" colorPalette="primary">
          Secondary/Purple Border
        </Button>
        <Button variant="tertiary" colorPalette="primary">
          Tertiary/Purple
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="primary" colorPalette="secondary">
          Primary/Rose
        </Button>
        <Button variant="primaryShadow" colorPalette="secondary">
          Primary Shadow/Rose
        </Button>
        <Button variant="secondary" colorPalette="secondary">
          Secondary/Rose Border
        </Button>
        <Button variant="tertiary" colorPalette="secondary">
          Tertiary/Rose
        </Button>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};const w=["Primary","PrimaryShadow","Secondary","Tertiary","Sizes","Loading","Disabled","WithLeftIcon","WithRightIcon","IconOnly","IconVariants","IconSizes","IconOnlyVariants","ColorPalettes","ColorPaletteVariants"],L=Object.freeze(Object.defineProperty({__proto__:null,ColorPaletteVariants:x,ColorPalettes:v,Disabled:l,IconOnly:p,IconOnlyVariants:h,IconSizes:u,IconVariants:y,Loading:c,Primary:n,PrimaryShadow:t,Secondary:o,Sizes:s,Tertiary:i,WithLeftIcon:d,WithRightIcon:m,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{L as B,n as P};
