import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import LoginContext from "../Context/LoginContext"
import '../styles/menu.css'
function Menu() {
    const LoggedInContext =useContext(LoginContext)
    return (
        <div className="menu">
            <div className="menu__left">
                <Link to='/'>Home</Link>
            </div>
            <div className="menu__right">
                {LoggedInContext.loggedIn == true ?
                <Link to='/' onClick={(e)=>(LoggedInContext.setLoggedIn(false))}>logout</Link>
                :
                <>
                <Link to='/login'>Login</Link>
                <Link to='/signin'>Sign In</Link>
                </>}
            </div>
        </div>
    )
}

export default Menu
