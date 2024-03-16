import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter } from 'react-router-dom'
import QueryContextProvider from './context/QueryProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
 
    <AuthProvider>
      <BrowserRouter>
      <QueryContextProvider>
        <App/>
      </QueryContextProvider>
      </BrowserRouter>
    </AuthProvider>
 
)
