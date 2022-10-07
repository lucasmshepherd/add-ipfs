import useSWR from 'swr'

import styles from '../styles/components/discord.module.sass'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Online() {
  const { data, error } = useSWR('/api/discord-online', fetcher)
  const rows = []
  console.log(data)
//  const members = data.members



  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.article}>
      <h2 className={styles.title}>Members Online</h2>
      <ul className={styles.members}>
        {rows}
      </ul>
    </div>
  )
}