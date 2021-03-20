import React from 'react'
import '../styles/ingrediant.css'
function Ingrediant(props) {
    const {nom  , prix} = props
    return (
        <div className="ingrediant">
            <p>nom d'ingrediant : {nom}</p>
            <p>prix : $ {prix}</p>
        </div>
    )
}

export default Ingrediant
