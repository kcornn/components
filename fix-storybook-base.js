import fs from "fs";
import path from "path";

// Read the storybook index.html
const htmlPath = path.join("storybook-static", "index.html");
let htmlContent = fs.readFileSync(htmlPath, "utf8");

// Replace relative paths with absolute paths using the base
htmlContent = htmlContent.replace(
  /href="\.\/favicon\.svg"/g,
  'href="/components/storybook/favicon.svg"'
);
htmlContent = htmlContent.replace(
  /src="\.\/favicon\.svg"/g,
  'src="/components/storybook/favicon.svg"'
);
htmlContent = htmlContent.replace(
  /url\(\'\.\/sb-common-assets\//g,
  "url('/components/storybook/sb-common-assets/"
);
htmlContent = htmlContent.replace(
  /href="\.\/sb-manager\//g,
  'href="/components/storybook/sb-manager/'
);
htmlContent = htmlContent.replace(
  /href="\.\/sb-addons\//g,
  'href="/components/storybook/sb-addons/'
);
htmlContent = htmlContent.replace(
  /src="\.\/sb-manager\//g,
  'src="/components/storybook/sb-manager/'
);
htmlContent = htmlContent.replace(
  /src="\.\/sb-addons\//g,
  'src="/components/storybook/sb-addons/'
);
htmlContent = htmlContent.replace(
  /import \'\.\/sb-manager\//g,
  "import '/components/storybook/sb-manager/"
);
htmlContent = htmlContent.replace(
  /import \'\.\/sb-addons\//g,
  "import '/components/storybook/sb-addons/"
);

// Write the updated content back
fs.writeFileSync(htmlPath, htmlContent);

console.log("Storybook HTML base paths updated successfully!");
