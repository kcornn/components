import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorGrid } from "./TokenGrid";
import {
  primaryColors,
  secondaryColors,
  accentColors,
  neutralColors,
  additionalColors,
  semanticColors,
} from "../../utils/colorDefinitions";

export default {
  title: "Tokens/Token Grid",
} as Meta;

type ColorStory = StoryObj<typeof ColorGrid>;
export const Colors: ColorStory = {
  render: () => (
    <div>
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
    </div>
  ),
  name: "Color Palette",
};
