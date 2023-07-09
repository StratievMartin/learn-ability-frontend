import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseContentList from '../../../modules/course/CourseContentList'
import LectureDetails from '../../../modules/course/components/LectureDetails'
import {
  getCourse,
  deleteCourse,
  addCourse,
  updateCourse,
} from '../../../services/courseService'
import { Button, Flex, Select, TextInput } from '@mantine/core'
import { getAllKeywords } from '../../../services/keywordsService'
import TextEditor from '../../common/components/TextEditor'

const ModifyCourse = () => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    price: '',
    lectures: [],
    keyword: '',
  })
  const [keywords, setKeywords] = useState([])
  const params = useParams()
  const [error, setError] = useState(false)

  useEffect(() => {
    getAllKeywords().then((res) => {
      const mapped = res.data.map((kwd) => ({
        value: kwd.id,
        label: kwd.title,
      }))
      setKeywords(mapped)
    })
    if (params.id) {
      getCourse(params.id).then((res) => {
        setCourse((prevCourse) => ({
          ...prevCourse,
          ...res.data,
        }))
      })
    }
  }, [params.id])

  const deleteCourseHandler = async (id) => {
    await deleteCourse(id).then((res) => {
      console.log(res)
    })
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      updateCourseHandler(params.id)
    } else {
      addCourseHandler()
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target
    setCourse((prev) => ({ ...prev, [name]: value }))
    setError(false)
  }

  const handleSelect = (e) => {
    setCourse((prev) => ({
      ...prev,
      keyword: e,
    }))
  }

  const addCourseHandler = async () => {
    try {
      await addCourse(course)
    } catch (err) {
      setError(err.message)
    }
  }

  const updateCourseHandler = async (id) => {
    try {
      await updateCourse(id, course)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDescriptionChange = (value) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      description: value,
    }))
  }

  return (
    <div>
      <Flex align="baseline" gap={20}>
        <h2>{course.title}</h2>
        <div>
          {course?.lectures && <LectureDetails lectures={course?.lectures} />}
          <p
            onClick={() => deleteCourseHandler(course.id)}
            style={{ color: 'red', cursor: 'pointer' }}
          >
            X
          </p>
        </div>
      </Flex>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <form onSubmit={onFormSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <TextInput
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
            <label htmlFor="price">Price</label>
            <TextInput
              onChange={onInputChange}
              value={course.price}
              type="text"
              name="price"
              id="price"
              placeholder="Price..."
              required
            />
          </div>
          <div>
            <label htmlFor="keyword">Keyword</label>
            <Select
              placeholder="Pick one"
              name="keyword"
              onChange={handleSelect}
              data={keywords}
            />
          </div>

          {course.description && (
            <div>
              <label htmlFor="description">Description</label>
              <TextEditor
                value={course.description}
                onChange={handleDescriptionChange}
              />
            </div>
          )}
          {error ? <span style={{ color: 'red' }}>{error}</span> : ''}
          <div>
            <Button type="submit">Save</Button>
          </div>
        </form>
        <CourseContentList />
      </div>
    </div>
  )
}

export default ModifyCourse
