import React from 'react'
import './newCanal.css'
const NewCanal = () => {



    return (
        <div>
            <form className='crearCanal' >
                <label htmlFor="nuevoCanal" ></label>
                <input type="text" id='nuevoCanal' />
                <button type='submit' >Crear</button>
            </form>
        </div>
    )
}

export default NewCanal