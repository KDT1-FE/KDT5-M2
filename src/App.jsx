import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './page/Home/Home'
import DetailPage from './page/Detail/detailPage'
import './scss/App.scss'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/movie/:id' element={<DetailPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
