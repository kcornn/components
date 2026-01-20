export interface TokenSwatchProps {
  label: string;
  value: string;
}

export default function TokenSwatch({ label, value }: TokenSwatchProps) {
  return (
    <div className="flex items-center gap-4">
      {/* If `value` is a Tailwind bg class (starts with "bg-"), apply it as className; otherwise use inline style */}
      {value.startsWith("bg-") ? (
        <div className={`w-16 h-12 rounded-md border ${value}`} aria-hidden />
      ) : (
        <div
          className="w-16 h-12 rounded-md border"
          style={{ background: value }}
          aria-hidden
        />
      )}
      <div>
        <div className="text-sm font-medium text-slate-700">{label}</div>
        <div className="text-xs text-slate-500">{value}</div>
      </div>
    </div>
  );
}
