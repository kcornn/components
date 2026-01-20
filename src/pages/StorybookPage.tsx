import { DocsPage } from "../components/DocsPage";
import { LinkExternal } from "../components/Link";

export function StorybookPage() {
  return (
    <DocsPage
      title="Storybook"
      description="This page provides access to the Storybook documentation and component playground."
    >
      <div>
        <LinkExternal href="/components/storybook">
          Open Storybook in new tab
        </LinkExternal>
      </div>
    </DocsPage>
  );
}

export default StorybookPage;
