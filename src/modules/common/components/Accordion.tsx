import { ActionIcon, AccordionControlProps, Box, Flex } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';
import UiModal from './Modal';

const AccordionControl = (props: AccordionControlProps) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Accordion.Control {...props} />

            <ActionIcon size="lg">
                <IconX size="1rem" color="red" />
            </ActionIcon>
        </Box>
    );
};

function Demo({ lectures }: any) {
    console.log(lectures);

    return (
        <Accordion chevronPosition="left" maw={400} mx="auto">
            {lectures.length > 0 &&
                lectures.map((lecture: any) => {
                    return (
                        <Accordion.Item
                            key={lecture.title}
                            value={`${lecture.title}`}
                        >
                            <AccordionControl>{lecture.title}</AccordionControl>

                            <Accordion.Panel>
                                <Flex
                                    justify={'space-between'}
                                    align={'baseline'}
                                >
                                    <p>{lecture.description}</p>

                                    <UiModal lecture={lecture} />
                                </Flex>
                            </Accordion.Panel>
                        </Accordion.Item>
                    );
                })}
        </Accordion>
    );
}
export default Demo;
