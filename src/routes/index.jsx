import { createBrowserRouter } from 'react-router-dom'
import App from '~/App'
import TheAccount from '~/TheAccount'

export default createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/account',
    element: <TheAccount />
  }
])
