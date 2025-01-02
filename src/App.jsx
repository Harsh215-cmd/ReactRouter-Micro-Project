import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import View from './View'
import Details from './Details'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='view' element={<View />} />
      <Route path='detail/:UserId' element={<Details />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
