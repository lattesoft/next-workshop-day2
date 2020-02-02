import Layout from '../components/MyLayout.js'

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
      {posts.map((post,index)=>{
      return <li>{post.title}</li>
      })}
      </ol>
    </Layout>
  )
}
