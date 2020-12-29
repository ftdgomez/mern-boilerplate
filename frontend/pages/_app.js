import 'tailwindcss/tailwind.css'
import { UserContext, UserProvider } from '../context/userContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </UserProvider>
  ) 
}

export default MyApp
