import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import MovieSearch from '~/MovieSearch'
import router from '~/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <MovieSearch />
    </React.StrictMode>
  </RouterProvider>
)
