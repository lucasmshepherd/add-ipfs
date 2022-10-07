import { FEEDS } from "../lib/rss"
import styles from '../styles/components/feed.module.sass'


export default function Feed() {


  return (
    <div className={styles.article}>
      <h2>RSS Feeds</h2>
      <ul className={styles.feeds}>
        {FEEDS.map((feed) => (
          <li key={feed.slug}>
            <a key={feed.slug} href={`/feeds/${feed.slug}`}>
              {feed.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}