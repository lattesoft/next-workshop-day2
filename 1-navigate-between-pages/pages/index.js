import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href="/about">
        Go to About Page
      </Link>
      <p>Hello Next.js</p>
    </div>
  )
}
