import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Center,
  Box,
} from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: '32px',
  },

  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}))

// const { classes } = useStyles()
const ForgotPassword = () => {
  return (
    <Container size={460} my={30}>
      <Title className={classes.title} align="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Your email" placeholder="me@mantine.dev" required />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Link
            to="/login"
            color="dimmed"
            size="sm"
            className={classes.control}
          >
            <Center inline>
              <IconArrowLeft size={'20px'} stroke={1.5} />
              <Box ml={5}>Back to the login page</Box>
            </Center>
          </Link>
          <Button className={classes.control}>Reset password</Button>
        </Group>
      </Paper>
    </Container>
  )
}
export default ForgotPassword
