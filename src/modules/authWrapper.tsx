import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveUser } from '../store/auth/actions'

const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser) {
      console.log('local', storedUser)

      dispatch(saveUser(storedUser))
    }
  }, [dispatch])

  return <>{children}</>
}

export default AuthWrapper
