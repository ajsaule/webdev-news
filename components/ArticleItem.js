import styles from '../styles/Article.module.css'
import Link from 'next/link'

function ArticleItem({ article }) {
  return (
    <Link href="/articles/[id]" as={`/articles/${article.id}`}>
      <div className={styles.card}>
        <h2>{article.title} &rarr;</h2>
        <p>{article.excerpt}</p>
      </div>
    </Link>
  )
}

export default ArticleItem
