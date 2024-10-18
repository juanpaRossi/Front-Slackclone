import React from 'react'
import { Link } from 'react-router-dom'
import MisEntornos from '../../Componentes/entornosDeTrabajo/MisEntornos'
import './workspace.css'
const WorkSpace = () => {

  return (
    <div>
        <div>
        <MisEntornos/>
        </div>
        <div className='link'>
        <Link to={'/home'} className='Link'>Volver al Menu Principal  </Link>
        </div>

    </div>

  )
}

export default WorkSpace