export const siteConfig = {
    name: "BetterSleep - resursa de articole care te ajuta sa dormi",
    companyName: "BetterSleep",
    url: "https://betterSleep.ro",
    ogImage: "https://betterSleep.ro/images/blog-starter.jpg",
    description:
        "Un blog care te ajuta sa te ia somnul.",
    links: {
        twitter: "https://github.com/bettermedicineai/betterSleep",
        github: "https://github.com/bettermedicineai/betterSleep",
    },
    keywords: `Insomnii, ce sa fac sa adorm, somn intrerupt`,
    nav: [
        {
            title: "Prima pagina",
            href: "/",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "Despre noi",
            href: "/despre-noi",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ]
};

export type SiteConfig = typeof siteConfig;
