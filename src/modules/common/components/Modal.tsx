import { useDisclosure } from '@mantine/hooks'
import { Modal, Group, Button } from '@mantine/core'
import LectureDetails from '../../course/components/LectureDetails'

const UiModal = ({ lecture }: any) => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Modal opened={opened} onClose={close} title="TITLE 123" centered>
        Modal content
        <LectureDetails lecture={lecture} />
      </Modal>

      <Group position="center">
        <Button onClick={open}>Edit</Button>
      </Group>
    </>
  )
}
export default UiModal
