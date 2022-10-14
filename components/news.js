import useSWR from 'swr'
import styles from '../styles/components/discord.module.sass'
import parse from 'html-react-parser'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function News() {
  const { data, error } = useSWR('/api/discord-latest', fetcher)
  const rows = []
  let item
  if(data) {
    for (var i = 0; i < data.length; i++) {
      if(data[i].content.length < 2) { continue; }
      item = "<p>" + data[i].content + "</p><hr class='divider'/>"
      item = parse(item)
      rows.push(item)
    }
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div> 

  return (
    <div className={styles.article}>
      <h2 className={styles.title}>Latest Announcement</h2>

      <div>{rows}</div>
    </div>
  )
}