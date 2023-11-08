import Link from "next/link"
import React from "react"
import styles from "./header.module.css"

export const TheHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <h3>Home</h3>
        </Link>
        <Link href="/about">
          <h3>About</h3>
        </Link>
        <Link href="/blog">
          <h3>Blog</h3>
        </Link>
        <Link href="/grid">
          <h3>Grid</h3>
        </Link>
      </div>
    </header>
  )
}
