import { AppProviders } from './app/providers'
import { MainLayout } from './app/layouts'
import { HomePage } from './pages/Home'

/**
 * App Component
 * Componente raiz da aplicação
 */
function App() {
  return (
    <AppProviders>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </AppProviders>
  )
}

export default App
