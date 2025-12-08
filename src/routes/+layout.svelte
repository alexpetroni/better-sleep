<script lang="ts">
	import "./layout.css";
	import Header from "$lib/components/app/Header.svelte";
	import Footer from "$lib/components/app/Footer.svelte";
	import { ModeWatcher } from "mode-watcher";
	import { siteConfig } from "$lib/config/site";

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="{siteConfig.name} RSS Feed"
		href="/rss.xml"
	/>
	<link
		rel="sitemap"
		type="application/xml"
		title="Sitemap"
		href="/sitemap.xml"
	/>
</svelte:head>

<ModeWatcher />
<div class="relative flex min-h-screen flex-col bg-background">
	<Header />
	<div class="flex-1 flex flex-col">
		{@render children()}
	</div>
	<Footer />
</div>
