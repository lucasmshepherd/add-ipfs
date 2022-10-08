import { FEEDS, getFeed } from "../../lib/rss";
import { format } from "date-fns";
import Link from "next/link";
import Widget from '../../components/widget.js'
import Container from '../../components/container.js'

import styles from '../../styles/components/feed.module.sass'

export default function Feed({ feed, items }) {
  return (
    <Container>
      <Widget type="rss" title="single_rss_feed_" icon="globe">
        <div className={styles.article}>
          <h2>{feed.title}</h2>
          <span className={styles.back}><Link href="/dapp">back</Link></span>
          <div className={styles.content}>
            {items.map((item) => (
              <a
                key={item.link}
                className={styles.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.title}>{item.title}</div>
                <div className={styles.date}>{format(new Date(item.isoDate), "PPP")}</div>
              </a>
            ))}
          </div>
        </div>
      </Widget>
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const feed = FEEDS.find((feed) => feed.slug === params.slug);
  const detailedFeed = await getFeed(feed.url);

  return {
    props: {
      feed,
      items: detailedFeed.items,
    },
    revalidate: 1,
  };
}