import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderMegaMenu } from '../components/parts/Header'
import { getAllCourses } from '../services/courseService'

function Home() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getAllCourses().then((res) => {
      setCourses(res.data)
    })
  }, [])

return (
    <div>
      <HeaderMegaMenu></HeaderMegaMenu>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <Link to="courses">
        <button>Create</button>
      </Link>

      <div>
        {courses.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id}>
            <p> {course.id}</p>
            <p> {course.title}</p>
            <p> {course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
