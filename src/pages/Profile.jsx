import React from 'react'
import { Link } from 'react-router-dom'
import { CourseProgressTracker } from '../modules/course/components/ProgressTrackers/CourseProgressTracker'
import { MonthlyProgressTracker } from '../modules/course/components/ProgressTrackers/MonthlyProgressTracker'

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/courses">Create a course</Link>
      <MonthlyProgressTracker />
      <CourseProgressTracker />
    </div>
  )
}
