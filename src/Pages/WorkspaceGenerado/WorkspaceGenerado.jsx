import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerWorkspacePorId } from '../../Componentes/data'
import './wsGenerado.css'
import Canal from '../Canal/Canal';
import Mensajes from '../../Componentes/Mensajes/Mensajes';
import NewCanal from '../../Componentes/crearCanal/NewCanal';
const WorkspaceGenerado = () => {
  const [menuCanales, setMenuCanales] = useState(false)
  const [nuevoCanal, setnuevoCanal] = useState(false)

  const { workspace_id } = useParams()
  const workspace = obtenerWorkspacePorId(workspace_id)

  return (
    <div>
      <div>
        <h1>{workspace.name} </h1>
        <h2 className='canalesmenu' onClick={() => setMenuCanales(!menuCanales)}
        >Canales</h2>
        <button className='agregarCanal' onClick={() => setnuevoCanal(!nuevoCanal)}> + canal</button>
        <span className='menuNuevoCanal'>{nuevoCanal && <NewCanal />} </span>
        <span className='canalesCreados'>{menuCanales && <Canal channels={workspace.canales} />} </span>
        <div>
        </div>
        <Mensajes />
      </div>


    </div>
  )
}

export default WorkspaceGenerado