// routing www.mydomain/news
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/news1">news 1</Link>
        </li>
        <li>
          <Link href="/news/news2">news 2</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
