import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()

  return (
    <>
      <h1>
        banana: {router.query.banana} 
        id: {router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  )
}
