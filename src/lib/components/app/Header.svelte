<script lang="ts">
    import { goto } from "$app/navigation";
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";
    import GithubIcon from "@lucide/svelte/icons/github";

    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
    import Logo from "$lib/components/app/Logo.svelte";
    import DesktopNav from "$lib/components/app/DesktopNav.svelte";
    import MobileNav from "$lib/components/app/MobileNav.svelte";
    import { siteConfig } from "$lib/config/site";
    import { cn } from "$lib/utils";
    import SearchDialog from "$lib/components/app/SearchDialog.svelte";
</script>

<header
    class="container mx-auto flex h-16 items-center justify-between py-4 px-2 md:px-0"
>
    <div class="flex items-center gap-6 md:gap-10">
        <a href="/" class="flex items-center space-x-2">
            <Logo class="h-6 w-auto" />
        </a>
        <DesktopNav />
    </div>

    <div class="flex items-center gap-4">
        <div class="hidden md:flex items-center">
            <SearchDialog />
        </div>
        <div class="hidden md:flex items-center gap-1">
            <Button
                variant="ghost"
                size="icon"
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
            >
                <GithubIcon class="h-4 w-4" />
                <span class="sr-only">GitHub</span>
            </Button>
            <div class="h-5">
                <Separator orientation="vertical" />
            </div>
            <Button
                class="cursor-pointer"
                variant="ghost"
                size="icon"
                onclick={toggleMode}
            >
                <SunIcon
                    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <MoonIcon
                    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </div>

        <MobileNav />
    </div>
</header>
