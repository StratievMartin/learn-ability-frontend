import { useEffect, useState } from 'react'
import { getAllCourses } from '../services/courseService'
import { getAllKeywords } from '../services/keywordsService'
import CardsCarousel from '../modules/common/components/Carousel'
import HeaderLanding from '../modules/header/components/HeaderLanding'
import { Link } from 'react-router-dom'
import { Group } from '@mantine/core'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    getAllCourses().then((res) => {
      setCourses(res.data)
    })
    getAllKeywords().then((res) => {
      setKeywords(res.data)
    })
  }, [])

  return (
    <div>
      <HeaderLanding />
      Keywords:
      {keywords &&
        keywords.map((kwd) => {
          return (
            <Group key={kwd.id} spacing={5}>
              <Link to={`courses/kwd/${kwd.id}`}>{kwd.title}</Link>
            </Group>
          )
        })}
      <CardsCarousel data={courses} />
    </div>
  )
}
export default Home
