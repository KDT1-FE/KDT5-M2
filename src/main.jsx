import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '~/routes'
import { Provider } from 'react-redux'
import store from '~/assets/data/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
