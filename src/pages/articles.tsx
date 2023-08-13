import { useEffect, useState } from 'react'
import ArticlesCardsGrid from '../modules/article/components/ArticlesCardsGrid'
import { getAllArticles } from '../services/articlesServices'

const Articles = () => {
  const [articles, setArticles] = useState()
  useEffect(() => {
    getAllArticles().then((res) => {
      setArticles(res.data)
    })
  }, [])

  return (
    <>
      <ArticlesCardsGrid articles={articles} />
    </>
  )
}
export default Articles
