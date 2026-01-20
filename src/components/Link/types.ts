export type LinkColorVariant = "primary" | "secondary" | "accent" | "neutral";

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
  color?: LinkColorVariant;
  icon?: React.ReactNode;
}
