import React, { useState } from 'react'
import { GiExitDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Mensajes = () => {
    const [textarea, setTextarea] = useState('')
    const handleSubmitmsj = (e) => {
        e.preventDefault()

    }
    localStorage.setItem('mensajes', JSON.stringify(textarea))

    const mostrarME = localStorage.getItem('mensajes')
    return (
        <div>
            <div>
                <span>

                </span>
            </div>
            <div className='Mensajes'>
                <form onSubmit={handleSubmitmsj} className='formMensaje'>
                    <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} className='menInput'></textarea>
                    <button type='submit' className='butMsj'>Enviar</button>
                </form>
                <span>        <Link to={'/home'} className='link_work'><GiExitDoor />  </Link>
                </span>

            </div>
        </div>
    )
}

export default Mensajes