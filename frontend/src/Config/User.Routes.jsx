import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Components/Home'
import Details from '../Components/Details'
import CreateData from '../Components/CreateData'
import EditModule from '../Components/EditModule'

const UserRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/userdetail' Component={Details}/>
        <Route path='/add' Component={CreateData}/>
        <Route path='/edit' Component={EditModule} />
      </Routes>
    </div>
  )
}

export default UserRoutes
