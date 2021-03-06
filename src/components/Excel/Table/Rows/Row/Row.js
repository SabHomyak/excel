import React from "react";
import classes from './row.module.scss'
import CellContainer from "./Cell/CellContainer";


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
            style={props.height ? {height: props.height} : {}}
            data-type="resizable"
            data-row={index}
        >
            <div
                className={classes.rowInfo}>
                {index ? index : ''}
                {resizer}
            </div>

            <div className={classes.rowData}>
                {generateCols(props)}
            </div>

        </div>
    )
}
const generateCols = ({index, colState, dataState, sizeCols, activeCell}) => {

    const positionAinChar = 'A'.charCodeAt()
    // const positionZinChar = 'Z'.charCodeAt()
    // const sizeAZ = positionZinChar - positionAinChar
    const cols = Array(sizeCols).fill('')
    if (index === 0) {
        //generate first-row ABC...
        return cols.map((col, i) => {
                return <div
                    style={colState[i] ? {width: colState[i]} : null}
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
        let active = isActive(activeCell)
        return cols.map((col, i) => {
                const position = `${index}:${i}`
                let a = activeCell
                let isActiveCell = active(i)
                return <CellContainer
                    key={i}
                    position={position}
                    index={index}
                    width={colState[i] ? colState[i] : null}
                    data={dataState[`${index}:${i}`]}
                    activeCell={isActiveCell}
                />
            }
        )
    }
}
const isActive = (cols) => {
    if (cols) {
        return (col) => {
            if (typeof cols === 'string') {
                return col === parseInt(cols.split(':')[1])
            } else {
                return cols.includes(col)
            }
        }
    }
    return () => null
}
export default React.memo(Row)