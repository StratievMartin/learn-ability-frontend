import { createStyles, Container, Group, ActionIcon } from '@mantine/core'
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
} from '@tabler/icons-react'
import Logo from '../common/components/Logo.js'
import './footer.css'

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: '120px',
        borderTop: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}))

const AppFooter = () => {
    const { classes } = useStyles()

    return (
        <div className={`${classes.footer}`}>
            <Container className={classes.inner}>
                <Logo />
                <Group
                    spacing={0}
                    className={classes.links}
                    position="right"
                    noWrap
                >
                    <ActionIcon size="lg">
                        <IconBrandTwitter size="20px" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size="20px" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size="20px" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    )
}
export default AppFooter
