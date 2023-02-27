import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../services/api/axiosInstance'

function Home() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios.get('courses.json').then((res) => {
      const { data } = res

      console.log(data)
      setCourses(data)
    })
  }, [])

  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>

      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <p> {course.id}</p>
            <p> {course.name}</p>
            <p> {course.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
