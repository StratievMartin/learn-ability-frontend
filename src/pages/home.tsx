import { useEffect, useState } from 'react'
import { getAllCourses } from '../services/courseService'
import { getAllKeywords } from '../services/keywordsService'
import CardsCarousel from '../modules/common/components/Carousel'
import HeaderLanding from '../modules/header/components/HeaderLanding'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    getAllCourses().then((res) => {
      setCourses(res.data)
    })
    getAllKeywords().then((res) => {
      console.log(res)

      setKeywords(res.data)
    })
  }, [])

  return (
    <div>
      <HeaderLanding />
      Keywords:
      {keywords &&
        keywords.map((k) => {
          return <span key={k.id}> {k.title} </span>
        })}
      <CardsCarousel data={courses} />
    </div>
  )
}
export default Home
