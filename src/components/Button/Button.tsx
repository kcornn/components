import React from "react";
import { cn } from "../../utils/utils";
import { type ButtonProps } from "./types";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const base =
  "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed";

const shimmerBase =
  "relative overflow-hidden text-slate-500 bg-slate-200 border border-slate-200";
const shimmerGlow =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)] before:content-['']";

const getVariantClasses = (
  variant: "primary" | "primaryShadow" | "secondary" | "tertiary" | "shimmer",
  colorPalette: string = "primary",
) => {
  // Primary palette classes (purple)
  const primaryPalette = {
    primary:
      "bg-primary-500 hover:bg-primary-600 text-white border border-primary-500 focus:ring-primary-500",
    primaryShadow:
      "bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-neutral-500/25 focus:ring-primary-500",
    secondary:
      "bg-transparent hover:bg-primary-50 text-primary-600 border border-primary-500 focus:ring-primary-300",
    tertiary:
      "bg-transparent hover:bg-primary-50 text-primary-600 focus:ring-primary-300",
    shimmer: "focus:ring-slate-300",
  };

  // Secondary palette classes (rose)
  const secondaryPalette = {
    primary:
      "bg-secondary-500 hover:bg-secondary-600 text-white border border-secondary-500 focus:ring-secondary-500",
    primaryShadow:
      "bg-secondary-500 hover:bg-secondary-600 text-white shadow-lg shadow-neutral-500/25 focus:ring-secondary-500",
    secondary:
      "bg-transparent hover:bg-secondary-50 text-secondary-600 border border-secondary-500 focus:ring-secondary-300",
    tertiary:
      "bg-transparent hover:bg-secondary-50 text-secondary-600 focus:ring-secondary-300",
    shimmer: "focus:ring-slate-300",
  };

  // Return the appropriate palette based on colorPalette prop
  const variants =
    colorPalette === "secondary" ? secondaryPalette : primaryPalette;

  return variants[variant] || variants.primary;
};

const sizes: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-5 py-2.5 text-base gap-2",
  lg: "px-7 py-3.5 text-lg gap-2.5",
};

// Theme-aware button using shared design tokens
export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  colorPalette = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        base,
        getVariantClasses(variant, colorPalette),
        variant === "shimmer" && shimmerBase,
        variant === "shimmer" && shimmerGlow,
        sizes[size],
        className,
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin">
          {/* https://tailwindcss.com/docs/animation */}
          <AutorenewIcon className="h-4 w-4" />
        </span>
      ) : leftIcon ? (
        <span aria-hidden="true">{leftIcon}</span>
      ) : null}
      {children}
      {!isLoading && rightIcon ? (
        <span aria-hidden="true">{rightIcon}</span>
      ) : null}
    </button>
  );
};

export default Button;
