import React,{useContext, useEffect, useState} from 'react'
import CommandeContext from '../Context/CommandeContext'
import LoginContext from '../Context/LoginContext'
import '../styles/boisson.css'
function Boisson(props) {
    const {nom , photo , prix} = props
    const commande =useContext(CommandeContext)

    const [nombreBoisson, setNombreBoisson] = useState(1)
    const [stateBoisson, setStateBoisson] = useState(false)
    useEffect(() => {
        
            setNbrBoisson(nom,nombreBoisson)
            
    }, [nombreBoisson])
    function handleClick(){
        const boissonList={
            "boissons":{
                "boisson_nom": nom,
                "boisson_prix": prix
            },
            "nombre_boisson": nombreBoisson
        }
        setStateBoisson(true)
        if(!commande.boisson.filter(e => e.boissons.boisson_nom === boissonList.boissons.boisson_nom).length > 0){
            const boissonToAdd = commande.boisson
            boissonToAdd.push(boissonList)
            commande.setBoisson(boissonToAdd)
        }
    }
    //update number boisson
    function setNbrBoisson(nomBoisson,nbr){
        const boissonToAdd = commande.boisson
        
        for (var i = 0; i < boissonToAdd.length; i++) {
            if (boissonToAdd[i].boissons.boisson_nom === nomBoisson) {
                boissonToAdd[i].nombre_boisson = nbr
              return;
            }
          }
        commande.setBoisson(boissonToAdd)
      }
  //handle sum
  function handleSum(){
    
        setNombreBoisson((prevNbr)=>prevNbr+1)
      
  }
  //handle minus
  function handleMinus(){
    setNombreBoisson((prevNbr)=>prevNbr-1)
  }
    const LoggedInContext =useContext(LoginContext)
    if(LoggedInContext.loggedIn != true)
    return (
        <div className="boisson">
            <p>nom de boisson : {nom}</p>
            <img src={window.location.origin +`/images/${photo}`} style={{"height":60,"width":60}} />
            <p>prix : $ {prix}</p>
        </div>
    )
    else
    return(
        <div className="boisson">
            <p>nom de boisson : {nom}</p>
            <img src={window.location.origin +`/images/${photo}`} style={{"height":60,"width":60}}/>
            <p>prix : $ {prix}</p>
            <button onClick={()=>handleClick()}>ajouter boisson</button>
            {stateBoisson ?
            <div className="boisson__button">
            <button className="boisson__buttonLeft" onClick={()=>handleSum()}>+</button>
            <p>{nombreBoisson}</p>
            <button className="boisson__buttonRight" onClick={()=>{if(nombreBoisson>1)handleMinus()}}>-</button>
            </div>
            : null}
        </div>
    )
}

export default Boisson
