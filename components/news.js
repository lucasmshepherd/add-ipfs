import useSWR from 'swr'

import styles from '../styles/components/discord.module.sass'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function News() {
  const { data, error } = useSWR('/api/discord-latest', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div> 

  return (
    <div className={styles.article}>
      <h2 className={styles.title}>Latest Announcement</h2>
      <div>{data[0].content}</div>
    </div>
  )
}