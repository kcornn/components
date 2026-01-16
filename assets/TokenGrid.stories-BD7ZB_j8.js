import{j as e}from"./jsx-runtime-u17CrQMm.js";function n({label:t,value:s}){return e.jsxs("div",{className:"flex items-center gap-4",children:[s.startsWith("bg-")?e.jsx("div",{className:`w-16 h-12 rounded-md border ${s}`,"aria-hidden":!0}):e.jsx("div",{className:"w-16 h-12 rounded-md border",style:{background:s},"aria-hidden":!0}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium text-slate-700",children:t}),e.jsx("div",{className:"text-xs text-slate-500",children:s})]})]})}n.__docgenInfo={description:"",methods:[],displayName:"TokenSwatch",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""}}};function r({items:t}){return e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6",children:Object.entries(t).map(([s,l])=>e.jsx("div",{className:"p-3 bg-white rounded-md shadow-sm",children:e.jsx(n,{label:s,value:l})},s))})}r.__docgenInfo={description:"",methods:[],displayName:"ColorGrid",props:{items:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""}}};const o={"primary-50":"bg-purple-50","primary-100":"bg-purple-100","primary-200":"bg-purple-200","primary-300":"bg-purple-300","primary-400":"bg-purple-400","primary-500":"bg-purple-500","primary-600":"bg-purple-600","primary-700":"bg-purple-700","primary-800":"bg-purple-800","primary-900":"bg-purple-900","primary-950":"bg-purple-950"},i={"secondary-50":"bg-rose-50","secondary-100":"bg-rose-100","secondary-200":"bg-rose-200","secondary-300":"bg-rose-300","secondary-400":"bg-rose-400","secondary-500":"bg-rose-500","secondary-600":"bg-rose-600","secondary-700":"bg-rose-700","secondary-800":"bg-rose-800","secondary-900":"bg-rose-900","secondary-950":"bg-rose-950"},d={"accent-50":"bg-emerald-50","accent-100":"bg-emerald-100","accent-200":"bg-emerald-200","accent-300":"bg-emerald-300","accent-400":"bg-emerald-400","accent-500":"bg-emerald-500","accent-600":"bg-emerald-600","accent-700":"bg-emerald-700","accent-800":"bg-emerald-800","accent-900":"bg-emerald-900","accent-950":"bg-emerald-950"},m={"neutral-50":"bg-slate-50","neutral-100":"bg-slate-100","neutral-200":"bg-slate-200","neutral-300":"bg-slate-300","neutral-400":"bg-slate-400","neutral-500":"bg-slate-500","neutral-600":"bg-slate-600","neutral-700":"bg-slate-700","neutral-800":"bg-slate-800","neutral-900":"bg-slate-900","neutral-950":"bg-slate-950"},c={white:"bg-white",black:"bg-black"},b={"on-primary":"bg-white","on-background":"bg-white"},p={title:"Tokens/Token Grid"},a={render:()=>e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg font-bold mb-2",children:"Color Palette"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-medium text-slate-700 mb-2",children:"Primary Colors (Purple)"}),e.jsx(r,{items:o})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"font-medium text-slate-700 mb-2",children:"Secondary Colors (Rose)"}),e.jsx(r,{items:i})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"font-medium text-slate-700 mb-2",children:"Accent Colors (Emerald)"}),e.jsx(r,{items:d})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"font-medium text-slate-700 mb-2",children:"Neutral Colors (Slate)"}),e.jsx(r,{items:m})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"font-medium text-slate-700 mb-2",children:"Additional Colors"}),e.jsx(r,{items:c})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"font-medium text-slate-700 mb-2",children:"Semantic Aliases"}),e.jsx(r,{items:b})]})]}),name:"Color Palette"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <h1 className="text-lg font-bold mb-2">Color Palette</h1>
      <div>
        <h3 className="font-medium text-slate-700 mb-2">
          Primary Colors (Purple)
        </h3>
        <ColorGrid items={primaryColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">
          Secondary Colors (Rose)
        </h3>
        <ColorGrid items={secondaryColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">
          Accent Colors (Emerald)
        </h3>
        <ColorGrid items={accentColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">
          Neutral Colors (Slate)
        </h3>
        <ColorGrid items={neutralColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">Additional Colors</h3>
        <ColorGrid items={additionalColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">Semantic Aliases</h3>
        <ColorGrid items={semanticColors} />
      </div>
    </div>,
  name: "Color Palette"
}`,...a.parameters?.docs?.source}}};const u=["Colors"];export{a as Colors,u as __namedExportsOrder,p as default};
