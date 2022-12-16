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
    slug: "anarchistlibrary-blog",
    title: "Anarchist Library",
    url: "https://theanarchistlibrary.org/feed",
  },
  {
    slug: "freedomnews-blog",
    title: "Freedom News",
    url: "https://freedomnews.org.uk/feed",
  },
  {
    slug: "anarchiststudies-blog",
    title: "Anarchist Studies",
    url: "https://anarchiststudies.org/feed",
  }
]

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}