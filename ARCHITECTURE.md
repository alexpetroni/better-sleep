# Architecture

## High-Level Components

```
┌─────────────────────────────────────────────────────────┐
│                     SvelteKit App                        │
├─────────────────────────────────────────────────────────┤
│  Routes (+page.svelte)                                   │
│  ├── / (Home - recent posts)                            │
│  ├── /blog (Post listing)                               │
│  ├── /blog/[slug] (Individual post)                     │
│  ├── /authors/[author] (Author posts)                   │
│  ├── /tags/[tag] (Tagged posts)                         │
│  └── /about (Static page)                               │
├─────────────────────────────────────────────────────────┤
│  Layout Components                                       │
│  ├── Header (Logo, Navigation, Theme toggle)            │
│  ├── Footer (Credits, links)                            │
│  └── MobileNav (Sheet-based mobile menu)                │
├─────────────────────────────────────────────────────────┤
│  Content Layer (MDsveX)                                  │
│  └── /src/posts/*.md → Parsed at build time             │
└─────────────────────────────────────────────────────────┘
```

## Data Flow

### Content Pipeline
1. **Input**: Markdown files in `src/posts/` with YAML frontmatter
2. **Processing**: MDsveX parses `.md` → Svelte components at build time
3. **Output**: Static HTML pages with hydration

### Post Metadata
```
frontmatter (YAML)
    ↓
+page.server.ts (load function)
    ↓
+page.svelte (render)
    ↓
PostCard / Post components
```

### Configuration
- `site.ts`: Site name, URL, navigation, social links
- `authors.ts`: Author profiles (name, avatar, bio, social)

## External Services

- **None currently** - fully static site
- **Potential**: Analytics, comments (not implemented)

## Key Entities

| Entity | Location | Purpose |
|--------|----------|---------|
| Post | `src/posts/*.md` | Blog content with frontmatter |
| Author | `src/lib/config/authors.ts` | Author metadata |
| SiteConfig | `src/lib/config/site.ts` | Global site settings |

## Constraints & Considerations

- **Static Generation**: All pages pre-rendered at build time
- **No Database**: Content stored as Markdown files
- **Client-side Search**: SearchDialog filters posts in-browser
- **Bundle Size**: shadcn components are tree-shakeable
- **SEO**: Frontmatter used for meta tags and OpenGraph
