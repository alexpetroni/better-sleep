<script lang="ts">
    import { onMount } from "svelte";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import Search from "@lucide/svelte/icons/search";
    import FileText from "@lucide/svelte/icons/file-text";

    let open = $state(false);
    let posts: any[] = $state([]);

    onMount(() => {
        (async () => {
            try {
                const response = await fetch("/api/search");
                if (response.ok) {
                    posts = await response.json();
                }
            } catch (error) {
                console.error("Failed to load search results", error);
            }
        })();

        function handleKeydown(e: KeyboardEvent) {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                open = !open;
            }
        }

        document.addEventListener("keydown", handleKeydown);
        return () => document.removeEventListener("keydown", handleKeydown);
    });
</script>

<Button
    variant="outline"
    class="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 text-muted-foreground"
    onclick={() => (open = true)}
>
    <Search class="h-4 w-4 xl:mr-2" />
    <span class="hidden xl:inline-flex">Search...</span>
    <span
        class="absolute right-1.5 top-1.5 hidden xl:flex select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100"
    >
        <span class="text-xs">⌘</span>K
    </span>
</Button>

<Dialog.Root bind:open>
    <Dialog.Content class="p-0 overflow-hidden shadow-lg">
        <Dialog.Title class="sr-only">Search</Dialog.Title>
        <Command.Root
            class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
        >
            <Command.Input placeholder="Type a command or search..." />
            <Command.List>
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading="Posts">
                    {#each posts as post}
                        <Command.Item
                            value={post.title}
                            onSelect={() => {
                                open = false;
                                window.location.href = `/blog/${post.slug}`;
                            }}
                        >
                            <FileText class="mr-2 h-4 w-4" />
                            <span>{post.title}</span>
                        </Command.Item>
                    {/each}
                </Command.Group>
            </Command.List>
        </Command.Root>
    </Dialog.Content>
</Dialog.Root>
