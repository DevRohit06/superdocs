# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.2] - 2026-01-04

### Added

- **Update Checker**: Automatic version check on CLI startup with update notification
- **Upgrade Command**: New `lito upgrade` command to check and install latest version
- **Auto-detect Package Manager**: Upgrade uses pnpm, yarn, or npm based on availability

## [0.5.1] - 2026-01-04

### Changed

- **Package Rename**: Renamed package from `@lito/cli` to `@litodocs/cli`
- **README Overhaul**: Improved documentation with tables, quick start guide, and better formatting
- **Migration Note**: Added note about previous package name `@devrohit06/superdocs`

### Added

- **Local Development**: Added `npm link` instructions for local development

## [0.5.0] - 2026-01-04

### Added

- **Documentation Versioning**: Support for versioned documentation
- **Hosting Provider Support**: New `--provider` option for optimized builds (Vercel, Netlify, Cloudflare, static)
- **Rendering Modes**: New `--rendering` option supporting static, server, and hybrid modes
- **Dynamic Theme Generation**: Generate OKLCH color palettes from primary color with automatic light/dark mode support
- **i18n Support**: Automatic detection and syncing of locale folders with 40+ language codes
- **Asset Syncing**: Automatic syncing of `_assets`, `_images`, `_css`, and `public` folders

### Changed

- **Organization Migration**: Moved to official Lito-docs organization on GitHub
  - CLI repository: `Lito-docs/cli`
  - Template repository: `Lito-docs/template`
  - Documentation repository: `Lito-docs/docs`
- **Default Template**: Updated default template source to `github:Lito-docs/template`
- **Branding**: Updated project description to "Beautiful documentation sites from Markdown. Fast, simple, and open-source."
- **Optimized Sync**: Improved sync pipeline with parallel processing for faster builds
- **CLI Sync**: Improved sync to handle versioned documentation folders
- **Smart Layout Injection**: Automatic layout detection (MarkdownLayout vs APILayout) based on frontmatter

### Improved

- **Code Quality**: Optimized async operations with Promise.all for parallel execution
- **Error Handling**: Better error handling throughout the CLI pipeline

## [0.3.5] - 2026-01-02

### Added

- **CLI Config Options**: New command-line options for configuring documentation metadata and branding
  - `--name <name>` - Set project name directly from CLI
  - `--description <description>` - Set project description
  - `--primary-color <color>` - Set primary theme color (hex format)
  - `--accent-color <color>` - Set accent theme color (hex format)
  - `--favicon <path>` - Set favicon path
  - `--logo <path>` - Set logo path
- **Enhanced Config Management**: CLI options now automatically update `docs-config.json` during build/dev/eject operations

### Removed

- **Unused Dependency**: Removed `zod` package (was not being used, reduces bundle size)

### Improved

- **Cleaner Dependencies**: Only 8 essential packages now (from 9)
- **CLI Usability**: No need to manually edit `docs-config.json` for basic configuration

## [0.3.0] - 2026-01-01

### Added

- **GitHub-Hosted Templates**: Fetch templates directly from GitHub repositories
  - Use `--template github:owner/repo` to specify a GitHub template
  - Support for specific branches/tags: `github:owner/repo#v1.0.0`
  - Support for subdirectories: `github:owner/repo/path/to/template`
- **Template Caching**: Templates are cached locally for 24 hours in `~/.lito/templates/`
- **Template Management Commands**:
  - `lito template list` - List available templates
  - `lito template cache --clear` - Clear template cache
- **Force Refresh**: Use `--refresh` flag to bypass cache and re-download templates
- **Local Templates**: Use local template folders with `--template ./path/to/template`
- **Template Registry**: Shorthand names for official templates

### Changed

- Renamed `--theme` option to `--template` for clarity
- Default template now fetched from GitHub instead of bundled

### Removed

- Bundled template (now fetched from `github:Lito-docs/template`)

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
- **Build Command**: Generate static documentation sites with `lito build`
- **Dev Command**: Start a development server with hot reload using `lito dev`
- **Eject Command**: Export full Astro project source code for customization with `lito eject`
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
