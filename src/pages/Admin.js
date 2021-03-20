import axios from 'axios'
import React,{useContext, useEffect, useState} from 'react'
import Menu from '../components/Menu'
import ResConsultContext from '../Context/ResConsultContext'

function Admin() {
    const [responseData, setResponseData] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)
    const [consultation, setConsultation] = useState([])
    const resconsultContext =useContext(ResConsultContext)
    async function handleClick(e){
        e.preventDefault()
        const userLogin={
            "username":username,
            "password":password
        }
        
        
        let res = await axios.post(`http://localhost:8080/api/responsable/login`,  userLogin )
        
            if (res.data.message == "login with success"){
                setLoggedIn(true)
                await resconsultContext.setResponsableId(res.data.id)
                
            }
            setResponseData(res.data)
        
        await setConsultation(resconsultContext.consult)
        
        
        
    }
    async function startCommand(comId){
        /*http://localhost:8080/api/responsable/startcommande/{idCom} */
        const cmd ={
            "add_commande_agent":{
                "agent":{
                "agent_id":1
                }
            }
        }
        
        let res =await axios.post(`http://localhost:8080/api/responsable/startcommande/${comId}`,cmd)
        if(res.status >= 200)
        console.log("success")
    }


    if(loggedIn === false)
    return (
        <div>
            <Menu />
            <h1>
            Admin panel
            </h1>
            <form >
                Username<input type="text" name="username"onChange={(e)=>{setUsername(e.target.value)}}/><br/>
                Password<input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <p>
                {responseData.message}
                </p>
                <button onClick={(e)=>handleClick(e)}>login in</button>
            </form>

        </div>
    )
    else
    return(
        <div>
            <Menu />
            {resconsultContext.consult.length > 0 &&resconsultContext.consult.map(item =>(

                <div>
                    <h1>commande id : {item.commande_id}</h1>
                    <p>commande etat : {item.commande_etat}</p>
                    <p>commande prix : {item.commande_prix}</p>
                    {item.commandePizzas.map(pizza => 
                        <div style={{border:"solid black 2px",marginLeft:"12px",marginTop:"10px",padding:"20px"}}>
                            <h3>pizza</h3>
                            <p>pizza type :{pizza.pizzas.pizza_type}</p>
                            <p>pizza prix : {pizza.pizzas.pizza_prix}</p>
                            <p>pizza nombre : {pizza.nombre_pizza}</p>
                            {pizza.pizzas.ingrediants.map(ingrediant =>
                                <div style={{border:"solid black 2px",marginLeft:"20px",marginTop:"10px",padding:"20px"}}>
                                    <p>ingrediant nom : {ingrediant.ingrediant_nom}</p>
                                    <p>ingrediant prix : {ingrediant.ingrediant_prix}</p>
                                </div>   
                                
                                )}


                        </div>
                        )}
                    {item.commandeBoissons.map(boisson =>
                        <div style={{border:"solid black 2px",marginLeft:"12px",marginTop:"10px",padding:"20px"}}>
                            <h3>boisson</h3>
                            <p>boisson nom: {boisson.boissons.boisson_nom}</p>
                            <p>boisson prix: {boisson.boissons.boisson_prix}</p>

                        </div>
                        )}  
                     {item.commandesClient.map(client =>
                        
                        <div style={{border:"solid black 2px",marginLeft:"12px",marginTop:"10px",padding:"20px"}}>
                            <h3>client</h3>
                            <p>client nom: {client.clients.client_nom} {client.clients.client_prenom}</p>
                            <p>client adress: {client.adress_livraison != null ? client.adress_livraison : client.clients.client_adress}</p>

                        </div>
                        
                        
                        )}   
                        <button onClick={()=> startCommand(parseInt(item.commande_id))}>lancer commande</button>  

                </div>
            )               
        )}
            
        </div>
    )
}

export default Admin
