import styles from "./Meditation.module.css"

type Props = {
  slug: string
  title: string
  duration: number
  tags: string[]
}

const BASE_VIDEO_URL = "https://coaching.healthygamer.gg"

export function formatTagLabel(tag: string) {
  if (tag.toLowerCase() === "adhd") {
    return tag.toUpperCase()
  }
  return tag.charAt(0).toUpperCase() + tag.slice(1)
}

export default function Meditation({ slug, title, duration, tags }: Props) {
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

  return (
    <a href={getMeditationUrl(slug)} className={styles.meditation}>
      <div
        className={styles.thumbnail}
        style={{ backgroundImage: `url(${getThumbnailUrl(slug)})` }}
      >
        <div className={styles.duration}>{formatDuration(duration)}</div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <div
            key={tag}
            className={styles.tag}
            style={{ background: `rgba(var(--${tag}-rgb), 0.2)`, color: `var(--${tag})` }}
          >
            {formatTagLabel(tag)}
          </div>
        ))}
      </div>
    </a>
  )
}
