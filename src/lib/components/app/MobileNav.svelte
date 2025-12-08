<script lang="ts">
    import { page } from "$app/state";
    import MenuIcon from "@lucide/svelte/icons/menu";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import Logo from "$lib/components/app/Logo.svelte";
    import { siteConfig } from "$lib/config/site";
    import { cn } from "$lib/utils";

    let open = $state(false);
</script>

<Sheet.Root bind:open>
    <Sheet.Trigger
        class={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "md:hidden",
        )}
    >
        <MenuIcon class="h-5 w-5" />
        <span class="sr-only">Toggle Menu</span>
    </Sheet.Trigger>
    <Sheet.Content side="right">
        <div class="flex flex-col gap-4 mt-4 px-2">
            <a
                href="/"
                class="flex items-center space-x-2"
                onclick={() => (open = false)}
            >
                <Logo class="h-6 w-auto" />
            </a>
            <div class="flex flex-col gap-3 mt-4">
                {#each siteConfig.nav as item}
                    <a
                        href={item.href}
                        class={cn(
                            "text-lg font-medium text-muted-foreground transition-colors hover:text-primary",
                            page.url.pathname === item.href &&
                                "text-foreground",
                        )}
                        onclick={() => (open = false)}
                    >
                        {item.title}
                    </a>
                {/each}
            </div>
        </div>
    </Sheet.Content>
</Sheet.Root>
