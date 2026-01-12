import { ColorGrid } from "../components";
import {
  primaryColors,
  secondaryColors,
  accentColors,
  neutralColors,
  additionalColors,
  semanticColors,
} from "../utils/colorDefinitions";

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
            Primary Colors (Purple)
          </h4>
          <ColorGrid items={primaryColors} />
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-slate-700 mb-2">
            Secondary Colors (Rose)
          </h4>
          <ColorGrid items={secondaryColors} />
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-slate-700 mb-2">
            Accent Colors (Emerald)
          </h4>
          <ColorGrid items={accentColors} />
        </div>

        <div className="mb-6">
          <h4 className="font-medium text-slate-700 mb-2">
            Neutral Colors (Slate)
          </h4>
          <ColorGrid items={neutralColors} />
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
            {`// Primary colors (Purple)
<button className="bg-primary-500 text-on-primary px-4 py-2 rounded">
  Primary Button
</button>

// Secondary colors (Rose)
<button className="bg-secondary-500 text-on-primary px-4 py-2 rounded">
  Secondary Button
</button>

// Accent colors (Emerald)
<button className="bg-accent-500 text-on-primary px-4 py-2 rounded">
  Accent Button
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
