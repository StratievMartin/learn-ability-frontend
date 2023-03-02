import { Carousel } from '@mantine/carousel'
import { useMediaQuery } from '@mantine/hooks'
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
} from '@mantine/core'
import { Link } from 'react-router-dom'
const useStyles = createStyles((theme) => ({
  card: {
    height: '500px',
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}))

function Card({ id, title, description }) {
  const { classes } = useStyles()
  const img =
    'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${img})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {id}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <p>
          {description}
        </p>
      </div>
      <Link to={`courses/${id}`}>
        <Button variant="white" color="dark">
          More about the course
        </Button>
      </Link>
    </Paper>
  )
}

export function CardsCarousel({ data }) {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: '2px' }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  )
}
