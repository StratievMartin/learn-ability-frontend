import { Carousel } from '@mantine/carousel'
import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import CourseCard from '../../course/components/CourseCard'

const CardsCarousel = ({ data }) => {
  const theme = useMantineTheme()
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const slides = data.map((item) => (
    <Carousel.Slide key={item.id}>
      <CourseCard {...item} />
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
export default CardsCarousel
