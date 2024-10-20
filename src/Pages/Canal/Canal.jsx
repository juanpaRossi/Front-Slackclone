import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RenderMensajes from '../../Componentes/RenderMensajes/RenderMensajes'
const Canal = ({ channels }) => {
  const [mensajesCanal, setmensajesCanal] = useState(false)
  return (
    <div>
      <div className='cajaWork'>
        {channels.map((channel) => {
          return (

            <div key={channel.id = uuidv4()} className='work'>
              <h3>{channel.name}
              </h3>

                <h4 className='ingresar' onClick={() => setmensajesCanal(!mensajesCanal)}>
                  Ingresar
                </h4>
                {mensajesCanal && <RenderMensajes />}

              

            </div>

          )

        })}
      </div>
    </div>
  )
}

export default Canal