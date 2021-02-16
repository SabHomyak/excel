import React from "react";
import classes from './header.module.scss'
import {Link} from "react-router-dom";


const Header = (props) => {
    return <div className={classes.header}>
        <h1>Excel Dashboard</h1>
        <div className={classes.profile}>
            <span>{props.username}</span> | <Link to={"/login"} onClick={() => {
                props.exit()
        }}>Выйти</Link>
        </div>
    </div>
}
export default Header