import{ v4 as uuidv4} from 'uuid'

const obtenerCanal=()=>{
    let canales=localStorage.getItem('canales')
    if(canales){
        return JSON.parse(canales)
    }
    else{
        localStorage.setItem('canales', JSON.stringify([]))
        return []
    }
    }
    
    const crearNuevoCanal=(nuevoCanal)=>{
        nuevoCanal.id= uuidv4()
        let canales=obtenerCanal()
        canales.push(nuevoCanal)
        localStorage.setItem('canales', JSON.stringify(canales))
    }   
    
    
    const obtenerCanalPorId=(id)=>{
        let canales=obtenerCanal()
        let canal=canales.find(canal=>canal.id==id)
        return canal
    }
    export {obtenerCanal,crearNuevoCanal,obtenerCanalPorId}