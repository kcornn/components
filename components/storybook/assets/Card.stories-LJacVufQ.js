import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as n,B as g}from"./Button-K0hHq2En.js";import"./iframe-CqveyfMA.js";import"./preload-helper-DUauIqh9.js";const j="rounded-2xl transition-all duration-300",w={default:"bg-surface border border-neutral-200 shadow-sm",elevated:"bg-surface border border-neutral-200 shadow-lg"},y={none:"",sm:"p-3",md:"p-5",lg:"p-7"},N={h1:"text-3xl",h2:"text-2xl",h3:"text-xl",h4:"text-lg",h5:"text-base",h6:"text-sm"},d=({className:r,variant:a="default",padding:t="md",hoverable:C=!1,children:v,...f})=>e.jsx("div",{className:n(j,w[a],y[t],C&&"hover:scale-[1.02] hover:shadow-xl cursor-pointer",r),...f,children:v}),s=({className:r,children:a,...t})=>e.jsx("div",{className:n("mb-4",r),...t,children:a}),l=({className:r,as:a="h3",children:t,...C})=>e.jsx(a,{className:n("font-semibold text-white",N[a],r),...C,children:t}),u=({className:r,children:a,...t})=>e.jsx("p",{className:n("text-neutral-400 text-sm mt-1",r),...t,children:a}),i=({className:r,children:a,...t})=>e.jsx("div",{className:n("",r),...t,children:a}),x=({className:r,children:a,...t})=>e.jsx("div",{className:n("mt-4 pt-4 border-t border-neutral-700/50 flex items-center gap-3",r),...t,children:a});d.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "elevated"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"elevated"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},padding:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};s.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};l.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{as:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'}]},description:"",defaultValue:{value:'"h3"',computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};i.__docgenInfo={description:"",methods:[],displayName:"CardContent"};x.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};const _={title:"Components/Card",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","elevated"]},padding:{control:"select",options:["sm","md","lg"]}}},o={render:()=>e.jsxs(d,{variant:"default",padding:"lg",style:{width:"350px"},children:[e.jsxs(s,{children:[e.jsx(l,{as:"h3",children:"Default Card"}),e.jsx(u,{children:"Standard card with subtle styling"})]}),e.jsx(i,{children:e.jsx("p",{className:"text-slate-700",children:"This is a default card variant with standard styling."})}),e.jsx(x,{children:e.jsx(g,{variant:"primary",size:"sm",children:"Learn More"})})]})},c={render:()=>e.jsxs(d,{variant:"elevated",padding:"lg",style:{width:"350px"},children:[e.jsxs(s,{children:[e.jsx(l,{as:"h3",children:"Elevated Card"}),e.jsx(u,{children:"Card with stronger elevation"})]}),e.jsx(i,{children:e.jsx("p",{className:"text-slate-700",children:"This card features a more pronounced shadow for emphasis."})}),e.jsx(x,{children:e.jsx(g,{variant:"primary",size:"sm",children:"Get Started"})})]})},p={render:()=>e.jsxs(d,{variant:"default",padding:"lg",hoverable:!0,style:{width:"350px"},children:[e.jsxs(s,{children:[e.jsx(l,{as:"h3",children:"Hoverable Card"}),e.jsx(u,{children:"Scales up on hover"})]}),e.jsx(i,{children:e.jsx("p",{className:"text-slate-700",children:"Hover over this card to see the scale and shadow effects."})})]})},m={render:()=>e.jsxs(d,{variant:"default",padding:"sm",style:{width:"350px"},children:[e.jsx(s,{children:e.jsx(l,{as:"h3",children:"Small Padding"})}),e.jsx(i,{children:e.jsx("p",{className:"text-slate-700",children:"Card with small padding."})})]})},h={render:()=>e.jsxs(d,{variant:"default",padding:"lg",style:{width:"350px"},children:[e.jsx(s,{children:e.jsx(l,{as:"h3",children:"Large Padding"})}),e.jsx(i,{children:e.jsx("p",{className:"text-slate-700",children:"Card with large padding."})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="default" padding="lg" style={{
    width: "350px"
  }}>
      <CardHeader>
        <CardTitle as="h3">Default Card</CardTitle>
        <CardDescription>Standard card with subtle styling</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">
          This is a default card variant with standard styling.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm">
          Learn More
        </Button>
      </CardFooter>
    </Card>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="elevated" padding="lg" style={{
    width: "350px"
  }}>
      <CardHeader>
        <CardTitle as="h3">Elevated Card</CardTitle>
        <CardDescription>Card with stronger elevation</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">
          This card features a more pronounced shadow for emphasis.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm">
          Get Started
        </Button>
      </CardFooter>
    </Card>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="default" padding="lg" hoverable style={{
    width: "350px"
  }}>
      <CardHeader>
        <CardTitle as="h3">Hoverable Card</CardTitle>
        <CardDescription>Scales up on hover</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">
          Hover over this card to see the scale and shadow effects.
        </p>
      </CardContent>
    </Card>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="default" padding="sm" style={{
    width: "350px"
  }}>
      <CardHeader>
        <CardTitle as="h3">Small Padding</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">Card with small padding.</p>
      </CardContent>
    </Card>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Card variant="default" padding="lg" style={{
    width: "350px"
  }}>
      <CardHeader>
        <CardTitle as="h3">Large Padding</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">Card with large padding.</p>
      </CardContent>
    </Card>
}`,...h.parameters?.docs?.source}}};const D=["Default","Elevated","Hoverable","SmallPadding","LargePadding"];export{o as Default,c as Elevated,p as Hoverable,h as LargePadding,m as SmallPadding,D as __namedExportsOrder,_ as default};
