import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'
import DeatilPage from './pages/DetailPage'
 

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

function App() {  
  return (
    <div className='app'>
      <Routes>
        <Route path="/"element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DeatilPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    
      
    </div>
  )
}

export default App
