// Post-build step: renders the App component to a static HTML string
// (via react-dom/server) and injects it into dist/index.html, so crawlers
// and non-JS clients get real content instead of an empty <div id="root">.
// The client bundle still boots normally on top of this markup on load.
import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import ReactDOMServer from "react-dom/server";
import React from "react";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

async function main() {
  const server = await createServer({
    root: process.cwd(),
    plugins: [react()],
    server: { middlewareMode: true },
    appType: "custom",
  });

  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));

  await server.close();

  const distIndexPath = path.resolve(process.cwd(), "dist/index.html");
  const template = readFileSync(distIndexPath, "utf-8");

  if (!template.includes('<div id="root"></div>')) {
    throw new Error('Could not find <div id="root"></div> in dist/index.html');
  }

  const output = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  writeFileSync(distIndexPath, output);
  console.log("[prerender] injected static markup into dist/index.html");
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exit(1);
});
