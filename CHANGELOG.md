# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-01-01

### Added

- **GitHub-Hosted Templates**: Fetch templates directly from GitHub repositories
  - Use `--template github:owner/repo` to specify a GitHub template
  - Support for specific branches/tags: `github:owner/repo#v1.0.0`
  - Support for subdirectories: `github:owner/repo/path/to/template`
- **Template Caching**: Templates are cached locally for 24 hours in `~/.superdocs/templates/`
- **Template Management Commands**:
  - `superdocs template list` - List available templates
  - `superdocs template cache --clear` - Clear template cache
- **Force Refresh**: Use `--refresh` flag to bypass cache and re-download templates
- **Local Templates**: Use local template folders with `--template ./path/to/template`
- **Template Registry**: Shorthand names for official templates

### Changed

- Renamed `--theme` option to `--template` for clarity
- Default template now fetched from GitHub instead of bundled

### Removed

- Bundled template (now fetched from `github:DevRohit06/superdocs-default-template`)

## [0.2.2] - 2025-12-29

### Fixed

- **Template**: Fixed all internal links (Sidebar, Header, Footer, Search, etc.) to correctly respect the `baseUrl` configuration.
- **Navigation**: Updated Breadcrumbs, MobileNav, and PrevNextNav to support custom base URLs.

## [0.2.1] - 2025-12-29

### Fixed

- **Config**: Fixed `baseUrl` option not being applied to the Astro configuration. It now correctly patches `astro.config.mjs` when a custom base URL is provided.

## [0.2.0] - 2025-12-29

### Fixed

- **Eject**: Resolved build errors in ejected projects by properly handling dependencies and configuration.

### Improved

- **MDX Components**: Refined `Tabs` and `CodeGroup` components for better stability and rendering.
- **Template**: Modernized documentation template with Astro 5 and Tailwind CSS v4 support.

## [0.1.0] - 2025-12-28 (Pre-Release)

### Added

- **CLI Tool**: Complete command-line interface for documentation generation
- **Build Command**: Generate static documentation sites with `superdocs build`
- **Dev Command**: Start a development server with hot reload using `superdocs dev`
- **Eject Command**: Export full Astro project source code for customization with `superdocs eject`
- **Astro Integration**: Built on Astro for lightning-fast static site generation
- **Markdown & MDX Support**: Full support for both formats with frontmatter
- **SEO Optimization**: Meta tags, semantic HTML, and proper structure
- **Responsive Design**: Mobile-friendly documentation interface
- **Rich Component Library**:
  - API Playground component
  - Breadcrumbs navigation
  - Search modal
  - Sidebar with grouping
  - Table of contents
  - Theme toggle
  - Tooltip component
  - Accordion, Alert, Badge, Cards, Code groups, and more
- **Hot Reload**: Development server with file watching
- **Fast Builds**: Optimized static site generation
- **Theme Support**: Custom themes and base URLs
- **Project Scaffolding**: Automatic Astro project creation from templates
- **Configuration Sync**: Dynamic config generation based on user options

### Dependencies

- `@astrojs/mdx`: ^3.1.0
- `@clack/prompts`: ^0.11.0
- `astro`: ^4.16.0
- `chokidar`: ^4.0.0
- `commander`: ^12.1.0
- `execa`: ^9.0.0
- `fs-extra`: ^11.2.0
- `picocolors`: ^1.1.1
- `zod`: ^3.23.0

### Known Issues

- Search functionality implemented but may need further testing
- Some advanced MDX features still being refined
- Windows compatibility testing ongoing

### What's Next

- Enhanced search capabilities
- Additional themes and customization options
- Plugin system for extensions
- Improved Windows support
- More component integrations
