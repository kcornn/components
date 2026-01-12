import TokenSwatch from "./TokenSwatch";

export interface ColorGridProps {
  items: Record<string, string>;
}

export function ColorGrid({ items }: ColorGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {Object.entries(items).map(([key, value]) => (
        <div key={key} className="p-3 bg-white rounded-md shadow-sm">
          <TokenSwatch label={key} value={value} />
        </div>
      ))}
    </div>
  );
}

// TODO see if i want any typography tokens
// export interface TypeScaleProps {
//   items: Record<string, string>;
// }

// export function TypeScale({ items }: TypeScaleProps) {
//   return (
//     <div className="space-y-8">
//       {Object.entries(items).map(([key, value]) => (
//         <div key={key}>
//           <div className="text-slate-700 font-medium mb-1">{key}</div>
//           <div className="text-slate-900" style={{ fontSize: value }}>
//             The quick brown fox — {value}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

export default ColorGrid;
