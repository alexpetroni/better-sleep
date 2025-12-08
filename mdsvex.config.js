import { defineMDSveXConfig as defineMdsvexConfig } from "mdsvex";

const config = defineMdsvexConfig({
    extensions: [".svelte.md", ".md", ".svx"],
    smartypants: {
        dashes: "oldschool",
    },
    remarkPlugins: [],
    rehypePlugins: [],
});

export default config;
