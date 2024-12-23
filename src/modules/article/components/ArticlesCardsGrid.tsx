import {
    createStyles,
    SimpleGrid,
    Card,
    Image,
    Text,
    Container,
    AspectRatio,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const mockdata = [
    {
        title: 'Top 10 places to visit in Norway this summer',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 18, 2022',
    },
    {
        title: 'Best forests to visit in North America',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 27, 2022',
    },
    {
        title: 'Hawaii beaches review: better than you think',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 9, 2022',
    },
    {
        title: 'Mountains at night: 12 best locations to enjoy the view',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 12, 2022',
    },
];

const useStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
}));

const ArticlesCardsGrid = ({ articles }) => {
    const { classes } = useStyles();

    return (
        <Container py="xl">
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {articles &&
                    articles.map((article) => (
                        <Link key={article.id} to={`/article/${article.id}`}>
                            <Card
                                key={article.title}
                                p="md"
                                radius="md"
                                className={classes.card}
                            >
                                <AspectRatio ratio={1920 / 1080}>
                                    <Image src={article.imgUrl} />
                                </AspectRatio>

                                <Text
                                    color="dimmed"
                                    size="xs"
                                    transform="uppercase"
                                    weight={700}
                                    mt="md"
                                >
                                    {article.date}
                                </Text>

                                <Text className={classes.title} mt={5}>
                                    {article.title}
                                </Text>
                            </Card>
                        </Link>
                    ))}
            </SimpleGrid>
        </Container>
    );
};
export default ArticlesCardsGrid;
