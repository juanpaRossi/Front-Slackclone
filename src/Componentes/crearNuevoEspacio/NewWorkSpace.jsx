import React, { useState } from 'react'
import './formNewWS.css'
import { crearWorkspace, obtenerWorkspaces } from '../data'
import { useNavigate } from 'react-router-dom'
const NewWorkSpace = () => {

    const navigation = useNavigate()

    const errorNavigate = useNavigate()
    const handleError = () => {
        errorNavigate(-1)
    }

    const [crear, setCrear] = useState('')
    const handeCrearChange = (e) => {
        setCrear(e.target.value)
    }

    const [crear1, setCrear1] = useState('')
    const handeCrearChange1 = (e) => {
        setCrear1(e.target.value)
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        const formulario = new FormData(event.target)
        const nombreWS = formulario.get('workSpace')
        const nombreCanal = formulario.get('canal')


        const nuevoWorkspace = {
            name: nombreWS,
            canales: [
                {
                    name: nombreCanal,

                }
            ]
        }
        crearWorkspace(nuevoWorkspace)
        console.log(obtenerWorkspaces())
        navigation('/workspace')



    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name_workSpace">Nombre del WorkSpace</label>
                <input id='name_workSpace' placeholder=' * CAMPO OBLOGATORIO' name='workSpace' value={crear} onChange={handeCrearChange} />

                <label htmlFor="name_canal">Nombre del Canal</label>
                <input id='name_canal' placeholder=' * CAMPO OBLOGATORIO' name='canal' value={crear1} onChange={handeCrearChange1} />

                <button type='submit' disabled={crear.trim() === '' || crear1.trim() === ''} >Crear</button>
                <button type='button' onClick={handleError}>Cancelar</button>
            </form>
            <div>

            </div>
        </div>
    )
}

export default NewWorkSpace