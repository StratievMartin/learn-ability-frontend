import { Group } from '@mantine/core'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <Group spacing={10} display="flex">
        <img src="/la-logo.svg" width="20px" alt="" />
        <p>LearnAbility</p>
      </Group>
    </Link>
  )
}
export default Logo
