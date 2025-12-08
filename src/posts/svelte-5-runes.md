---
title: "Deep Dive into Svelte 5 Runes"
description: "Everything you need to know about the new reactivity model in Svelte 5."
date: "2025-12-08"
tags: ["svelte", "javascript", "frontend"]
author: "yusuf-cengiz"
---

# Svelte 5 Runes

Svelte 5 introduces a new way to handle reactivity called "Runes". This shift brings explicit reactivity to the framework, making code easier to understand and refactor.

## Why Runes?

In Svelte 4, reactivity was often magical (e.g. `let count = 0;` becomes reactive). While simple, this magic could be confusing outside of components (`.svelte` files). Runes solve this by making reactivity universal.

## Key Runes

- `$state`
- `$derived`
- `$effect`
- `$props`

## Example

```svelte
<script>
    let count = $state(0);
    let double = $derived(count * 2);

    function increment() {
        count += 1;
    }
</script>

<button onclick={increment}>
    Count: {count}, Double: {double}
</button>
```

Explicit 👏 Reactivity 👏.
