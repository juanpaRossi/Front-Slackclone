import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RenderMensajes from '../../Componentes/RenderMensajes/RenderMensajes'
import { obtenerCanal } from '../../Componentes/canal'
const Canal = ({ channels }) => {
  const canales = obtenerCanal()




  return (
    <div className='cajaWork'>
      <div >
        {channels.map((channel) => {
          return (
            <div key={channel.id = uuidv4()} className='work'>
              <h3>{channel.name}
              </h3>
<RenderMensajes />
            </div>
          )
        })}
      </div>
      <div >
        {canales.map((canal) => {
          return (
            <div key={canal.id} className='work'>
              <h3>{canal.name} </h3>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Canal