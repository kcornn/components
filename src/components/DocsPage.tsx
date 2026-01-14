import type { ReactNode } from "react";

interface DocsPageProps {
  title: string;
  children?: ReactNode;
  description?: string;
}

export function DocsPage({ title, children, description }: DocsPageProps) {
  return (
    <div className="docs-page">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">{title}</h2>
        {description && <p className="text-slate-700 mb-4">{description}</p>}
      </div>
      <div className="docs-content">{children}</div>
    </div>
  );
}
