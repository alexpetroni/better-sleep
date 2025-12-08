export const siteConfig = {
    name: "Sveltekit shadcn blog starter",
    url: "https://sveltekit-blog-starter.netlify.app",
    ogImage: "https://sveltekit-blog-starter.netlify.app/images/blog-starter.jpg",
    description:
        "A blog starter built with SvelteKit, shadcn-svelte, Tailwind CSS, and MDsveX.",
    links: {
        twitter: "https://github.com/YusufCeng1z",
        github: "https://github.com/YusufCeng1z/sveltekit-shadcn-blog-starter",
    },
    keywords: `Svelte, SvelteKit, Tailwind CSS, Shadcn, MDsveX, Blog Starter`,
    nav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ]
};

export type SiteConfig = typeof siteConfig;
