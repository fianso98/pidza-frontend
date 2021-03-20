import { createContext, useEffect , useState} from 'react';
import axios from "axios"
const ResConsultContext = createContext();

function ResConsultProvider(props){
    
    const [consult, setConsult] = useState([])
    const [responsableId , setResponsableId] = useState()
    useEffect(() => {
        if(responsableId != undefined)
       
            (async () => {
                let response = await  axios.get(`http://localhost:8080/api/responsable/getcommandes/${responsableId}`)
                await setConsult(response.data)
                    
                
              })();
        
    }, [responsableId])
    return(
        
        <ResConsultContext.Provider value={{consult,responsableId , setResponsableId}}>
            {props.children}
        </ResConsultContext.Provider>
        )
    } 

export default ResConsultContext
export {ResConsultProvider}


