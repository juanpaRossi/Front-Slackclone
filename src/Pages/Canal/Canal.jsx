import React, { useState } from 'react'
import{ v4 as uuidv4} from 'uuid'
const Canal = ( {channels}) => {
const[canalOpen,setcanalOpen]=useState(false)

  return (
    <div>
         <div className='cajaWork'>
        {channels.map((channel)=>{
            return(
                
                <div key={channel.id=uuidv4()} className='work'>
                    <h3 onClick={()=>setcanalOpen(!canalOpen)}>{channel.name} </h3>
                    <span>{canalOpen && ''} </span>
                </div>

            )

        })}
        </div>
    </div>
  )
}

export default Canal