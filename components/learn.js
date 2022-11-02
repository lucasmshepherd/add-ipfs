import Image from 'next/image'
import styles from '../styles/components/learn.module.sass'
//import Beznos from '../public/assets/images/beznos.jpg'

export default function Learn(props) {
  let exlink, play, doc
  exlink = (<svg className="icon-xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect y="120" width="15" height="15"/><rect x="15" y="105" width="15" height="15"/><rect x="30" y="90" width="15" height="15"/><rect x="45" y="75" width="15" height="15"/><rect x="60" y="60" width="15" height="15"/><rect x="75" y="45" width="15" height="15"/><rect x="90" y="30" width="15" height="15"/><polygon points="135 0 135 60 120 60 120 30 105 30 105 14.99 75 14.99 75 0 135 0"/></svg>)
  play = (<svg className="icon-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><path d="M0,0V135H135V0H0ZM120,120H30v-15h15v-15h15v-15h15v-15h-15v-15h-15v-15h-15V15H120V120Z"/></svg>)
  doc = (<svg className="icon-doc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><path d="M120,30V15h-15V0H0V135H135V30h-15ZM15,120V15H90v30h30V120H15Z"/></svg>)
  return (
    <>
      <div className={styles.learnbg}><div className={styles.learnbgglitch}>&nbsp;</div></div>
      <h2 className={styles.title}>Anarchist University</h2>
      <ul className={styles.books}>
        <li>
          <a href="https://theanarchistlibrary.org/special/index" rel="noreferrer" target="_blank">
            <span>{exlink} </span><b>The Anarchist Library</b>
          </a>
        </li>
        <li>
          <a href="https://theanarchistlibrary.org/library/the-curious-george-brigade-anarchy-in-the-age-of-dinosaurs.pdf" rel="noreferrer" target="_blank">
            <span>{doc} </span><b>Anarchy in the Age of Dinosaurs</b>
          </a>
        </li>
        <li>
          <a href="https://www.lahaine.org/global/dk2002/swarm_action.htm" rel="noreferrer" target="_blank">
            <span>{exlink} </span><b>A Swarm of Butterflies</b>: A Fierce Defense of Chaos in Direct Action
          </a>
        </li>
        <li>
          <a href="https://web.archive.org/web/20051130232450/http://www.infoshop.org/inews/article.php?story=02%2F08%2F08%2F4834233" rel="noreferrer" target="_blank">
            <span>{exlink} </span><b>The End of Arrogance</b>: Decentralization and Anarchist Organizing
          </a>
        </li>
        <li>
          <a href="https://theanarchistlibrary.org/library/curious-george-brigade-the-inefficient-utopia-or-how-consensus-will-change-the-world.pdf" rel="noreferrer" target="_blank">
            <span>{doc} </span><b>The Inefficient Utopia or How Consensus Will Change the World</b>
          </a>
        </li>
        <li>
          <a href="http://www.originalelf.com/" rel="noreferrer" target="_blank">
            <span>{exlink} </span><b>ELF</b>: Environmental Life Force
          </a>
        </li>
        <li>
          <a href="https://bitcoin.org/bitcoin.pdf" rel="noreferrer" target="_blank">
            <span>{doc} </span><b>Bitcoin</b>: A Peer-to-Peer Electronic Cash System
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=g-dvSPApPgA" rel="noreferrer" target="_blank">
            <span>{play} </span><b>Anarcho-Capitalism Documentary</b>: The Monopoly On Violence
          </a>
        </li>
        <li>
          <a href="https://web.archive.org/web/20040719123958/http://www.blancmange.net/tmh/pdf/jwarren.pdf" rel="noreferrer" target="_blank">
            <span>{doc} </span><b>Equitable Commerce</b>: A New Development of Principles
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=xNYeVT94dUk" rel="noreferrer" target="_blank">
            <span>{play} </span><b>Decentralized Society</b> - DeSoc | Glen Weyl, Puja Ohlhaver, Leon Erichsen | Green Pill #16
          </a>
        </li>
        <li>
          <a href="https://news.bitcoin.com/bitcoin-built-incite-peaceful-anarchy/" rel="noreferrer" target="_blank">
            <span>{exlink} </span><b>Bitcoin was Built to Incite Peaceful Anarchy</b>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=Xb4g8LzcFSI" rel="noreferrer" target="_blank">
            <span>{play} </span><b>Starting with Bankless</b>
          </a>
        </li>
        <li>
          <a href="https://newsletter.banklesshq.com/p/a-bankless-nation-part-i#%C2%A7writers-corner" rel="noreferrer" target="_blank">
            <span>{exlink} </span><b>A Bankless Nation</b> - Part I
          </a>
        </li>
        <li>
          <a href="assets/docs/Decentralized-Society-Whitepaper.pdf" rel="noreferrer" target="_blank">
            <span>{doc} </span><b>Decentralized Society Whitepaper</b>
          </a>
        </li>
      </ul>
    </>
  )
}