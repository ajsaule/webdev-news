import { useRouter } from 'next/router'
import Link from 'next/link'

import { server } from '../../config/index'

import styles from '../../styles/Article.module.css'

function ArticleDetails({ article, comments }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Link href="/articles">Go Back</Link>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <div>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div className={styles.card} key={comment.id}>
            <h4>{comment.name}</h4>
            <p>Email: {comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleDetails

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  const params = articles.map((article) => ({
    params: { id: article.id.toString() },
  }))

  return {
    paths: params,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const articleRes = await fetch(`${server}/api/articles/${params.id}`)
  const commentsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  )

  const article = await articleRes.json()
  const comments = await commentsRes.json()

  return {
    props: {
      article,
      comments,
    },
  }
}

// The below are data fetching methods:
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles = await res.json()

//   const params = articles.map((article) => ({
//     params: { id: article.id.toString() },
//   }))

//   return {
//     paths: params,
//     fallback: true,
//   }
// }

// export const getStaticProps = async ({ params }) => {
//   const articleRes = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   )
//   const commentsRes = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
//   )

//   const article = await articleRes.json()
//   const comments = await commentsRes.json()

//   return {
//     props: {
//       article,
//       comments,
//     },
//   }
// }
