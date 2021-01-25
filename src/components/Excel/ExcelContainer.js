import Excel from "./Excel";
import React from "react";
import {connect} from "react-redux";
import {setActiveCell, setColState, setDataState, setRowState} from "../redux/tableReducer";

const ExcelContainer = (props) => {
    return <Excel {...props}/>
}
const mapStateToProps = state => {
    return {
        sizeRows: state.table.sizeRows,
        sizeCols: state.table.sizeCols,
        activeCell:state.table.activeCell,
        currentText:state.table.currentText
    }
}
export default connect(mapStateToProps, {setColState, setRowState, setActiveCell,setDataState})(ExcelContainer)