import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useState,useEffect } from 'react'


const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
)

const Index = (props) => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ol>
        {props.posts.map((post)=>(
          <>
              <PostLink id={post.show.id} /> 
              {post.show.name}
          </>
        ))}
      </ol>
    </Layout>
  )
}

Index.getInitialProps = async ()=>{
  const res = await fetch("https://api.tvmaze.com/search/shows?q=naruto");
  const data = await res.json()
  return {
    posts: data
  }
}

export default Index;
