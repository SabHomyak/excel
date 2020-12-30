import React from "react";
import RowContainer from "./Row/RowContainer";


const Rows = ({sizeRow, dataState, ...props}) => <>
    {generateRows(sizeRow, dataState, props)}
</>


export default Rows


const generateRows = (size, dataState, props) => {
    const rows = Array(size).fill('').map((_, index) => {
        const rowDataState = props.getDataState(dataState, index)
        const height = props.getHeight(index)
        return <RowContainer
            key={index}
            index={index}
            dataState={rowDataState}
            height={height}
        />
    })
    return rows
}