import { createContext, useEffect , useState} from 'react';
import axios from "axios"
const ConsultContext = createContext();

function ConsultProvider(props){
    
    const [exempleConsult, setExempleConsult] = useState([])
    useEffect(() => {
         axios.get(`http://localhost:8080/api/client/consult`)
        .then(res => {
          
          setExempleConsult(res.data)
        })
        
    }, [])
    return(
        
        <ConsultContext.Provider value={exempleConsult}>
            {props.children}
        </ConsultContext.Provider>
        )
    } 

export default ConsultContext
export {ConsultProvider}



