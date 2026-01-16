export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
}
