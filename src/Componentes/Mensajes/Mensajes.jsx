import React, { useState } from 'react'
import { GiExitDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Mensajes = () => {
    const [textarea, setTextarea] = useState('')
    const[mensaje,setMensaje]=useState('')

    React.useEffect(()=>{
        const mensajeLocal=localStorage.getItem('mensaje');
        if(mensajeLocal){
            setMensaje(mensajeLocal);
        }
    },[])

    const handleGuardar=(e)=>{
        e.preventDefault();
        localStorage.setItem('mensaje',textarea);
        setMensaje(textarea)
    }
    
  
    return (
        <div>
            <div>
                <span>

                </span>
            </div>
            <div className='Mensajes'>
                <form className='formMensaje'>
                    <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} className='menInput'></textarea>
                    <button onClick={handleGuardar} className='butMsj'>Enviar</button>
                </form>
                <span>        <Link to={'/home'} className='link_work'><GiExitDoor />  </Link>
                </span>

            </div>
        </div>
    )


}
export default Mensajes