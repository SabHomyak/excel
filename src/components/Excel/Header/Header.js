import React from "react";
import classes from './header.module.scss'


const Header = (props) => {
    return <div className={classes.header}

    >
        <input className={classes.input}
               onInput={(event) =>{
                   props.setTitle(event.currentTarget.value)
               }}
               type="text" defaultValue={props.title}/>
        <div>
            <div className={classes.button}>
                <i className='material-icons'>delete</i>
            </div>
            <div className={classes.button}>
                <i className='material-icons'>exit_to_app</i>
            </div>
        </div>
    </div>
}
export default Header