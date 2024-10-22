import React, { useState } from 'react'
import './newCanal.css'
import { crearNuevoCanal, obtenerCanal } from '../canal'
const NewCanal = () => {
    const [crear, setCrear] = useState('')
    
    const handeCrearChange = (e) => {
        setCrear(e.target.value)
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        const formulario = new FormData(event.target)
        const nombreCanal = formulario.get('canal')


        const nuevoCanal = {
            
            
                
                    name: nombreCanal,
                    data:new Date()
                
            
        }
        crearNuevoCanal(nuevoCanal)
        console.log(obtenerCanal())
        



    }


    return (
        <div>
            <form className='crearCanal' onSubmit={handleSubmit}>
                <label htmlFor="nuevoCanal" ></label>
                <input type="text" id='nuevoCanal' name='canal' value={crear} onChange={handeCrearChange} />
                <button type='submit' className=''>Crear</button>

            </form>
        </div>
    )
}

export default NewCanal