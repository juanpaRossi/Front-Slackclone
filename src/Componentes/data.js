import{ v4 as uuidv4} from 'uuid'
const workspace_inicial = [
    
    {
        id: 1,
        name: '',
        description: '',
        img:'',
        channels: [
            {
                id: '',
                name: '',
                messages: [
                    {
                        id: '',
                        author: '',
                        text: ''
                    },
                ]
            },
        ]
    }

] 
const obtenerWorkspaces=()=>{
let workspaces=localStorage.getItem('workspaces')
if(workspaces){
    return JSON.parse(workspaces)
}
else{
    localStorage.setItem('workspaces', JSON.stringify([]))
    return []
}
}

const crearWorkspace=(nuevoWorkspace)=>{
    nuevoWorkspace.id= uuidv4()
    let workspaces=obtenerWorkspaces()
    workspaces.push(nuevoWorkspace)
    localStorage.setItem('workspaces', JSON.stringify(workspaces))
}   


const obtenerWorkspacePorId=(id)=>{
    let workspaces=obtenerWorkspaces()
    let workspace=workspaces.find(workspace=>workspace.id==id)
    return workspace
}

export{obtenerWorkspaces,crearWorkspace,obtenerWorkspacePorId}