import React from 'react'
import { obtenerWorkspaces } from '../data'
import { Link } from 'react-router-dom'
import './entornosMenu.css'

const MisEntornos = () => {
    const workSpaces= obtenerWorkspaces()

  return (
    <div>
        <h2 className='misEntornos'>Mis entornos de trabajo</h2>
        <div>
        </div>
        <div className='cajaWork'>
        {workSpaces.map((workSpace)=>{
            return(
                <div key={workSpace.id} className='work'>
                    <h3>{workSpace.name} </h3>
                    <Link to={'/workspace/' + workSpace.id} className='link'>Entrar</Link>
                </div>
            )

        })}
        </div>
    </div>
  )
}

export default MisEntornos