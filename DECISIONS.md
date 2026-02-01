# Decisions Log

## 2025-01-31

### [2025-01-31] Added frontmatter to all Romanian articles
All 17 Romanian health/sleep articles were missing YAML frontmatter headers. Added standardized frontmatter with:
- Titles extracted from H1 headings
- Descriptions summarizing content
- Sequential dates (2025-12-10 to 2025-12-26)
- Romanian tags (somn, cortizol, hormoni, etc.)
- Author set to "echipa-redactionala"

**Why**: MDsveX requires frontmatter for post metadata. Without it, posts wouldn't appear in listings or have proper SEO.

### [2025-01-31] Replaced logo text "Svelte Blog" with "better sleep"
Changed the SVG logo in `Logo.svelte` from the original "Svelte Blog" path-based text to a simple SVG text element displaying "better sleep".

**Why**: Rebranding the starter template for the Better Sleep health blog. Used text element instead of path for easier future modifications.

### [2025-01-31] Kept original logogram icon
Retained the decorative flower/star icon from the original template alongside the new "better sleep" text.

**Why**: The icon is neutral and visually appealing. Creating a custom sleep-themed icon was not requested and would require design work.

### [2025-01-31] Used "echipa-redactionala" as default author
Set all Romanian articles to use "echipa-redactionala" (editorial team) as the author instead of individual names.

**Why**: No individual author information was provided for the health articles. A team attribution is appropriate for editorial content.
