import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Components/Home'

const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route />
      </Routes>
    </div>
  )
}

export default UserRoutes
