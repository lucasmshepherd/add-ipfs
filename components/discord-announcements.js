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

  return (
    <>
      <div className={styles.article}>
        {/*<h2 className={styles.title}>Announcements</h2>*/}
        <div><p>Hi, my name is Brian Ness.  I recently was upset because I fired my lead developer and most of the community left with him.  Turns out nobody would invest in me which is why I need to take advantage of others. When I realized this I immediately raised taxes, cleared the DAO wallet and then I drained the treasury a few days later.  You should know even with all this I still took a loss thanks to Dream and my lack of intelligence.</p>
        <p>In case you would like to get in touch with me here is some info of mine:</p>

        <ul>
          <li><b>Name</b>: Brian Ness</li>
          <li><b>Last know phone</b>: (725) 200-6859</li>
          <li><b>Addresses found</b>:</li>
          <li>201 Hay Street Suite 401-B Fayetteville, NC 28301</li>
          <li>301 Hay Street Fayetteville, NC 28301</li>
          <li>https://techtacsol.com/contact-us</li>
          <li><b>Emails</b>:</li>
          <li>ness.brian1@outlook.com</li>
          <li>0xethgod0x@protonmail.com</li>
          <li>0xethgod0x@gmail.com</li>
          <li><b>Socials</b>:</li>
          <li>https://twitter.com/NAZZ_NEGG</li>
          <li>https://twitter.com/NAZZNEGGFLEyRH</li>
          <li>https://twitter.com/OdaETH</li>
          <li>https://twitter.com/OdaNobu_ETH</li>
        </ul>

        </div>
      </div>
    </>
  )
}
