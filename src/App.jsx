import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import WorkSpace from './Pages/WorkSpace/WorkSpace'
import WorkspaceGenerado from './Pages/WorkspaceGenerado/WorkspaceGenerado'
import Formulario from './Pages/Formulario/Formulario'

function App() {

  return (
    <>
          <Routes>
    <Route path='' element={<Home/> } />
    <Route path='/home' element={<Home/> } />
    <Route path='workspace' element={<WorkSpace/> } />
    <Route path='/formnewworkspace' element={<Formulario/> }/>
    <Route path='workspace/:workspace_id' element={<WorkspaceGenerado/>}/>
    <Route path='/*' element={<ErrorPage/> }/>
    </Routes>
      
    </>
  )
}

export default App
