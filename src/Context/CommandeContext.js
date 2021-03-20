import { createContext, useEffect , useState} from 'react';
import axios from "axios"
const CommandeContext = createContext()    

function CommandeProvider(props){
    
    const [pizza, setPizza] = useState([])
    const [boisson, setBoisson] = useState([])
    const [client, setClient] = useState()
    const [magasin, setMagasin] = useState()
    const [ingrediant, setIngrediant] = useState([])
   
    return(
        
        <CommandeContext.Provider value={{pizza, setPizza,boisson, setBoisson,client, setClient,magasin, setMagasin,ingrediant, setIngrediant}}>
            {props.children}
        </CommandeContext.Provider>
        )
    } 

export default CommandeContext
export {CommandeProvider}