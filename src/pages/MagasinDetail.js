import React,{useState ,useEffect, useContext} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Boisson from '../components/Boisson'
import Ingrediant from '../components/Ingrediant'
import Pizza from '../components/Pizza'
import Menu from '../components/Menu'
import ConsultContext from '../Context/ConsultContext'
import CommandeContext from '../Context/CommandeContext'
import LoginContext from '../Context/LoginContext'
import '../styles/magasinDetail.css'
function MagasinDetail() {
    let {id} = useParams()
    const exempleConsult = useContext(ConsultContext)
    const [magasin, setMagasin] = useState([])
    const commande =useContext(CommandeContext)
    const LoggedInContext =useContext(LoginContext)
    const history =useHistory()
   
    useEffect(() => {
        
        
        setMagasin(exempleConsult
            .filter((item)=> item.magasin_id == id))
       
        
    }, [])
   
    return (
        <div className="magasinDetail">
            <Menu />
            <h5 className="magasinDetail__title">details du magasin</h5>
            {magasin.length >0 &&
            <h4 className="magasinDetail__nomMagasin">Nom du magasin <strong className="magasinDetail__nomMagasin__strong">
                {magasin[0]["magasin_nom"]}
                </strong></h4>
            }
            { magasin.length >0
            ?
            (<div>
                <h3 className="magasinDetail__pizzaTitle">nos pizza</h3>
              <div className="magasinDetail__pizza"> 
            {magasin[0]["pizzaLists"].map(
                (item,key) => (<Pizza 
                    ingrediants={magasin[0]["ingrediantLists"]}
                    type={item.pizza_type}
                     photo={item.pizza_photo}
                     prix={item.pizza_prix}
                     key={key}/>
                )
            ) }
            </div> 

            <hr />
            
            <h3 className="magasinDetail__boissonTitle">nos boisson</h3>
            
            {magasin[0]["boissonLists"].map(
                (item,key) => (<Boisson 
                    nom={item.boisson_nom}
                     photo={item.boisson_photo}
                     prix={item.boisson_prix}
                     key={key}/>
                )
            )}
            
            </div>
            )
             :
           null 
            
            }
            {LoggedInContext.loggedIn ?
            <button className="magasinDetail__button" onClick={()=>{
                commande.setMagasin(parseInt(id))
                commande.setClient(LoggedInContext.clientId)
                history.push('/commande')
            }}>valider commande</button>
            
            : null}
        </div>
    )
}

export default MagasinDetail
