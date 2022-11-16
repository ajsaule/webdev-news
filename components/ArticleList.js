import ArticleItem from '../components/ArticleItem'

const ArticleList = ({ articles }) =>
  articles.map((article) => <ArticleItem article={article} key={article.id} />)

export default ArticleList
