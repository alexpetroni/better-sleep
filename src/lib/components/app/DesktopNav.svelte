<script lang="ts">
    import { page } from "$app/state";
    import { siteConfig } from "$lib/config/site";
    import { cn } from "$lib/utils";
</script>

<nav class="hidden md:flex gap-6">
    {#each siteConfig.nav as item}
        <a
            href={item.href}
            class={cn(
                "flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                page.url.pathname === item.href && "text-foreground",
            )}
        >
            {item.title}
        </a>
    {/each}
</nav>
