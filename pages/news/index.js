// /news/
import Link from 'next/link'

const news = () => {
  return (
    <h1>
        Welcome to News Page /new/
        <br />
        <hr />
        <Link href="/news/:something">News Detail</Link>
    </h1>
  )
}

export default news