import React from "react";
import classes from './cell.module.scss'


const Cell = (props) => {
    console.log('cell render')
    const onBlurHandler = (event) => {
        const text = event.currentTarget.innerText
        if (props.data !== text && text !== '') {
            props.setDataState(currentCell, text)
        }
    }
    const currentCell = props.position
    return (
        <div className={classes.rowData}>
            <div
                className={classes.cell}
                contentEditable={true}
                suppressContentEditableWarning={true}
                style={{width: props.width}}
                data-cell={currentCell}
                onFocus={() => props.setActiveCell(currentCell)}
                onBlur={(event) => onBlurHandler(event)}
                onInput={(event) => props.setFormula(event.target.textContent)}
            >{props.data}</div>
        </div>
    )
}

export default Cell