import { ColorGrid } from "../components";

// Tailwind CSS Color Palette organized by semantic categories
// These colors are defined in tailwind.config.cjs

// Primary colors (Teal)
const primaryColors: Record<string, string> = {
  "primary-50": "bg-teal-50",
  "primary-100": "bg-teal-100",
  "primary-200": "bg-teal-200",
  "primary-300": "bg-teal-300",
  "primary-400": "bg-teal-400",
  "primary-500": "bg-teal-500",
  "primary-600": "bg-teal-600",
  "primary-700": "bg-teal-700",
  "primary-800": "bg-teal-800",
  "primary-900": "bg-teal-900",
  "primary-950": "bg-teal-950",
};

// Secondary colors (Violet)
const secondaryColors: Record<string, string> = {
  "secondary-50": "bg-violet-50",
  "secondary-100": "bg-violet-100",
  "secondary-200": "bg-violet-200",
  "secondary-300": "bg-violet-300",
  "secondary-400": "bg-violet-400",
  "secondary-500": "bg-violet-500",
  "secondary-600": "bg-violet-600",
  "secondary-700": "bg-violet-700",
  "secondary-800": "bg-violet-800",
  "secondary-900": "bg-violet-900",
  "secondary-950": "bg-violet-950",
};

// Neutral colors (Slate)
const neutralColors: Record<string, string> = {
  "neutral-50": "bg-slate-50",
  "neutral-100": "bg-slate-100",
  "neutral-200": "bg-slate-200",
  "neutral-300": "bg-slate-300",
  "neutral-400": "bg-slate-400",
  "neutral-500": "bg-slate-500",
  "neutral-600": "bg-slate-600",
  "neutral-700": "bg-slate-700",
  "neutral-800": "bg-slate-800",
  "neutral-900": "bg-slate-900",
  "neutral-950": "bg-slate-950",
};

// Gray colors
const grayColors: Record<string, string> = {
  "gray-50": "bg-gray-50",
  "gray-100": "bg-gray-100",
  "gray-200": "bg-gray-200",
  "gray-300": "bg-gray-300",
  "gray-400": "bg-gray-400",
  "gray-500": "bg-gray-500",
  "gray-600": "bg-gray-600",
  "gray-700": "bg-gray-700",
  "gray-800": "bg-gray-800",
  "gray-900": "bg-gray-900",
  "gray-950": "bg-gray-950",
};

// Additional colors
const additionalColors: Record<string, string> = {
  white: "bg-white",
  black: "bg-black",
};

// Semantic aliases from tailwind.config.cjs
const semanticColors: Record<string, string> = {
  "on-primary": "bg-white",
  "on-background": "bg-white",
};

// const typeTokens: Record<string, string> = {
//   "h1 (3.2rem)": "3.2rem",
//   "h2 (2rem)": "2rem",
//   "body (1rem)": "1rem",
// };

export default function TokensPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-3">Tokens</h2>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">Colors</h3>
        <p className="text-slate-600 mb-4">
          Tailwind CSS{" "}
          <a
            href="https://tailwindcss.com/docs/colors"
            target="_blank"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            color palette
          </a>{" "}
          organized by semantic categories.
        </p>

        <div className="mb-6">
          <h4 className="font-medium text-slate-700 mb-2">
            Primary Colors (Teal)
          </h4>
          <ColorGrid items={primaryColors} />
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-slate-700 mb-2">
            Secondary Colors (Violet)
          </h4>
          <ColorGrid items={secondaryColors} />
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-slate-700 mb-2">
            Neutral Colors (Slate)
          </h4>
          <ColorGrid items={neutralColors} />
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-slate-700 mb-2">Gray Colors</h4>
          <ColorGrid items={grayColors} />
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-slate-700 mb-2">Additional Colors</h4>
          <ColorGrid items={additionalColors} />
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-slate-700 mb-2">Semantic Aliases</h4>
          <ColorGrid items={semanticColors} />
        </div>
      </section>

      {/* <section className="mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">
          Typography
        </h3>
        <p className="text-slate-600 mb-4">Type scale examples.</p>
        <TypeScale items={typeTokens} />
      </section> */}

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">Code</h3>
        <p className="text-slate-600 mb-4">
          Examples for using Tailwind colors defined in tailwind.config.cjs.
        </p>
        <pre className="bg-slate-100 rounded p-4 overflow-x-auto text-sm">
          <code>
            {`// Primary colors (Teal)
<button className="bg-primary-500 text-on-primary px-4 py-2 rounded">
  Primary Button
</button>

// Secondary colors (Violet)
<button className="bg-secondary-500 text-on-primary px-4 py-2 rounded">
  Secondary Button
</button>

// Neutral colors (Slate) - used for backgrounds
<div className="bg-neutral-900 text-on-background p-4 rounded">
  Dark background using neutral-900
</div>`}
          </code>
        </pre>
      </section>
    </div>
  );
}
