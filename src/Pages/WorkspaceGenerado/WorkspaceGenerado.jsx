import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerWorkspacePorId } from '../../Componentes/data'
import './wsGenerado.css'
import Canal from '../Canal/Canal';
import Mensajes from '../../Componentes/Mensajes/Mensajes';
const WorkspaceGenerado = () => {
    const [menuCanales,setMenuCanales]=useState(false)

    const {workspace_id}=useParams()
    const workspace= obtenerWorkspacePorId(workspace_id)

  return (
    <div>
        <div>
        <h1>{workspace.name} </h1>
        <h2 className='canalesmenu'  onClick={()=>setMenuCanales(!menuCanales)}
         >Canales</h2> 
         <button className='agregarCanal'> + canal</button>
        <span>{menuCanales&& <Canal channels={workspace.canales}  /> } </span>
        <div>
        </div>
        <Mensajes/>
        </div>


    </div>
  )
}

export default WorkspaceGenerado