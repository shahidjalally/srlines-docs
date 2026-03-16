# SRLINES Docs Portal

This repository now contains a complete Docusaurus documentation portal for **docs.srlines.net**.

## Included features

- ✅ Landing page at `/` with quick navigation cards.
- ✅ Top navigation menu with docs entry and website link.
- ✅ Search bar (local search plugin, no Algolia dependency required).
- ✅ Sidebar navigation across all docs categories.
- ✅ Doc pagination (previous/next links on documentation pages).
- ✅ `sitemap.xml` generation during build for Google Search Console submission.

## Local development

```bash
npm install
npm run start
```

## Production build

```bash
npm run build
```

The GitHub Actions workflow in `.github/workflows/docusaurus.yml` deploys the generated `build/` output to GitHub Pages.
