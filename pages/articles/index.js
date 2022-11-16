import ArticleList from '../../components/ArticleList'

function Articles({ articles }) {
  return <ArticleList articles={articles} />
}

export default Articles

// getStaticProps - fetch at build time SSG
// getServerSideProps - fetch data on every request
// getStaticPaths - dynamically generate paths based on data we are fetching

// getWhateverProps needs to always be in router
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
