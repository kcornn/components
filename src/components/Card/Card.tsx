import React from "react";
import { cn } from "../../utils/utils";
import { type CardProps } from "./types";

const cardBase = "rounded-2xl transition-all duration-300";
const cardVariants: Record<string, string> = {
  default: "bg-surface border border-neutral-200 shadow-sm",
  elevated: "bg-surface border border-neutral-200 shadow-lg",
};

const cardPaddings: Record<string, string> = {
  none: "",
  sm: "p-3",
  md: "p-5",
  lg: "p-7",
};

const cardTitleSizes: Record<string, string> = {
  h1: "text-3xl",
  h2: "text-2xl",
  h3: "text-xl",
  h4: "text-lg",
  h5: "text-base",
  h6: "text-sm",
};

// Theme-aware card using shared design tokens
export const Card: React.FC<CardProps> = ({
  className,
  variant = "default",
  padding = "md",
  hoverable = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        cardBase,
        cardVariants[variant],
        cardPaddings[padding],
        hoverable && "hover:scale-[1.02] hover:shadow-xl cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
};

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle: React.FC<CardTitleProps> = ({
  className,
  as: Component = "h3",
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "font-semibold text-white",
        cardTitleSizes[Component],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p className={cn("text-neutral-400 text-sm mt-1", className)} {...props}>
      {children}
    </p>
  );
};

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter: React.FC<CardFooterProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mt-4 pt-4 border-t border-neutral-700/50 flex items-center gap-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
