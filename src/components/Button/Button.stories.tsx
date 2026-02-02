import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "primaryShadow", "secondary", "tertiary", "shimmer"],
    },
    colorPalette: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: "Primary",
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const PrimaryShadow: Story = {
  name: "Primary Shadow",
  args: {
    variant: "primaryShadow",
    children: "Primary Shadow",
  },
};

export const Secondary: Story = {
  name: "Secondary",
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Tertiary: Story = {
  name: "Tertiary",
  args: {
    variant: "tertiary",
    children: "Tertiary",
  },
};

export const Shimmer: Story = {
  name: "Shimmer",
  args: {
    variant: "shimmer",
    children: "Loading",
  },
};

export const ShimmerBlock: Story = {
  name: "Shimmer (No Text)",
  args: {
    variant: "shimmer",
    "aria-label": "Loading",
    children: "",
    className: "w-40 h-12",
  },
};

export const Sizes: Story = {
  name: "Button Sizes",
  render: () => (
    <div className="flex gap-4 flex-wrap items-center">
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
  ),
};

export const Loading: Story = {
  args: {
    isLoading: true,
    variant: "primary",
    children: "Loading...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: "primary",
    children: "Disabled",
  },
};

export const WithLeftIcon: Story = {
  name: "With Left Icon",
  args: {
    variant: "primary",
    leftIcon: <AddIcon />,
    children: "Add Item",
  },
};

export const WithRightIcon: Story = {
  name: "With Right Icon",
  args: {
    variant: "primary",
    rightIcon: <ArrowForwardIcon />,
    children: "Next",
  },
};

export const IconOnly: Story = {
  name: "Icon Only",
  args: {
    variant: "primary",
    "aria-label": "Add",
    children: <AddIcon />,
  },
};

export const IconVariants: Story = {
  name: "Icon Variants",
  render: () => (
    <div className="flex gap-4 flex-wrap">
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
  ),
};

export const IconSizes: Story = {
  name: "Icon Sizes",
  render: () => (
    <div className="flex gap-4 flex-wrap items-center">
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
  ),
};

export const IconOnlyVariants: Story = {
  name: "Icon Only Variants",
  render: () => (
    <div className="flex gap-4 flex-wrap">
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
  ),
};

export const ColorPalettes: Story = {
  name: "Color Palettes",
  render: () => (
    <div className="flex gap-4 flex-wrap">
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
  ),
};

export const ColorPaletteVariants: Story = {
  name: "Color Palette Variants",
  render: () => (
    <div className="flex gap-4 flex-wrap">
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
  ),
};
