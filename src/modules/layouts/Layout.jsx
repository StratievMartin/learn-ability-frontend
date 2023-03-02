import { AppHeader } from '../header/Header'
import AppFooter from '../footer/Footer'
import Routes from '../../routes/Routes'

export default function Layout() {
  return (
    <div>
      <AppHeader />
      <Routes />
      <AppFooter />
    </div>
  )
}
