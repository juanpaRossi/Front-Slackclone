import React, { useState } from 'react'
import MisEntornos from '../../Componentes/entornosDeTrabajo/MisEntornos'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    
  return (
    <div className='screen'>
        <h1>Bienvenido a SLack_CL@ne</h1>
        <MisEntornos/>
        <div className='newWork'>
        <Link to={'/formnewworkspace'}>
        <button  className='botonCrear'>Crear Nuevo Entorno de Trabajo</button>

        </Link>

        </div>
        
    </div>
  )
}

export default Home