import './App.css'
import Layout from './modules/layouts/Layout'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App
