// routing www.mydomain/news/something-important
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  console.log(router.query.newsid);
  return <h1>Detail Page</h1>;
}

export default DetailPage;
