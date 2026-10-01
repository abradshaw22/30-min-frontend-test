<script lang="ts" module>
  export function formatTagLabel(tag: string) {
    if (tag.toLowerCase() === "adhd") {
      return tag.toUpperCase()
    }
    return tag.charAt(0).toUpperCase() + tag.slice(1)
  }
</script>

<script lang="ts">
  type Props = {
    slug: string
    title: string
    duration: number
    tags: string[]
  }
  let { slug, title, duration, tags }: Props = $props()

  const BASE_VIDEO_URL = "https://coaching.healthygamer.gg"

  function formatDuration(duration: number) {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  function getThumbnailUrl(slug: string) {
    return `https://cdn.healthygamer.gg/${slug}/thumbnails/360.jpg`
  }

  function getMeditationUrl(slug: string) {
    return `${BASE_VIDEO_URL}/guide/meditations/${slug}`
  }
</script>

<a href={getMeditationUrl(slug)} class="meditation">
  <div class="thumbnail" style:background-image={`url(${getThumbnailUrl(slug)})`}>
    <div class="duration">{formatDuration(duration)}</div>
  </div>
  <div class="title">{title}</div>
  <div class="tags">
    {#each tags as tag}
      <div
        class="tag"
        style:background={`rgba(var(--${tag}-rgb), 0.2)`}
        style:color={`var(--${tag})`}
      >
        {formatTagLabel(tag)}
      </div>
    {/each}
  </div>
</a>

<style>
  .meditation {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    text-decoration: none;
    color: inherit;
  }

  .meditation::before {
    content: "";
    position: absolute;
    inset: -8px;
    z-index: -1;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: opacity 150ms;
  }

  .meditation:hover::before {
    opacity: 1;
  }

  .thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .duration {
    position: absolute;
    right: 12px;
    bottom: 8px;
    background: rgba(0, 0, 0, 0.75);
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 100%;
    font-weight: 400;
  }

  .title {
    font-size: 18px;
    line-height: 120%;
    font-weight: 700;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tag {
    background: rgba(255, 255, 255, 0.1);
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    line-height: 100%;
    font-weight: 700;
  }
</style>
