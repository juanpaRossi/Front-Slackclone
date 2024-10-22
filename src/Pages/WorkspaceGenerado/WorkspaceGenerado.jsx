import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerWorkspacePorId } from '../../Componentes/data'
import './wsGenerado.css'
import Canal from '../Canal/Canal';
import Mensajes from '../../Componentes/Mensajes/Mensajes';
import NewCanal from '../../Componentes/crearCanal/NewCanal';
const WorkspaceGenerado = () => {
  const [menuCanales, setMenuCanales] = useState(false)
  const [formCanales, setformCanales] = useState(false)
  const { workspace_id } = useParams()
  const workspace = obtenerWorkspacePorId(workspace_id)
 

  return (
    <div className='padre'>
      <div>
        <h1>{workspace.name} </h1>
        
        <h2 className='canalesmenu' onClick={() => setMenuCanales(!menuCanales)}
        >Canales</h2>
        <button className='agregarCanal' onClick={() => setformCanales(!formCanales)}> + canal</button>
        <span>{formCanales && <NewCanal />} </span>
        <div className='canalesCreados' >
          <span>
            {menuCanales && <Canal channels={workspace.canales} />  }
            
  
          </span>
          <span>
          </span>
        </div>
        <div>
      
        </div>
 
        <div className='mensajesWOrkspace'>
        <Mensajes />
        </div>
      </div>


    </div>

  )
}

export default WorkspaceGenerado