import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/default/Home'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Pnf from './components/default/Pnf'
import ProtectedRoute from './PrivateRoute/ProtectedRoute'
import { ToastContainer } from 'react-toastify'
import Create from './components/default/Create'
import Update from './components/default/Update'

function App(props) {
  return (
    <BrowserRouter>
          <Header/>
          <ToastContainer/>
          <Routes>
              <Route element={<ProtectedRoute/>} >
                  <Route path={`/`} element={<Home/>} />
                  <Route path={`/create`} element={<Create/>} />
                  <Route path={`/update/:bookId`} element={<Update/>} />
              </Route>
              <Route path={`/login`} element={<Login/>} />
              <Route path={`/register`} element={<Register/>} />
              <Route path={`/*`} element={<Pnf/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App