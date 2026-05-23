import { CustomCursor } from '@/shared/ui'
import { Navbar, Footer } from '@/widgets'

/**
 * Main Layout
 * Layout principal da aplicação com Navbar e Footer
 */
export function MainLayout({ children }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
