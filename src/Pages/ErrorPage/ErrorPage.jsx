import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
import { GiExitDoor } from "react-icons/gi";
const ErrorPage = () => {
  return (
    <div>
        <h2 >Pagina no existente</h2>
        <h2>Error (404)</h2>
        <Link to={'/home'} className='Link'>Menu Principal <GiExitDoor/> </Link>
    </div>
  )
}

export default ErrorPage