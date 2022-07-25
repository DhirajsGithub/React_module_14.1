// out-domin.com/
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();
  console.log(router)
  return (
    <h1>
      Welcome to Home page /
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/news/something-else">Something else</Link></li>
      </ul>
    </h1>
  )
}
