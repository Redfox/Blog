import styles from '@/components/card/styles.module.css'

export function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Vitor Pereira</h2>
      </div>

      <div className={styles.content}>
        <p className={styles.contentText}>Site under contruction 🚧</p>
      </div>
    </div>
  )
}