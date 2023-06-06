import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Stack,
} from '@mantine/core'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../../services/authService'

const Register = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const onInputChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    console.log(user)
  }

  const signUpHandler = async () => {
    try {
      const result = await signUp(user)
      console.log('result: ', result)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome to LearnAbility!</Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Link to="/login" size="sm" component="button">
          Login here
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack spacing="sm">
          <TextInput
            onChange={onInputChange}
            name="firstName"
            label="First name"
            placeholder="First name"
            required
          />
          <TextInput
            onChange={onInputChange}
            name="lastName"
            label="Last name"
            placeholder="Last name"
            required
          />
          <TextInput
            onChange={onInputChange}
            name="email"
            label="Email"
            placeholder="Email"
            required
          />
          <PasswordInput
            onChange={onInputChange}
            name="password"
            label="Password"
            placeholder="Your password"
            required
          />
        </Stack>

        {error ? <Text color="red.7">{error}</Text> : ''}
        <Button
          onClick={() => {
            signUpHandler()
          }}
          fullWidth
          mt="xl"
        >
          Sign up
        </Button>
      </Paper>
    </Container>
  )
}
export default Register
