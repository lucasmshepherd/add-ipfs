import Parser from "rss-parser"

export const FEEDS = [
  {
    slug: "crimethinc-blog",
    title: "Crimeth Inc.",
    url: "https://crimethinc.com/feed",
  },
  /*{
    slug: "cointelegraph-blog",
    title: "Coin Telegraph",
    url: "https://cointelegraph.com/rss",
  },*/
  {
    slug: "itsgoingdown-blog",
    title: "It's Going Down",
    url: "https://itsgoingdown.org/feed",
  },
  {
    slug: "anarchistnews-blog",
    title: "Anarchist News",
    url: "https://anarchistnews.org/rss.xml",
  },
  {
    slug: "bitcoinmagazine-blog",
    title: "Bitcoin Magazine",
    url: "https://bitcoinmagazine.com/.rss/full/",
  }
]

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}