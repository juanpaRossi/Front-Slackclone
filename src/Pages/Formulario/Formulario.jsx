import React from 'react'
import NewWorkSpace from '../../Componentes/crearNuevoEspacio/NewWorkSpace'
import './form.css'
const Formulario = () => {
  return (
    <div>
        <h2 className='nuevoEdT'>Crear nuevo Entorno de Trabajo</h2>
        <h4>Completa el siguiene formulario</h4>
        <div className='form'>
        <NewWorkSpace/>
        </div>
    </div>
  )
}

export default Formulario