import { useRouter } from 'next/router'
import Layout from '../../components/MyLayout.js'

function Post(props) {

  return (
    <Layout>
      <p>{props.post.name}</p>
      <p>This is the blog post content.</p>
    </Layout>
  )
}

Post.getInitialProps = async (context)=>{
  console.log(context.query.id);
  const {id} = context.query;
  const res = await fetch("https://api.tvmaze.com/shows/"+id);
  const data = await res.json()
  return {
    post: data
  }
}

export default Post;
