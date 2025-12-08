<script lang="ts">
    import { page } from "$app/state";
    import { Button } from "$lib/components/ui/button";
    import ArrowLeft from "@lucide/svelte/icons/arrow-left";
</script>

<svelte:head>
    <title>404: Page Not Found</title>
</svelte:head>

<div
    class="flex h-[calc(100vh-150px)] flex-col items-center justify-center gap-2 text-center"
>
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">404</h1>
    <p
        class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
    >
        Sorry, we couldn't find the page you're looking for.
    </p>
    <div class="mt-4">
        <Button href="/" class="gap-2">
            <ArrowLeft class="h-4 w-4" />
            Go back home
        </Button>
    </div>
</div>
