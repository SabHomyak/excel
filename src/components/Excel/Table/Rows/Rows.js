import React from "react";
import RowContainer from "./Row/RowContainer";


const Rows = ({sizeRow, dataState, ...props}) => {
    return (
        <>
            {generateRows(sizeRow, dataState, props)}
        </>

    )
}

export default Rows


const generateRows = (size, dataState, props) => {

    const rows = Array(size).fill('').map((_, index) => {
            let col, row
            const rowDataState = props.getDataState(dataState, index)
            const height = props.getHeight(index)
            let activeCell
            if (typeof props.activeCell === 'string') {
                [row, col] = props.activeCell.split(':').map(str => parseInt(str))
                activeCell = row === index ? props.activeCell : null
            } else {
                activeCell = props.activeCell[index]
            }

            return <RowContainer
                key={index}
                index={index}
                dataState={rowDataState}
                height={height}
                activeCell={activeCell}
            />
        }
    )
    return rows
}