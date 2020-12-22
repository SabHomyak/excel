import React, {useReducer, useState} from "react";
import classes from './row.module.scss'
import {setActiveCell} from "../../../redux/tableReducer";


const Row = props => {
    const index = props.index
    const resizer = index
        ? <div
            className={classes.rowResize}
            data-resize="row"
        /> :
        null
    return (
        <div
            className={classes.row}
            style={{height: props.rowSize[index]}}
            data-type="resizable"
            data-row={index}
        >
            <div
                className={classes.rowInfo}>
                {index ? index : ''}
                {resizer}
            </div>

            <div className={classes.rowData}>
                {generateCols(index, props.cols, props.dataState, props.setActiveCell, props.setDataState, props.setFormula)}
            </div>

        </div>
    )
}
const generateCols = (index, colsState, dataState, setActiveCell, setDataState, setFormula) => {
    const positionAinChar = 'A'.charCodeAt()
    const positionZinChar = 'Z'.charCodeAt()
    const sizeAZ = 2
    const cols = Array(sizeAZ + 1).fill('')
    if (index === 0) {
        return cols.map((col, i) => {
                return <div
                    style={colsState[i] ? {width: colsState[i]} : null}
                    key={i}
                    className={classes.column}
                    data-type="resizable"
                    data-col={i}
                >
                    {String.fromCharCode(positionAinChar + i)}
                    <div
                        className={classes.colResize}
                        data-resize="col"
                    />
                </div>
            }
        )
    } else {
        return cols.map((col, i) => {
                const currentCell = `${index}:${i}`
                return <div
                    key={i}
                    className={classes.cell}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    style={colsState[i] ? {width: colsState[i]} : null}
                    data-cell={currentCell}
                    onFocus={() => {
                        setActiveCell(currentCell)
                    }}
                    onBlur={(event) => {
                        const dataCell = dataState[currentCell] ? dataState[currentCell] : ''
                        if (dataCell !== event.target.textContent) {
                            setDataState(currentCell, event.target.textContent)
                        }
                    }}
                    onInput={(event) => {
                        setFormula(event.target.textContent)
                    }}
                >{dataState[currentCell]}</div>
            }
        )
    }
}
export default Row