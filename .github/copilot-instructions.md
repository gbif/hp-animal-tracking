# GBIF Hosted Portal Template - Copilot Coding Agent Instructions

## Repository Overview

**Project Type:** Jekyll static website using GBIF's custom remote theme (`gbif/jekyll-hp-base-theme`)  
**Primary Language:** Ruby (Jekyll), Liquid templates, Markdown, YAML, JavaScript, SCSS  
**Size:** ~58 source files (excluding dependencies), ~21MB total  
**Purpose:** Template for creating GBIF biodiversity data portals with multilingual support and data visualization widgets

This is a Jekyll-based static site generator project that uses a remote theme specifically designed for GBIF (Global Biodiversity Information Facility) hosted portals. The site integrates biodiversity data widgets that connect to GBIF.org APIs and displays occurrence records, datasets, collections, institutions, and literature.

**Live Site:** https://template_site.hp.gbif-staging.org/  
**CI System:** Jenkins at https://builds.gbif.org/job/hp-template_site/

## Critical Build Information

### No Test Infrastructure

This repository has **no automated tests, linters, or validation scripts**. Validation is done by:
1. Successfully building the site with Jekyll
2. Manually verifying the site renders correctly
3. The CI system (Jenkins) performing the build

## Repository Structure

### Root Directory Files
```
├── Gemfile              # Ruby dependencies (Jekyll 4.1.1, remote theme, plugins)
├── Gemfile.lock         # Locked dependency versions
├── _config.yml          # Main Jekyll configuration (CRITICAL - site settings, theme config)
├── _config_staging.yml  # Staging environment overrides
├── _config_test.yml     # Test environment overrides
├── serve.json           # Local development server URL rewriting rules (for _key_ placeholders)
├── README.md            # Comprehensive guide to layouts, blocks, and configuration
└── 404.md               # Custom 404 error page
```

### Key Directories

**`_config.yml`** - Main configuration file containing:
- Site metadata (title, description, url, email)
- Remote theme specification: `remote_theme: gbif/jekyll-hp-base-theme`
- Plugin configuration (jekyll-feed, jekyll-remote-theme)
- Theme styling (colors, navbar settings)
- Language/locale defaults for multilingual content
- Permalink structure and exclusion rules

**`_data/`** - Structured YAML/JSON data files:
- `navigation.yml` - Top navbar menu structure
- `footer.yml` - Footer column configuration
- `languages.yml` - Multilingual site language definitions
- `translations.yml` - UI label translations
- `examples.yml` - Sample data for compose blocks (features, stats, etc.)
- `images.yml` - Image metadata

Language-specific navigation, footer and other files should be placed in `_data/LANG/` (e.g., `_data/da/navigation.yml`).

**`_includes/`** - Reusable template components:
- `js/config.js` - **CRITICAL** - GBIF data widget configuration (occurrence search filters, dataset scopes, etc.)
- `blocks/` - Custom reusable blocks for `compose` layouts (currently empty, but available for extensions)
- Generally not edited unless creating custom blocks or widgets

**`_layouts/`** - Custom page layouts (currently empty):
- Layouts come from the remote theme by default
- Add custom layouts here to override or extend theme layouts

**`_posts/`** - Blog posts in Jekyll format:
- Filename format: `YYYY-MM-DD-title.md`
- Subfolders for each language (e.g., `_posts/da/` for Danish)
- Frontmatter must include: title, date, categories, lang-ref

**`_sass/`** - Custom SCSS/CSS:
- `_main.scss` - Import custom styles here
- `_example.scss` - Example custom styles
- Site uses Bulma framework

**`assets/`** - Static files:
- `images/` - All images, logos, backgrounds
- Place PDFs, downloads here too
- Images should use relative paths: `/assets/images/filename.jpg`

**Use language-specific content directories**:
- `en/` - English content (default language)
- `da/` - Danish content (example second language)
- Each contains: home.md, about.md, archive.md, data/, etc.
- Structure should mirror across languages. But the important part is the `lang-ref` in frontmatter to link translations. Two pages with the same `lang-ref` are considered translations of each other.

**`en/data/` and `da/data/` subdirectories** - GBIF data widget pages:
- Search pages: `occurrences.md`, `datasets.md`, `collection.md`, `institution.md`, `literature.md`, `publisher.md`
- Detail pages: `occurrenceKey.md`, `datasetKey.md`, `collectionKey.md`, `institutionKey.md`, `publisherKey.md`
- Use corresponding layouts: `occurrence`, `dataset`, `collection-search`, `institution-search`, `publisher`, plus `-key` variants
- **CRITICAL:** Detail page permalinks must use `/_key_` placeholder (e.g., `/occurrence/_key_`). Server replaces with actual ID at runtime.

## Predefined Layouts (from Remote Theme)

When creating or editing pages, use these layouts in frontmatter:

1. **`heroImage`** - Large image with floating text overlay
   - Parameters: title, description, background, imageLicense, height, parallax, cta
   
2. **`post`** - Blog post with title, description, and image
   - Parameters: title, description, background, ratio, toc, mobileToc
   
3. **`page`** - Simple page with title and markdown content
   - Default layout if none specified
   
4. **`documentation`** - Sidebar navigation with nested links
   - Requires: permalink, sideNavigation (reference to _data file), toc
   
5. **`compose`** - **Most flexible** - Stitch together multiple blocks
   - Requires: composition array defining block types and data sources
   - Available blocks: heroImage, heroVideo, heroBox, postHeader, features, latestPosts, pageMarkdown, markdown, splitBanner, textBanner, stories, dashboard, media
   
6. **Data layouts** (for GBIF widgets):
   - `occurrence`, `occurrence-key`
   - `dataset`, `dataset-key`
   - `collection-search`, `collection-key`
   - `institution-search`, `institution-key`
   - `literature`, `publisher`, `publisher-key`

