import { createContext, useEffect , useState} from 'react';
import axios from "axios"
const MagasinProcheContext = createContext();

function MagasinProvider(props){
    
    const [magasin, setMagasin] = useState([])
    const [idClient, setIdClient] = useState()
    useEffect(() => {
        if(idClient != undefined)
        (async () => {
            let response = await axios.get(`http://localhost:8080/api/client/consult/${idClient}`)
            await setMagasin(response.data)
        })();
    }, [idClient])
    return(
        
        <MagasinProcheContext.Provider value={{magasin,idClient,setIdClient}}>
            {props.children}
        </MagasinProcheContext.Provider>
        )
    } 

export default MagasinProcheContext
export {MagasinProvider}



