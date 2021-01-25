import React from "react";
import classes from './toolbar.module.scss'
import Button from "../../UI/Button";


const Toolbar = (props) => {
    let generateButtons = props.buttons.map((button, index) => {
        let style = Object.keys(button.style)[0]
        let propsStyle = props.styles
        let isActive = false
        if (propsStyle) {
            if (propsStyle[style]) {
                isActive = propsStyle[style] === button.style[style]
            }
        }
        return <Button
            key={index}
            isActive={isActive}
            type={button.type}
            style={button.style}
        />
    })
    return (
        <div className={classes.toolbar}>
            {generateButtons}
        </div>
    )
}
export default Toolbar
