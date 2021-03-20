import React,{useEffect, useState} from 'react'
import Menu from '../components/Menu'
import axios from "axios"
import '../styles/sign.css'
import { useHistory } from 'react-router-dom'

function Sign() {
    const history = useHistory()
    function handleClick(e){
        
        e.preventDefault()
        setPasswordCheck(true)
        const userSignIn={
            "client_nom":firstname,
            "client_prenom":lastname,    
            "client_email":email,    
            "client_password":password,    
            "client_username":username,    
            "client_adress": adress,    
            "client_telephone":phone,    
            "client_tokken":"ABFHFCXY9"
        }
        
        
        
        axios.post(`http://localhost:8080/api/client/signin`,  userSignIn )
          .then(res => {
            setStatus(res.status)/* 200 success */
            if(status > 200)
            history.push('/login')
          })

       
    }
    const [status, setStatus] = useState("")
    const [passwordCheck, setPasswordCheck] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [phone, setPhone] = useState("")

    return (
        <div>
            <Menu />
            <div className="sign__content">

            
            <h1>
            sign page
            </h1>
    
    
            
            <form className="sign__form">
                <div className="sign__formLigne">
            <label>Firstname</label><input type="text" name="username"onChange={(e)=>{setFirstname(e.target.value)}}/><br/>

                </div>
                <div className="sign__formLigne">
                <label>Lastname</label><input type="text" name="username"onChange={(e)=>{setLastname(e.target.value)}}/><br/>

                </div>
                <div className="sign__formLigne">
                <label>email</label><input type="email" name="username"onChange={(e)=>{setEmail(e.target.value)}}/><br/>

                </div>
                <div className="sign__formLigne">
                <label>Username</label><input type="text" name="username"onChange={(e)=>{setUsername(e.target.value)}}/><br/>

                </div>
                <div className="sign__formLigne">
                <label>Password</label><input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            {(password.length < 8 & passwordCheck) ?<p>{"password must be a minimum of 8"}</p>: null}

                </div>
                <div className="sign__formLigne">
                <label>Adress</label><input type="text" name="username"onChange={(e)=>{setAdress(e.target.value)}}/><br/>

                </div>
                <div className="sign__formLigne">
                <label>Phone</label><input type="num" name="username"onChange={(e)=>{setPhone(e.target.value)}}/><br/>

                </div>
            <p style={{"color":"red"}}>all the above input are obligatory</p>
            <button onClick={(e)=>handleClick(e)}>sign in</button>
            </form>
            </div>
        
        </div>
    )
}

export default Sign
