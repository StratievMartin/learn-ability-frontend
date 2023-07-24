import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  Flex,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import UiInput from '../common/components/Input.js'
import ThemeSwitch from '../common/components/ThemeSwitch.js'
import Logo from '../common/components/Logo.js'
//
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '../../store/auth/actions'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  hiddenTablet: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

const AppHeader = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const { classes, theme } = useStyles()
  const dispatch = useDispatch()

  const user = useSelector((state: object) => state.user)

  const handleLogout = () => {
    localStorage.removeItem('user')
    dispatch(clearUser())
  }

  return (
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }} maw="1200px" m="0 auto">
          <Group
            sx={{ height: '100%' }}
            spacing={5}
            className={classes.hiddenMobile}
          >
            <Logo className={classes.link} />

            <Link to="articles" className={classes.link}>
              Articles
            </Link>
            <Link to="profile" className={classes.link}>
              Profile
            </Link>
            <Link to="/courses/modify" className={classes.link}>
              Create a course
            </Link>
          </Group>
          <Group className={classes.hiddenTablet}>
            <UiInput />
          </Group>
          {!user.user ? (
            <Group className={classes.hiddenMobile}>
              <Link to="login" style={{ color: 'black' }}>
                <Button variant="default">Log in</Button>
              </Link>
              <Link to="register" style={{ color: 'white' }}>
                <Button>Sign up</Button>
              </Link>
              <ThemeSwitch />
            </Group>
          ) : (
            <Flex align={'center'}>
              <p>{user?.user?.email}</p>
              <Button onClick={handleLogout}>Logout</Button>
            </Flex>
          )}

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Link to="/" className={classes.link}>
            <Logo className={classes.link} />
          </Link>
          <Link to="articles" className={classes.link}>
            Articles
          </Link>
          <Link to="profile" className={classes.link}>
            Profile
          </Link>
          <Link to="/courses/modify">Create a course</Link>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position="center" grow pb="xl" px="md">
            <Link to="profile" className={(classes.link, classes.hiddenMobile)}>
              Profile
            </Link>
            {!user.user ? (
              <>
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
              </>
            ) : (
              <Flex align={'center'}>
                <p>{user?.user?.email}</p>
                <Button onClick={handleLogout}>Logout</Button>
              </Flex>
            )}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
export default AppHeader
