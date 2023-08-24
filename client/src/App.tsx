import { AppProvider } from '@/providers/app'
import { AppRouter } from '@/routes/AppRouter'
import { Header } from './features/ui/Header'

function App() {
  return (
    <AppProvider>
      <Header />
      <AppRouter />
    </AppProvider>
  )
}

export default App
