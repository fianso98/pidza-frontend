import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/magasin.css'
function Magasin(props) {
    let {id,nom,wilaya,adress,responsable} = props
    const history = useHistory();
    return (
        <div className="magasin">
            <p>magasin : {nom}</p>
            <p>wilaya : {wilaya}</p>
            <p>adress : {adress}</p>
            <p>responsable : {responsable}</p>
            <button onClick={()=>(history.push(`/magasin/${id}`))}>more ...</button>
        </div>
    )
}

export default Magasin
