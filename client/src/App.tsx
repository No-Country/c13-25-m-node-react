import { AppProvider } from '@/providers/app'
import { AppRouter } from '@/routes/AppRouter'

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
