// /news/news-id(dynamic)
// /news/something-else will something-else page and not [newsId] page

import { useRouter } from 'next/router'

const DetailNews = () => {
    const router = useRouter();
    console.log(router)
    const newsId = router.query.newsId;
    console.log(newsId)
  return (
    <h1>
        Welcome to dynamic page
    </h1>
  )
}

export default DetailNews