import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { theme } from '~/components/Theme'
import router from '~/routes'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)
