import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'

import Navbar from './components/Navbar.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const App = () => {
  return (
    <>

      <HashRouter>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element=
          {
          <ProtectedRoute>  
            <Dashboard />
          </ProtectedRoute>
          } /> 

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
