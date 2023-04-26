import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import MainPage from './page/Home/mainPage'
import Header from './components/common/header'
import Footer from './components/common/footer'
import DetailPage from './page/Detail/detailPage'
import AboutPage from './page/About/aboutPage'

import './scss/App.scss'

const Layout = () =>{
  return(
    <div >
      <Header/>
        <Outlet />
      <Footer />
    </div>
  )
}


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/movie/:id' element={<DetailPage/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
};

export default App
