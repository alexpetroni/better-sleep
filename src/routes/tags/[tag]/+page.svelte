<script lang="ts">
    import { siteConfig } from "$lib/config/site";
    import PostCard from "$lib/components/blog/PostCard.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>#{data.tag} - {siteConfig.name}</title>
</svelte:head>

<div class="container mx-auto py-10 max-w-2xl px-4 md:px-0">
    <h1 class="text-3xl font-bold mb-8">Posts tagged with "#{data.tag}"</h1>
    {#if data.posts.length > 0}
        <div class="flex flex-col">
            {#each data.posts as post}
                <PostCard {post} />
            {/each}
        </div>
    {:else}
        <p class="text-muted-foreground">No posts found with this tag.</p>
    {/if}
</div>
