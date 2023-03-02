import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CourseContentList from '../modules/course/CourseContentList'
import {
  getCourse,
  deleteCourse,
  addCourse,
  updateCourse,
} from '../services/courseService'

export default function Course() {
  const [course, setCourse] = useState({
    id: '',
    title: '',
    description: '',
  })
  const params = useParams()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (params.id) {
      getCourse(params.id).then((res) => setCourse(res.data))
    }
  }, [params.id])

  const deleteCourseHandler = async (id) => {
    await deleteCourse(id).then((res) => {
      console.log(res)
    })
  }
  const onFormSubmit = (e) => {
    e.preventDefault()
  }
  const onInputChange = (e) => {
    setCourse((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
    setError(false)
  }
  const addCourseHandler = async () => {
    await addCourse(course)
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
  }
  const updateCourseHandler = async () => {
    await updateCourse(id, course)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Course</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link to="/">Back to home</Link>
          <form onSubmit={onFormSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                onChange={onInputChange}
                value={course.title}
                type="text"
                name="title"
                id="title"
                placeholder="Title..."
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                onChange={onInputChange}
                value={course.description}
                type="text"
                name="description"
                id="description"
                placeholder="Description..."
                required
              />
            </div>
            {error ? <span style={{ color: 'red' }}>{error}</span> : ''}

            <div>
              <button
                onClick={() =>
                  params.id ? updateCourseHandler() : addCourseHandler()
                }
              >
                Save
              </button>
            </div>
          </form>
          {params.id && (
            <div>
              <p
                onClick={() => deleteCourseHandler(course.id)}
                style={{ color: 'red', cursor: 'pointer' }}
              >
                X
              </p>
            </div>
          )}
        </div>
        <CourseContentList />ƒ
      </div>
    </div>
  )
}