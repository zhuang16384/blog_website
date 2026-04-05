# Zhuang's Blog

This is my personal blog website, built with [Astro 6](https://astro.build/) and [Pico CSS](https://picocss.com/). It focuses on simplicity, accessibility, and semantic HTML.

## Key Principles

- **Simplicity**: No complex frameworks or over-engineered systems.
- **Accessibility**: Semantic HTML and clean structure for better usability.
- **Fast Performance**: Static site generation with minimal CSS and JavaScript.
- **Type Safety**: Fully integrated with TypeScript and Astro's Content Layer.

## Development

This project uses `pnpm` for dependency management.

### Commands

```shell
# Install dependencies
pnpm install

# Start local development server
pnpm dev

# Build the production site
pnpm build

# Preview the production build locally
pnpm preview

# Format source files with Prettier
pnpm format
```

If you use `mise-en-place` for your tooling, this project includes a `mise.toml` configuration file.

## Configuration

### Site Settings
Global settings (title, description, social links) are managed in `src/settings.ts`.

### Styling
Global styles and Pico CSS customization are handled in `src/styles/main.scss`. The theme color and included modules can be toggled there.

### Navigation
The site header and navigation links are defined directly in the `src/components/PageHeader.astro` component.

## Content Management

### Adding Blog Posts
Posts are stored in `src/content/blog/`. To add a new post:
1. Create a Markdown file in that directory.
2. Ensure the frontmatter includes `title` and `date`.
3. (Optional) Add `description` (for summaries) and `tags` (as an array).

Refer to `src/templates/post.md` for a starting point.

## Project Architecture

### Core Framework (Astro)
- `astro.config.mjs`: Core Astro configuration and integrations.
- `src/content.config.ts`: Defines the schema and type safety for blog content.
- `src/settings.ts`: Centralized site-wide metadata.

### Dependency & Environment Management
- `package.json`: Manifest of dependencies and scripts.
- `pnpm-lock.yaml`: Ensures consistent library versions.
- `mise.toml`: Automatically manages Node.js and pnpm versions.

### Code Standards
- `tsconfig.json`: TypeScript compiler and type-checking rules.
- `.prettierrc`: Code formatting standards.
- `.gitignore`: Excludes build artifacts and local caches from Git.

---
Copyright (c) 2026 Zhuang. Licensed under the MIT License.
