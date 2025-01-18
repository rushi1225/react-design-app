
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Header from './component/Header'

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
