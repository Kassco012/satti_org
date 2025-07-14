
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { LanguageProvider } from './contexts/LanguageContext' 

function App() {
  return (
    <LanguageProvider> {/* Добавьте если не добавлено в main.jsx */}
      <div className="max-w-screen-2xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </LanguageProvider>
  )
}


export default App