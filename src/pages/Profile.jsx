import React from 'react'
import { CourseProgressTracker } from '../modules/course/components/ProgressTrackers/CourseProgressTracker'
import { MonthlyProgressTracker } from '../modules/course/components/ProgressTrackers/MonthlyProgressTracker'

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <MonthlyProgressTracker />
      <CourseProgressTracker />
    </div>
  )
}
