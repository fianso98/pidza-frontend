import React,{useContext,useEffect, useState} from 'react'
import Menu from '../components/Menu'
import axios from "axios"
import LoginContext from "../Context/LoginContext"
import { Redirect, useHistory } from 'react-router-dom'
import '../styles/login.css'
function Login() {
    const LoggedInContext =useContext(LoginContext)
    
    
    
    
    function handleClick(e){
        e.preventDefault()
        const userLogin={
            "username":username,
            "password":password
        }
        
        
        axios.post(`http://localhost:8080/api/client/login`,  userLogin )
        .then(res => {
            if (res.data.message == "login with success")
            LoggedInContext.setLoggedIn(true)
            LoggedInContext.setClientId(res.data.id)
            setResponseData(res.data)
        })
        
        
    }
    const [responseData, setResponseData] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //check if he is logged in then redirect to main page
    if(LoggedInContext.loggedIn == true)
    return(<Redirect to="/" />)
    return (
        <div className="login">
            <Menu />
            <div className="login__content">

            
            <h1>
            login page
            </h1>
            <form className="login__form">
                <div className="login__formLigne">
                <label >
                Username    
                </label>
                <input type="text" name="username"onChange={(e)=>{setUsername(e.target.value)}}/><br/>
                </div>
                <div className="login__formLigne">
                <label >
                Password                   
                </label>
                <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                </div>
                <p>
                {responseData.message}
                </p>
                <button onClick={(e)=>handleClick(e)}>login in</button>
            </form>
            </div>
        </div>
    )
}

export default Login
