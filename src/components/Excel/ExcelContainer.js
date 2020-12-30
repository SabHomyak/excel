import Excel from "./Excel";
import React from "react";
import {connect} from "react-redux";
import {setActiveCell, setColState, setRowState} from "../redux/tableReducer";

const ExcelContainer = (props) => {
    return <Excel {...props}/>
}
const mapStateToProps = state => {
    return {
        sizeRows: state.sizeRows,
        sizeCols: state.sizeCols
    }
}
export default connect(mapStateToProps, {setColState, setRowState, setActiveCell})(ExcelContainer)