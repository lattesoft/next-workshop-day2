import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

const PostLink = props => (
  <li>
    <Link href={escape("/post/"+props.title)}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {

  fetch("https://api.tvmaze.com/search/shows?q=naruto").then((res)=>{
    console.log(res);
  });
  

  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}