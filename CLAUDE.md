# CLAUDE.md - AI Assistant Guidelines

## Project Summary

**Better Sleep** is a Romanian-language health blog focused on sleep science, hormonal balance, and nocturnal wellness. Built with SvelteKit and MDsveX, it provides articles about sleep disorders, circadian rhythms, and practical solutions for better rest.

## Tech Stack

- **Framework**: SvelteKit 2.x with Svelte 5 (runes)
- **Styling**: Tailwind CSS 4.x with shadcn-svelte components
- **Content**: MDsveX for Markdown with Svelte components
- **UI Components**: bits-ui (headless primitives), Lucide icons
- **Theme**: mode-watcher for dark/light mode
- **Language**: TypeScript

## Folder Structure

```
src/
├── lib/
│   ├── assets/        # Static assets (favicon, images)
│   ├── components/
│   │   ├── app/       # App-level components (Header, Footer, Logo, Nav)
│   │   ├── blog/      # Blog-specific components (PostCard, AuthorCard)
│   │   └── ui/        # shadcn-svelte UI primitives (Button, Card, etc.)
│   ├── config/        # Site configuration (site.ts, authors.ts)
│   └── utils.ts       # Utility functions (cn, formatDate)
├── posts/             # Markdown blog posts with frontmatter
└── routes/            # SvelteKit file-based routing
    ├── blog/[slug]/   # Individual post pages
    ├── authors/[author]/ # Author profile pages
    ├── tags/[tag]/    # Tag listing pages
    └── about/         # Static pages
```

## Coding Conventions

### Style
- Use TypeScript for all `.ts` and `.svelte` files
- Use Svelte 5 runes (`$state`, `$derived`, `$props`) not legacy reactive statements
- Use `cn()` utility for conditional class merging
- Tailwind classes only, no custom CSS unless necessary

### Naming
- Components: PascalCase (`PostCard.svelte`)
- Files: kebab-case for posts (`my-article.md`)
- Variables/functions: camelCase
- Config objects: camelCase with `Config` suffix

### Error Handling
- Use SvelteKit's `+error.svelte` for route errors
- Graceful fallbacks for missing data (authors, tags)

### Blog Posts
- All posts require frontmatter: `title`, `description`, `date`, `tags`, `author`
- Date format: `YYYY-MM-DD`
- Tags: lowercase, hyphenated array

## Behavior Guidelines

1. **Before major refactors**: Ask for confirmation before restructuring components or changing data flow
2. **Preserve existing patterns**: Follow the established shadcn-svelte component patterns
3. **Content changes**: When adding posts, always include proper frontmatter
4. **No unnecessary files**: Don't create README files or documentation unless requested
5. **Test visibility**: Verify changes don't break the build (`npm run build`)
6. **Romanian content**: Blog posts are in Romanian; keep UI text consistent with the site language
7. **Minimal changes**: Only modify what's necessary; avoid over-engineering
