import React, { useEffect, useState } from 'react'
import { getAllCourses } from '../services/courseService'
import { CardsCarousel } from '../modules/common/components/Carousel'
import { ArticlesCardsGrid } from '../modules/common/components/CardsGrid'
import HeaderLanding from '../modules/header/components/HeaderLanding'

export default function Home() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getAllCourses().then((res) => {
      setCourses(res.data)
    })
  }, [])

  return (
    <div>
      <HeaderLanding/>
      <CardsCarousel data={courses} />
      <ArticlesCardsGrid />
    </div>
  )
}
