import React,{useContext, useState} from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import Menu from '../components/Menu'
import LoginContext from "../Context/LoginContext"
import ConsultContext from '../Context/ConsultContext'
import Magasin from '../components/Magasin'
import CommandeContext from '../Context/CommandeContext'
import Pizza from '../components/Pizza'
import '../styles/commande.css'
import axios from 'axios'
function Commande() {
    const exempleConsult = useContext(ConsultContext)
    const commande =useContext(CommandeContext)
    const LoggedInContext =useContext(LoginContext)
    const [status, setStatus] = useState()
    const [adress,setAdress]=useState(null)
    const history = useHistory()
    function handleCommande(){
        const FinalCommande ={
            "add_commande":{
                        "commande_etat": "pret",
                        "commande_prix": null,
                        "magasins": {
                            "magasin_id": commande.magasin        
                        }
            },
              "add_commande_pizza":commande.pizza,
            "add_commande_boisson":commande.boisson,
            "add_commande_client":[{
                
                "clients":{
                    "client_id":commande.client
                },
                "adress_livraison":adress
            }
            ]
        }
        axios.post('http://localhost:8080/api/client/createcommande',FinalCommande)
        .then(res =>{
            setStatus(res.status)/* 200 success */
          })
          history.push('/')
    }



    if(LoggedInContext.loggedIn != true)
    return(<Redirect to="/" />)
    return (
        <div className="commande">
            <Menu />
            <div className="commande__content">
            <h1>passer commande</h1>
            <p>List de la commande </p>
            {commande.pizza.map((item ,key)=>(
                <div>
                    <p>type pizza : {item.pizzas.pizza_type}</p>
                    <p>prix $ : {item.pizzas.pizza_prix}</p>
                    <p>nombre pizza :{item.nombre_pizza}</p>
                    <p> ingrediant : <br/>
                        {item.pizzas.ingrediants.map(item => (<>
                        <p>nom ingrediant : {item.ingrediant_nom}</p>
                        <p>prix : {item.ingrediant_prix}</p>
                        </>))}
                    </p>
                    
                </div>
            ))
            
            
            }
            {commande.boisson.map((item ,key)=>(
                <div>
                    <p>nom boisson : {item.boissons.boisson_nom}</p>
                    <p>prix $ : {item.boissons.boisson_prix}</p>
                    <p>nombre boisson : {item.nombre_boisson}</p>
                    
                    
                </div>
            ))
            
            
            }
            {console.log("pizza",commande.pizza)}
            {console.log("boisson",commande.boisson)}
            {console.log("magasin",commande.magasin)}
            {console.log("client",commande.client)}
            <p>specifier le lieu de livraison si vous voulez le recevoir ailleurs</p>
            <input type="text" name='livraison' onChange={(e)=>setAdress(e.target.value)}/>
            <button className="commande__button" onClick={()=>handleCommande()}>confirmer</button>
            </div>
        </div>
    )
}

export default Commande
