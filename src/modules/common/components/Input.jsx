import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons';

export default function UiInput() {
  return (
    <Input
      icon={<IconSearch />}
      placeholder="Search"
      radius="lg"
    />
  );
}