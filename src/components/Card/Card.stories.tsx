import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { Card } from "./Card";
import { CardHeader } from "./Card";
import { CardTitle } from "./Card";
import { CardDescription } from "./Card";
import { CardContent } from "./Card";
import { CardFooter } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated"],
    },
    padding: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card variant="default" padding="lg" style={{ width: "350px" }}>
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
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ width: "350px" }}>
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
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Card variant="default" padding="lg" hoverable style={{ width: "350px" }}>
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
  ),
};

export const SmallPadding: Story = {
  render: () => (
    <Card variant="default" padding="sm" style={{ width: "350px" }}>
      <CardHeader>
        <CardTitle as="h3">Small Padding</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">Card with small padding.</p>
      </CardContent>
    </Card>
  ),
};

export const LargePadding: Story = {
  render: () => (
    <Card variant="default" padding="lg" style={{ width: "350px" }}>
      <CardHeader>
        <CardTitle as="h3">Large Padding</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">Card with large padding.</p>
      </CardContent>
    </Card>
  ),
};
