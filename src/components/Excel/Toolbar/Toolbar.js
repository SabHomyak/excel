import React from "react";
import classes from './toolbar.module.scss'


const Toolbar = (props) =>{
    return (
        <div className={classes.toolbar}>
            <div className={classes.button}>
                <i className='material-icons'>format_align_left</i>
            </div>
            <div className={classes.button}>
                <i className='material-icons'>format_align_center</i>
            </div>
            <div className={classes.button}>
                <i className='material-icons'>format_align_right</i>
            </div>
            <div className={classes.button}>
                <i className='material-icons'>format_bold</i>
            </div>
            <div className={classes.button}>
                <i className='material-icons'>format_italic</i>
            </div>
            <div className={classes.button}>
                <i className='material-icons'>format_underlined</i>
            </div>

        </div>
    )
}
export default Toolbar