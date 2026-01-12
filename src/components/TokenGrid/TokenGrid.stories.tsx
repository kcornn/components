import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorGrid } from "./TokenGrid";

export default {
  title: "Tokens/Token Grid",
} as Meta;

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

type ColorStory = StoryObj<typeof ColorGrid>;
export const Colors: ColorStory = {
  render: () => (
    <div>
      <h1 className="text-lg font-bold mb-2">Color Palette</h1>
      <div>
        <h3 className="font-medium text-slate-700 mb-2">
          Primary Colors (Teal)
        </h3>
        <ColorGrid items={primaryColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">
          Secondary Colors (Violet)
        </h3>
        <ColorGrid items={secondaryColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">
          Neutral Colors (Slate)
        </h3>
        <ColorGrid items={neutralColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">Gray Colors</h3>
        <ColorGrid items={grayColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">Additional Colors</h3>
        <ColorGrid items={additionalColors} />
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-slate-700 mb-2">Semantic Aliases</h3>
        <ColorGrid items={semanticColors} />
      </div>
    </div>
  ),
  name: "Color Palette",
};

// type TypeStory = StoryObj<typeof TypeScale>;
// export const Typography: TypeStory = {
//   render: () => (
//     <TypeScale
//       items={{
//         "h1 (3.2rem)": "3.2rem",
//         "h2 (2rem)": "2rem",
//         "body (1rem)": "1rem",
//       }}
//     />
//   ),
//   name: "Type Scale",
// };
