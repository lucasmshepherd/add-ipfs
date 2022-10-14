import useSWR from 'swr'
import styles from '../styles/components/discord.module.sass'
import parse from 'html-react-parser'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function News() {
  const { data, error } = useSWR('/api/discord-latest', fetcher)
  const rows = []
  let item

  function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a rel="noreferrer nofollowe" target="_blank" href="' + url + '">' + url + '</a>';
    })
  }

  if(data) {
    for (var i = 0; i < data.length; i++) {
      if(data[i].content.length < 2) { continue; }
      item = data[i].content
      item = urlify(item)
      item = "<p>" + item + "</p><hr class='divider'/>"
      item = parse(item)
      rows.push(item)
    }
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div> 

  return (
    <div className={styles.article}>
      <h2 className={styles.title}>Announcements</h2>

      <div>{rows}</div>
    </div>
  )
}