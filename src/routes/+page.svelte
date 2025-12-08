<script lang="ts">
    import { siteConfig } from "$lib/config/site";
    import { Button } from "$lib/components/ui/button";
    import GithubIcon from "@lucide/svelte/icons/github";
    import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
</script>

<svelte:head>
    <title>{siteConfig.name}</title>
</svelte:head>

<section
    class="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10 px-4 md:px-0"
>
    <div class="flex max-w-[980px] flex-col items-start gap-2">
        <h1
            class="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl"
        >
            SvelteKit shadcn blog starter <br class="hidden sm:inline" />
            built with MDsveX.
        </h1>
        <p class="max-w-[700px] text-lg text-muted-foreground">
            A feature-rich starter for building markdown-based blogs with
            SvelteKit, Tailwind CSS, and shadcn-svelte. Fully customizable and
            open source.
        </p>
    </div>
    <div class="flex gap-4">
        <Button href="/blog" class="gap-2"
            >Read the Blog <ArrowRightIcon /></Button
        >
        <Button
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            class="gap-2"
        >
            <GithubIcon class="h-4 w-4" />
            GitHub
        </Button>
    </div>
</section>
