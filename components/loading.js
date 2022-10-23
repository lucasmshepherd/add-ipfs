// style
import styles from '../styles/components/loading.module.sass'

export default function Loading() {
  return (
    <>
      <div className={styles.loader}>
        <div className={styles.anim}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 279.01 279"><path d="M139.5,0C62.46,0,0,62.45,0,139.5s62.46,139.5,139.5,139.5,139.51-62.46,139.51-139.5S216.55,0,139.5,0Zm-23.72,149.59l-26.35,61.07h-27.68l29.4-68.09h27.68l-3.05,7.02Zm-13.54-32.73l30.24-70.07h14.27l30.16,70.07H102.23Zm86.91,93.8l-15.37-35.37-13.95-32.72h28.14l29.3,68.09h-28.11Z"/></svg>
        </div>
      </div>
    </>
  )
}