import { DocsPage } from "../components/DocsPage";
import { Link } from "../components/Link";

export function StorybookPage() {
  return (
    <DocsPage
      title="Storybook"
      description="This page provides access to the Storybook documentation and component playground."
    >
      <div>
        <Link href="/storybook">Open Storybook in new tab</Link>
      </div>
    </DocsPage>
  );
}

export default StorybookPage;