**Compose Block Data Sources:**
- Inline: `inlineData: { title: "...", features: [...] }`
- Reference: `data: examples.couldBeAnyName` (refers to `_data/examples.yml` file)

## Common Frontmatter Properties

```yaml
---
title: Page Title                    # Required for most layouts
description: Brief description       # Recommended
background: /assets/images/img.jpg   # Image path
imageLicense: License info           # Image attribution
permalink: /custom-url               # Custom URL (required for documentation layout)
lang-ref: unique-ref                 # Links translations together
lang: da                             # Language code (auto-set based on folder)
layout: heroImage                    # Layout type
height: 70vh                         # Hero image height
toc: true                            # Table of contents
parallax: true                       # Parallax scrolling
cta:                                 # Call-to-action buttons
  - text: Button Text
    href: /link
    isPrimary: true
---
```

## Configuration Files You Should Know

### `_includes/js/config.js` - GBIF Widget Configuration

**This file configures data widget behavior.** Key sections:

- `pages` - Which widget pages to enable (occurrenceSearch, datasetSearch, etc.)
- `availableCatalogues` - Data types to display (OCCURRENCE, DATASET, COLLECTION, etc.)
- `theme` - Widget color scheme (primary color, border radius)
- `languages` - Available languages for widgets
- `occurrenceSearch.scope` - Filter occurrence data (e.g., by publishingOrg)
- `occurrenceSearch.highlightedFilters` - Prominent filter options
- `occurrenceSearch.excludedFilters` - Hidden filter options
- `datasetSearch.scope` - Limit datasets shown
- `literatureSearch.scope` - Filter literature by publishingOrganizationKey

**Example scope (limits data to specific publishers):**
```javascript
"occurrenceSearch": {
  "scope": {
    "type": "in",
    "key": "publishingOrg",
    "values": ["760d5f24-4c04-40da-9646-1b2c935da502"]
  }
}
```
The occurrence scope is using a variant of GBIF download predicates

### Multilingual Configuration

1. Set `rootLang: en` in `_config.yml` under `algae:`
2. Define languages in `_data/languages.yml`
3. Create folders: `en/`, `da/`, `es/`, etc. and `_data/LANG/navigation.yml`, `footer.yml`
4. Link translations: use same `lang-ref: unique-id` in frontmatter across versions
5. Language auto-set via _config.yml defaults based on folder

## Typical Workflows

### Adding a New Page
1. Create markdown file in language folder (e.g., `en/new-page.md`) with frontmatter (layout, title, description, permalink)
2. Write content in markdown
3. Add to `_data/navigation.yml` or language-specific version
4. Build to verify: `bundle exec jekyll build`

### Creating a Multilingual Page
1. Create in `en/page.md` and `da/page.md` with same `lang-ref: page-id`
2. Add to both `_data/navigation.yml` and `_data/da/navigation.yml`

### Customizing a Data Widget Page
1. Typically you do not have to edit the page if it is already there in `en/data/` (e.g., `occurrences.md`)
2. Modify `_includes/js/config.js` for scope, filters, or highlighted fields

### Adding a Custom Compose Block
1. Create template in `_includes/blocks/myBlock.html` using e.g. `{{ include.content.title }}`
2. Use in frontmatter: `composition: [{ type: myBlock, data: examples.myData }]`

### Modifying Site Styles
1. Edit `_sass/_main.scss` or create new SCSS file
2. Import in `_sass/_main.scss`: `@import "my-styles";`
3. Prefer Bulma/Tailwind classes where possible

## Common Issues and Workarounds

1. **`_key_` Permalink Not Working Locally**: The `serve.json` file provides URL rewriting for local development. For production, the server handles this.

2. **Images Not Displaying**: Ensure paths start with `/assets/` (not `assets/` or `./assets/`).

3. **Translation Menu Not Appearing**: Verify `lang-ref` is identical across language versions and `lang:` property is set correctly.

4. **Data Widget Not Loading**: Check `_includes/js/config.js` for syntax errors. Ensure the page layout matches the widget type (e.g., `layout: occurrence` for occurrence search).

5. **Navigation Link Not Appearing**: Check `_data/navigation.yml` syntax. Ensure proper indentation (YAML is whitespace-sensitive).

## Development Commands

**Build site:**
```bash
bundle exec jekyll build
```

**Serve with live reload:**
```bash
bundle exec jekyll serve --livereload
```

**Clean build artifacts:**
```bash
bundle exec jekyll clean
```

**Serve on specific port:**
```bash
bundle exec jekyll serve --port 4001
```

## Files to Exclude from Commits

The `.gitignore` already excludes:
- `_site/` - Generated site
- `.sass-cache/`, `.jekyll-cache/` - Build caches
- `vendor/` - Bundle dependencies
- `_config_local.yml` - Local overrides

**DO NOT commit:**
- Build artifacts in `_site/`
- Dependency directories like `vendor/bundle/`
- OS-specific files (`.DS_Store`)
- Local configuration overrides

## Trust These Instructions

These instructions are based on thorough exploration of the repository, including examining all configuration files, documentation, and attempting builds. The information about Ruby version compatibility is critical and based on actual build attempts.

**Only search the codebase if:**
- You need to find a specific file not mentioned here
- You're looking for existing examples of specific patterns
- Information here seems outdated or contradicts what you observe
- You need to understand implementation details of custom blocks or layouts

When in doubt about Jekyll or theme features, refer to:
- Repository README.md (comprehensive layout and block documentation)
- Theme documentation: https://hp-theme.gbif-staging.org/documentation-intro
- Jekyll docs: https://jekyllrb.com/docs/

For GBIF-specific features and data widgets, the `_includes/js/config.js` file is the source of truth.