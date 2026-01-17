import type { LinkProps } from "./types";

export function Link({
  href,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  className = "",
}: LinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`text-primary-600 hover:text-primary-700 underline ${className}`}
    >
      {children}
    </a>
  );
}

export default Link;
