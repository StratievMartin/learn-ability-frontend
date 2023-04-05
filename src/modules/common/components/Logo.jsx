import { Group } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <Group spacing={10} display="flex">
        <img src="/la-logo.svg" width="20px" alt="" />
        <p>Learn Ability</p>
      </Group>
    </Link>
  )
}
