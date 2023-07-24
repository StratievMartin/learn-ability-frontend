import './App.css'
import Layout from './modules/layouts/Layout'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/auth/store'
import AuthWrapper from './modules/authWrapper'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AuthWrapper>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </AuthWrapper>
      </Provider>
    </div>
  )
}

export default App
