import React ,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import Magasin from '../components/Magasin'
import Menu from '../components/Menu'
import ConsultContext from '../Context/ConsultContext'
import LoginContext from '../Context/LoginContext'
import MagasinProcheContext from '../Context/MagasinProcheContext'
import '../styles/mainPage.css'
function MainPage() {
    const exempleConsult = useContext(ConsultContext)
    const loginContext = useContext(LoginContext)
    const magasinProcheContext = useContext(MagasinProcheContext)
    const [showAll, setShowAll] = useState(true)

    async function handleMagasinPlusProche(){
        setShowAll(false)
        if(loginContext.loggedIn)
        await magasinProcheContext.setIdClient(loginContext.clientId)
    }

    return (
        <div className="mainPage">
            <Menu />
            
            {showAll ?
            <>
            <p className="mainPage__title">Liste des Magasins</p>
            {exempleConsult.map((item,key) => (
                
                
                <Magasin 
                id={item.magasin_id}
                nom={item.magasin_nom} 
                wilaya={item.magasin_wilaya}
                adress={item.magasin_adress}
                responsable={item.responsables.responsable_nom+" "+item.responsables.responsable_prenom}
                key={key}
                />
                
                ))
                
            }
            {loginContext.loggedIn && 
            <a href="#" onClick={()=>handleMagasinPlusProche()} >afficher le magasin le plus proch</a>}
            </>
            : <>
            {magasinProcheContext.magasin.length > 0 && 
            magasinProcheContext.magasin.map((item,key) => (
                
                
                <Magasin 
                id={item.magasin_id}
                nom={item.magasin_nom} 
                wilaya={item.magasin_wilaya}
                adress={item.magasin_adress}
                responsable={item.responsables.responsable_nom+" "+item.responsables.responsable_prenom}
                key={key}
                />
                
                ))}
                <a href="#" onClick={()=>setShowAll(true)} >show all</a>
            </>
            }
            
            
        </div>
    )
}

export default MainPage
