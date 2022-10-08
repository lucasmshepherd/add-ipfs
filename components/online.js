import useSWR from 'swr'

import styles from '../styles/components/discord.module.sass'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export async function GetDiscordData() {

  const { data, error } = useSWR('/api/discord-online', fetcher)

  return {
    paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
    fallback: false,
  };
}

export default function Online() {
  const rows = []
  const { data, error } = useSWR('/api/discord-online', fetcher)
  if(data) {
    const members = data.members

    for (let i = 0; i < members.length; i++) {
      rows.push(<li key={i}>{members[i].username}</li>);
    }
  }

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