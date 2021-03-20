import React,{useContext, useEffect, useState} from 'react'
import CommandeContext from '../Context/CommandeContext'
import LoginContext from "../Context/LoginContext"
import Ingrediant from './Ingrediant'
import '../styles/pizza.css'
function Pizza(props) {
    const {type , photo , prix,ingrediants} = props
    const [nombrePizza, setNombrePizza] = useState(1)
    const [statePizza, setStatePizza] = useState(false)
    useEffect(() => {
        setNbrPizza(type,nombrePizza)
    }, [nombrePizza])
    //handle ajout de pizza
    function handleClickPizza(){
       const pizzaList={
            "pizzas":{                   
                    
                "pizza_type": type,
                "pizza_prix": prix,
                "ingrediants": []

            },
            "nombre_pizza":nombrePizza
        }
        setStatePizza(true)
        if(!commande.pizza.filter(e => e.pizzas.pizza_type === pizzaList.pizzas.pizza_type).length > 0){
            const pizzaToAdd = commande.pizza
            pizzaToAdd.push(pizzaList)
            commande.setPizza(pizzaToAdd)
        }
        
    }
    function setIng(typePizza, ingrediant) {
        const pizzaToAdd = commande.pizza
        
        for (var i = 0; i < pizzaToAdd.length; i++) {
            if (pizzaToAdd[i].pizzas.pizza_type === typePizza) {
                pizzaToAdd[i].pizzas.ingrediants.push(ingrediant)
              return;
            }
          }
        commande.setPizza(pizzaToAdd)
        
      }
      //handle ajout ingrediant
      function handleClickIngrediant(nom,prix){
          const ingrediantList={
              "ingrediant_nom": nom,
              "ingrediant_prix": prix
              
            }
            
            setIng(type,ingrediantList)
        }
        //update number pizza
        function setNbrPizza(typePizza,nbr){
          const pizzaToAdd = commande.pizza
          
          for (var i = 0; i < pizzaToAdd.length; i++) {
              if (pizzaToAdd[i].pizzas.pizza_type === typePizza) {
                  pizzaToAdd[i].nombre_pizza = nbr
                return;
              }
            }
          commande.setPizza(pizzaToAdd)
        }
    //handle sum
    function handleSum(){
        setNombrePizza(nombrePizza+1)
        
    }
    //handle minus
    function handleMinus(){
        setNombrePizza(nombrePizza-1)
    }
    const commande =useContext(CommandeContext)
    //main
    const LoggedInContext =useContext(LoginContext)
    if(LoggedInContext.loggedIn != true)
    return (
        <div className="pizza">
            <p>type de pizza : {type}</p>
            <img src={window.location.origin +`/images/${photo}`} style={{"height":60,"width":80}}/>
            <p>prix : $ {prix}</p>
          
        </div>
    )
    else
    return (
        <div className="pizza">
            <h1>type de pizza : {type}</h1>
            <img src={window.location.origin +`/images/${photo}`} style={{"height":60,"width":80}} />
            <p>prix : $ {prix}</p>
            <button onClick={()=>handleClickPizza()}>ajouter au panier</button>
            {statePizza ?
            <div className="pizza__button">
                <button className="pizza__buttonLeft" onClick={()=>handleSum()}>+</button>
                <p>{nombrePizza}</p>
                <button className="pizza__buttonRight" onClick={()=>{if(nombrePizza>1)handleMinus()}}>-</button>
            </div>
            : null}
            {true &&
            <>
              
            
              <h3 style={{"color":"white"}}>nos ingrediants</h3>
  
              {ingrediants.map(
                  (item,key) => (<><Ingrediant 
                      nom={item.ingrediant_nom}
                       prix={item.ingrediant_prix}
                       key={key}/>
                       <button onClick={()=>handleClickIngrediant(item.ingrediant_nom,item.ingrediant_prix)}>ajouter ingrediant</button>
                       </>
                  )
              )}
            </>
            }
        </div>
    )

}

export default Pizza
