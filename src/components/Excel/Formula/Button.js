import classes from "../Toolbar/toolbar.module.scss";
import React from "react";
import {connect} from "react-redux";
import {setTextStyle} from "../../redux/tableReducer";

const Button = props => {
    const activeClass = props.isActive ? 'active' : ''
    const [property,value] = props.style.split(":")
    let style={
        [property]:value
    }
    return (
        <div className={classes.button + ' ' + classes[activeClass]}
             onClick={(event) => {
                 if (!props.isActive) {
                     props.setTextStyle(style)
                 } else {
                     for (let key in style) {
                         style[key] = ''
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