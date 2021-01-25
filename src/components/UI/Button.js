import classes from "../Excel/Toolbar/toolbar.module.scss";
import React from "react";
import {connect} from "react-redux";
import {setTextStyle} from "../redux/tableReducer";

const Button = props => {
    const activeClass = props.isActive ? 'active' : ''
    let style = {...props.style}
    return (
        <div className={classes.button + ' ' + classes[activeClass]}
             onClick={(event) => {
                 if (!props.isActive) {
                     props.setTextStyle(style)
                 } else {
                     for (let key in style) {
                         style[key] = ''
                         if(key === 'textAlign'){
                             style[key] = 'left'
                         }
                     }
                     props.setTextStyle(style)
                 }
             }}
        >
            <i className={'material-icons'}>{props.type}</i>
        </div>
    )
}

export default connect(null, {
    setTextStyle
})(Button)
