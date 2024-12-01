import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Articles from '../pages/articles'
import Article from '../pages/article'
import Profile from '../pages/profile'
import Course from '../pages/course'
import Courses from '../pages/courses'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import ForgotPassword from '../pages/auth/forgotPassword'
import NotFound from '../pages/error/404'
import ServerError from '../pages/error/500'
import ModifyCourse from '../modules/course/components/ModifyCourse'
import ModifyArticle from '../modules/course/components/ModifyArticle'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="course/:id" element={<Course />} />
      <Route path="courses/kwd/:id" element={<Courses />} />
      <Route path="courses/modify/:id?" element={<ModifyCourse />} />
      <Route path="articles/modify/:id?" element={<ModifyArticle />} />
      <Route path="articles" element={<Articles />} />
      <Route path="article/:id" element={<Article />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="404" element={<NotFound />} />
      <Route path="500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
