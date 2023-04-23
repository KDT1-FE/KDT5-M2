import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route } from 'react-router-dom'
import Error from './Error'
import Spinner from './Spinner'
import Content from './Content'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <ErrorBoundary FallbackComponent={Error}>
              <Content />
            </ErrorBoundary>
          </Suspense>
        }
      />
    </Routes>
  )
}
