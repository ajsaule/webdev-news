import { useRouter } from 'next/router'
import styles from '../../styles/Article.module.css'

function ArticleDetails({ article, comments }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <div>
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
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    paths: articles.map((article) => ({
      params: { id: article.id.toString() },
    })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const articleRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
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
