import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../../services/authService'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveUser } from '../../store/auth/actions'

const Login = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  //
  const dispatch = useDispatch()

  const onInputChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const signInHandler = async () => {
    try {
      const res = await signIn(user)
      localStorage.setItem('user', JSON.stringify(res.data))
      dispatch(saveUser(res.data))
      console.log(res)

      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome back!</Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Link to="/register" size="sm" component="button">
          Create account
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          name="email"
          onChange={onInputChange}
          label="Email"
          placeholder="you@mantine.dev"
          required
        />
        <PasswordInput
          name="password"
          onChange={onInputChange}
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Link to="/forgot-password">Forgot password?</Link>
        </Group>

        {error ? <Text color="red.7">{error}</Text> : ''}

        <Button onClick={signInHandler} fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  )
}
export default Login
