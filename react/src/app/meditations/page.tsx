"use client"

import styles from "./page.module.css"

import Meditation from "@/lib/Meditation"

import { meditations } from "@/lib/meditations"
import { formatTagLabel } from "@/lib/Meditation"

import { useState } from "react"

let tags = ["All Tags", ...new Set(meditations.flatMap((meditation) => meditation.tags))]

export default function MeditationsPage() {
  const [selectedTag, setSelectedTag] = useState("All Tags")

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedTag(event.target.value)
  }

  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <select className={styles.select} value={selectedTag} onChange={handleChange}>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {formatTagLabel(tag)}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.meditations}>
        {meditations.map((meditation) => {
          if (selectedTag === "All Tags" || meditation.tags.includes(selectedTag)) {
            return (
              <Meditation
                key={meditation.slug}
                slug={meditation.slug}
                title={meditation.title}
                duration={meditation.duration}
                tags={meditation.tags}
              />
            )
          }
        })}
      </div>
    </div>
  )
}
