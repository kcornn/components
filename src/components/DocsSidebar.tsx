import { type PageKey } from "../types";

export function DocsSidebar({
  current,
  onNavigate,
}: {
  current: PageKey;
  onNavigate: (p: PageKey) => void;
}) {
  const items: { key: PageKey; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "button", label: "Button" },
    { key: "card", label: "Card" },
    { key: "tokens", label: "Tokens" },
    { key: "storybook", label: "Storybook" },
  ];

  return (
    <nav className="pt-6">
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it.key}>
            <button
              className={
                "w-full text-left px-3 py-2 rounded-md transition-colors " +
                (current === it.key
                  ? "bg-slate-200 text-slate-900 font-semibold"
                  : "text-slate-700 hover:bg-slate-100")
              }
              onClick={() => onNavigate(it.key)}
            >
              {it.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DocsSidebar;
