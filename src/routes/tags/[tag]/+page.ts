export async function load({ params }) {
    const posts = import.meta.glob("/src/posts/*.md", { eager: true });
    const tag = params.tag;

    const taggedPosts = Object.entries(posts)
        .map(([path, file]) => {
            const slug = path.split("/").at(-1)?.replace(".md", "");
            const metadata = file.metadata;
            return { slug, ...metadata };
        })
        .filter((post) => post.tags && post.tags.includes(tag))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        tag,
        posts: taggedPosts,
    };
}
