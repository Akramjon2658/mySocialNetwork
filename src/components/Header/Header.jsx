import React from 'react'
import s from '../Header/header.module.css'
import {NavLink} from 'react-router-dom'
 
const Header = (props) => {
    return <div className={s.header}>
        {props.isAuth ? <div>{props.login} - <button onClick = {props.logout}>Log out</button></div> : <NavLink to="/login" >Login</NavLink>}
        
        {/* <img src="../../img/telegram.png" /> */}
    </div>







    
}

export default Header;  