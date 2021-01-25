import Rows from "./Rows";
import React from "react";
import {connect} from "react-redux";


const RowsContainer = (props) => {
    const getDataState = (dataState, index) => {
        let rowDataState = {}
        for (let key in dataState) {
            let row = +key.substring(0, 1)
            if (row === index) {
                rowDataState[key] = dataState[key]
            }
        }
        return rowDataState
    }
    const getHeight = (index) => {
        return props.rowState[index]
    }
    return <Rows
        {...props}
        getDataState={getDataState}
        getHeight={getHeight}
        activeCell={props.activeCell}
    />
}

const mapStateToProps = (state) => {
    return {
        dataState: state.table.dataState,
        rowState: state.table.rowState,
        sizeRow: state.table.sizeRows,
        activeCell:state.table.activeCell
    }
}
export default connect(mapStateToProps)(RowsContainer)