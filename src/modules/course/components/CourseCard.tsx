import { IconEye, IconHeart, IconMessageCircle } from '@tabler/icons-react'
import {
  Card,
  Text,
  Group,
  Center,
  createStyles,
  ActionIcon,
} from '@mantine/core'
import { Link } from 'react-router-dom'
// getStylesRef
const useStyles = createStyles((theme) => ({
  wishlist: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    '&:hover': {
      color: theme.colors.red[6],
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },
  card: {
    position: 'relative',
    height: '300px',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    margin: '20px',
  },

  image: {
    ...theme.fn.cover(),
    // ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: '32px',
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: '16px',
  },

  author: {
    color: theme.colors.dark[2],
  },
}))

interface ImageCardProps {
  id: string
  title: string
  description: string
}

const CourseCard = ({ id, title, description }: ImageCardProps) => {
  const { image, author, views, comments } = {
    image:
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: 'Robert Gluesticker',
    views: 7847,
    comments: 5,
  }
  const { classes, theme } = useStyles()

  return (
    <Link to={`/courses/${id}`}>
      <Card p="lg" shadow="lg" className={classes.card} radius="md">
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={classes.overlay} />

        <div className={classes.content}>
          <div>
            <Text size="lg" className={classes.title} weight={500}>
              {title}
            </Text>

            <Group position="apart" spacing="xs">
              <Text size="sm" className={classes.author}>
                {author}
              </Text>

              <Group spacing="lg">
                <ActionIcon
                  variant=""
                  radius="md"
                  size={36}
                  className={classes.wishlist}
                >
                  <IconHeart
                    size="20px"
                    className={classes.like}
                    stroke={1.5}
                  />
                </ActionIcon>
                <Center>
                  <IconEye
                    size="20px"
                    stroke={1.5}
                    color={theme.colors.dark[2]}
                  />
                  <Text size="sm" className={classes.bodyText}>
                    {views}
                  </Text>
                </Center>
                <Center>
                  <IconMessageCircle
                    size="20px"
                    stroke={1.5}
                    color={theme.colors.dark[2]}
                  />
                  <Text size="sm" className={classes.bodyText}>
                    {comments}
                  </Text>
                </Center>
              </Group>
            </Group>
          </div>
        </div>
      </Card>
    </Link>
  )
}
export default CourseCard
