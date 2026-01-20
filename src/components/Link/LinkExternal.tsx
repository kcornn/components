import type { LinkProps } from "./types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export function LinkExternal({
  href,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  className = "",
  color = "primary",
  icon = <OpenInNewIcon fontSize="small" />,
}: LinkProps) {
  const colorClasses = {
    primary: "text-primary-600 hover:text-primary-700",
    secondary: "text-secondary-600 hover:text-secondary-700",
    accent: "text-accent-600 hover:text-accent-700",
    neutral: "text-neutral-600 hover:text-neutral-700",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${colorClasses[color]} underline inline-flex items-center gap-1 ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}

export default LinkExternal;
