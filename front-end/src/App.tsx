import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './assets/pages/HomePage'
import UserLogin from './assets/pages/UserLogin'
import UserProfile from './assets/pages/UserProfile'
import Screen4 from './assets/pages/Screen4'
import RequestPage from './assets/pages/RequestPage'
import SwapRequest from './assets/pages/SwapRequest'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<UserLogin/>}/>
       <Route path='/userprofile' element={<UserProfile/>}/>
       <Route path='/userphoto' element={<Screen4/>}/>
       <Route path='/requestpage' element={<RequestPage/>}/>
       <Route path='/swaprequest' element={<SwapRequest/>}/>

    </Routes>
  )
}

export default App