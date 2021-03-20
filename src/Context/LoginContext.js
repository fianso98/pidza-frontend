import { createContext, useEffect , useState} from 'react';
import axios from "axios"
const LoginContext = createContext()    

function LoginProvider(props){
    
    const [loggedIn, setLoggedIn] = useState(false)
    const [clientId, setClientId] = useState()
    return(
        
        <LoginContext.Provider value={{loggedIn, setLoggedIn ,clientId ,setClientId}}>
            {props.children}
        </LoginContext.Provider>
        )
    } 

export default LoginContext
export {LoginProvider}