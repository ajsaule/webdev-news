import styles from '../styles/Article.module.css'
import Link from 'next/link'

function ArticleItem({ article, key }) {
  return (
    <Link href="/articles/[id]" as={`/articles/${article.id}`} key={key}>
      <div className={styles.card}>
        <h2>{article.title} &rarr;</h2>
        <p>{article.body}</p>
      </div>
    </Link>
  )
}

export default ArticleItem
