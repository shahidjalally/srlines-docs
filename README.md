# SRLINES Docs Content Pack

This repository contains a ready-to-publish Docusaurus `docs/` content set for **docs.srlines.net**.

## What is included

- 95 Markdown documentation pages focused on WhatsApp automation SaaS use-cases.
- A ready `sidebars.js` with category navigation.
- Topic coverage aligned to onboarding, automation, integrations, analytics, security, and developer APIs.

## Quick publish notes

1. Initialize a Docusaurus site (if not already initialized):
   ```bash
   npx create-docusaurus@latest . classic --skip-install
   ```
2. Keep this `docs/` folder and `sidebars.js`.
3. Configure `docusaurus.config.js` with:
   - `url: 'https://docs.srlines.net'`
   - `baseUrl: '/'`
   - `organizationName` and `projectName` for your GitHub repo.
4. Add `CNAME` containing `docs.srlines.net` when deploying GitHub Pages.
