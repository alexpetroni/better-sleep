<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { formatDate } from "$lib/utils";

    let { post } = $props();
</script>

<article class="flex flex-col gap-2 border-b py-6 last:border-b-0">
    <div class="flex items-center gap-2 text-sm text-muted-foreground">
        <time datetime={post.date}>{formatDate(post.date)}</time>
        {#if post.tags}
            <div class="flex gap-1">
                {#each post.tags as tag}
                    <Badge variant="secondary" class="font-normal">{tag}</Badge>
                {/each}
            </div>
        {/if}
    </div>
    <a href="/blog/{post.slug}" class="group">
        <h2 class="text-2xl font-bold tracking-tight group-hover:underline">
            {post.title}
        </h2>
        <p class="text-muted-foreground line-clamp-2 mt-2">
            {post.description}
        </p>
    </a>
</article>
