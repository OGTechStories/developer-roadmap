# OGTechStories

OGTechStories is a technology learning library built with [Docusaurus](https://docusaurus.io/).

## Installation

```bash
npm install
```

The project uses Node.js `24.14.0`. The required version is recorded in `.nvmrc`.

## Local Development

```bash
npm run start
```

This starts the local development server. The local-search plugin creates its search index during a production build, so search should be tested with the production commands below.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Production Preview

Build and serve the generated static site locally:

```bash
npm run build
npm run serve
```

## Cloudflare Pages Deployment

Connect the GitHub repository to Cloudflare Pages with these settings:

- **Framework preset:** Docusaurus
- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `build`
- **Root directory:** `/`
- **Node.js version:** `24.14.0`

Add `NODE_VERSION` with value `24.14.0` under Cloudflare Pages project settings if the build image does not pick up `.nvmrc` automatically. Cloudflare will build and deploy every push to the production branch, while other branches can be configured as preview deployments.

Connect the custom domain from **Workers & Pages → your project → Custom domains**. The Docusaurus `url` is already set to `https://ogtechstories.com`; update it if the final domain changes.

Do not commit `build/`, `.docusaurus/`, or `node_modules/`; they are already excluded by `.gitignore`.
