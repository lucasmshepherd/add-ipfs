import useSWR from 'swr'
import styles from '../styles/components/discord.module.sass'
import parse from 'html-react-parser'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function News() {
  const { data, error } = useSWR('/api/discord-latest', fetcher)
  const rows = []
  let item, date

  function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a rel="noreferrer nofollowe" target="_blank" class="glitchme" data-text="Click Here" href="' + url + '">' + 'Click Here' + '</a>';
    })
  }

  if(data) {
    for (var i = 0; i < data.length; i++) {
      if(i == 5) { break }
      if(data[i].content.length < 2) { continue; }
      item = data[i].content
      date = data[i].timestamp
      date = new Date(date).toDateString()
      item = urlify(item).replace(/(?:\r\n|\r|\n)/g, '<br>')
      //item = RegExp(item)
      item = "<h3>" + date + "</h3><p>" + item + "</p><hr class='divider'/>"
      item = parse(item)
      rows.push(item)
    }
  }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div> 

  return (
    <>
      <div className={styles.article}>111111111111111111
        {/*<h2 className={styles.title}>Announcements</h2>*/}
        <div>{rows}</div>
      </div>
    </>
  )
}