import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import Spinner from './components/Spinner'

import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary FallbackComponent={Error}>
              <Home />
            </ErrorBoundary>
          </Suspense>
        }
      />
    </Routes>
  )
}
