import { AppHeader } from '../header/Header'
import AppFooter from '../footer/Footer'
import Routes from '../../routes/Routes'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useState } from 'react'
import { useHotkeys } from '@mantine/hooks'

export default function Layout() {
  const [colorScheme, setColorScheme] = useState('light')
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  useHotkeys([['mod+J', () => toggleColorScheme()]])

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
          <Routes />
          <AppFooter />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  )
}
