import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Course from '../pages/Course'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import { NotFound } from '../pages/error/404'
import { ServerError } from '../pages/error/500'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="courses/:id" element={<Course />} />
      <Route path="courses" element={<Course />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="404" element={<NotFound />} />
      <Route path="500" element={<ServerError />} />
    </Routes>
  )
}
