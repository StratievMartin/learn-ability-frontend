import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core'
import { Link } from 'react-router-dom'

const Register = () => {
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
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl">
          Sign up
        </Button>
      </Paper>
    </Container>
  )
}
export default Register
