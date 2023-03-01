import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses/:id" element={<Course />} />
        <Route path="courses" element={<Course />} />
      </Routes>
    </div>
  )
}

export default App
