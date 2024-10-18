import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
import { GiExitDoor } from "react-icons/gi";
const ErrorPage = () => {
  return (
    <div>
        <h1 className='errorPage'>Pagina no existente</h1>
        <h2>Error (404)</h2>
        <Link to={'/home'} className='Link'>Menu Principal <GiExitDoor/> </Link>
    </div>
  )
}

export default ErrorPage