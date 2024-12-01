import AppFooter from '../footer/Footer';
import AppRoutes from '../../routes/Routes';
import AppHeader from '../header/Header';
import { Box, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';

const Layout = () => {
    const [colorScheme, setColorScheme] = useState('dark');
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
        <div>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    theme={{ colorScheme: colorScheme }}
                    withGlobalStyles
                    withNormalizeCSS
                >
                    <AppHeader />

                    <Box maw="1200px" my="0" mx="auto">
                        <AppRoutes />
                    </Box>

                    <AppFooter />
                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    );
};
export default Layout;
