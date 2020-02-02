import Layout from '../components/MyLayout.js'
import Link from 'next/link';

const posts = [
  {
    title: "Lorem Ipsum is simply dummy text of the printing",
    content: "Hellooooooooo"
  },
  {
    title: "ever since the 1500s, when an unknown printer took",
    content: "Hellooooooooo"
  },
  {
    title: "remaining essentially unchanged",
    content: "Hellooooooooo"
  }
];

export default function Index() {
  return (
    <Layout>
      <p>Hello Next.js</p>
      <ol>
      {
        posts.map((post,index)=>{
          return <li key={index}>
            <Link href={`/post?title=${post.title}`}>
              <a>{post.title}</a>
            </Link>
            {/* <Link href={"/post?title="+post.title}>{post.title}</Link> */}
            </li>
        })
      }
      </ol>
    </Layout>
  )
}
