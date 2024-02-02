import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Components/Home/Home'
import CreateData from '../Components/CreateData/CreateData'

const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/'   element={<Home />} />
        <Route path='/add' Component={CreateData}/>
      </Routes>
    </div>
  )
}

export default UserRoutes
