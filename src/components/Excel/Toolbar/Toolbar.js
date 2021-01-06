import React from "react";
import classes from './toolbar.module.scss'
import Button from "../Formula/Button";


const buttons = [
    {["textAlign:left"]: {isActive: false, type: 'format_align_left'}},
    {["textAlign:center"]: {isActive: false, type: 'format_align_center'}},
    {["textAlign:right"]: {isActive: false, type: 'format_align_right'}},
    {["fontWeight:bold"]: {isActive: false, type: 'format_bold'}},
    {["fontStyle:italic"]: {isActive: false, type: 'format_italic'}},
    {["textDecoration:underline"]: {isActive: false, type: 'format_underlined'}}
]


const Toolbar = (props) => {
    let styles = []
    if(props.styles){
        Object.entries(props.styles).forEach((values) => {
            styles.push(values[0] + ":" + values[1])
        })
    }
    let generateButtons = buttons.map((button, index) => {
        let key = Object.keys(button)[0]
        button = button[key]
        let style = key
        let isActive = false
        if(styles.includes(key)){
            isActive=true
        }
        return <Button
            key={index}
            isActive={isActive}
            type={button.type}
            style={style}
        />
    })
    return (
        <div className={classes.toolbar}>
            {generateButtons}
        </div>
    )
}
export default Toolbar