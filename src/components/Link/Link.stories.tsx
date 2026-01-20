import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";
import { LinkExternal } from "./LinkExternal";

export default {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent", "neutral"],
      description: "Color variant for the link",
    },
    href: {
      control: "text",
      description: "URL for the link",
    },
    target: {
      control: { type: "select" },
      options: ["_blank", "_self", "_parent", "_top"],
      description: "Target attribute for the link",
    },
    children: {
      control: "text",
      description: "Link text content",
    },
  },
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    href: "https://example.com",
    children: "Primary Link",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    href: "https://example.com",
    children: "Secondary Link",
    color: "secondary",
  },
};

export const Accent: Story = {
  args: {
    href: "https://example.com",
    children: "Accent Link",
    color: "accent",
  },
};

export const Neutral: Story = {
  args: {
    href: "https://example.com",
    children: "Neutral Link",
    color: "neutral",
  },
};

// LinkExternal Stories
export const ExternalPrimary: Story = {
  args: {
    href: "https://example.com",
    children: "External Primary Link",
    color: "primary",
  },
  render: (args) => <LinkExternal {...args} />,
};

export const ExternalSecondary: Story = {
  args: {
    href: "https://example.com",
    children: "External Secondary Link",
    color: "secondary",
  },
  render: (args) => <LinkExternal {...args} />,
};

export const ExternalAccent: Story = {
  args: {
    href: "https://example.com",
    children: "External Accent Link",
    color: "accent",
  },
  render: (args) => <LinkExternal {...args} />,
};

export const ExternalNeutral: Story = {
  args: {
    href: "https://example.com",
    children: "External Neutral Link",
    color: "neutral",
  },
  render: (args) => <LinkExternal {...args} />,
};
