import useSWR from 'swr'

import styles from '../styles/components/discord.module.sass'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Online() {
  const rows = []
  const { data, error } = useSWR('/api/discord-online', fetcher)
  if(data) {
    const members = data.members

    for (let i = 0; i < members.length; i++) {
      rows.push(<li key={i}><span style={{backgroundImage: "url(" + members[i].avatar_url + ")"}}></span>{members[i].username}</li>);
    }
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.article}>
      <h3 className={styles.title}>Anarchists Online</h3>
      <ul className={styles.members}>
        {rows}
      </ul>
    </div>
  )
}