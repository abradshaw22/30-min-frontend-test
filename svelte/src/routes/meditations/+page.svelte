<script lang="ts">
  import Meditation from "$lib/Meditation.svelte"

  import { meditations } from "$lib/meditations"
  import { formatTagLabel } from "$lib/Meditation.svelte"

  let selectedTag = $state("All Tags")
  let tags = ["All Tags", ...new Set(meditations.flatMap((meditation) => meditation.tags))]
</script>

<div class="page">
  <div class="filters">
    <select bind:value={selectedTag}>
      {#each tags as tag}
        <option value={tag}>{formatTagLabel(tag)}</option>
      {/each}
    </select>
  </div>

  <div class="meditations">
    {#each meditations as meditation}
      {#if selectedTag === "All Tags" || meditation.tags.includes(selectedTag)}
        <Meditation
          slug={meditation.slug}
          title={meditation.title}
          duration={meditation.duration}
          tags={meditation.tags}
        />
      {/if}
    {/each}
  </div>
</div>

<style>
  .page {
    max-width: 1400px;
    margin: 0 auto;
  }

  .filters {
    margin-bottom: 32px;
  }

  select {
    field-sizing: content;
    width: fit-content;
    appearance: none;
    background: var(--background);
    color: var(--text);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 12px;
    line-height: 120%;
    font-weight: 700;
    cursor: pointer;
  }

  select:focus-visible {
    background: rgba(255, 255, 255, 0.1);
  }

  .meditations {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(352px, 100%), 1fr));
    gap: 24px;
  }
</style>
