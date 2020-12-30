import React from "react";
import classes from './formula.module.scss'


const Formula = (props) => {
    return (
        <div className={classes.formula}>
            <div className={classes.info}>fx</div>
            <div
                className={classes.input}
                contentEditable={true}
                spellCheck={false}
                suppressContentEditableWarning={true}
                dangerouslySetInnerHTML={{__html:props.formula}}
                onInput={event => {
                    props.setDataState(props.activeCell,event.currentTarget.innerHTML)
                }}
            />
        </div>
    )
}
export default Formula