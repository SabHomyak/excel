import Rows from "./Rows";
import React from "react";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const RowsContainer = (props) => {
    const getRowState = (dataState, index) => {
        let rowDataState = {}
        for (let key in dataState) {
            let row = +key.substring(0, 1)
            if (row === index) {
                rowDataState[key] = dataState[key]
            }
        }
        return rowDataState
    }

    return <Rows
        {...props}
        getRowState={getRowState}
    />
}


export default RowsContainer