<script>
  let posts;
  let isLoading = false;
  $: isDownLoadCompleted = Array.isArray(posts);

  const delay = (ms) => {
    return new Promise((res) => {
      setTimeout(() => res(), ms);
    });
  };

  async function downloadPosts() {
    isLoading = true;
    await delay(3000);

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      return await res.json();
    } catch (err) {
      throw new Error(err);
    } finally {
      isLoading = false;
    }
  }

  async function handleClick() {
    posts = await downloadPosts();
  }
</script>

{#if !isDownLoadCompleted}
  <button on:click={handleClick}>
    {#if isLoading}
      ...download..
    {:else}
      Download posts
    {/if}
  </button>
{/if}

{#if isDownLoadCompleted}
  <h2>Posts</h2>
  {#each posts as post, i (post.id)}
    <p>{post.title}</p>
  {/each}
{/if}

<style>
  p {
    text-align: left;
  }
</style>
