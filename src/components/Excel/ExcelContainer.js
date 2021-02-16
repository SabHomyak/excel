import Excel from "./Excel";
import React from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {setActiveCell, setColState, setDataState, setRowState} from "../redux/tableReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const ExcelContainer = (props) => {
    let history = useHistory()
    if(props.id === -1){
        history.push("/dashboard")
    }
    return <Excel {...props}/>
}
const mapStateToProps = state => {
    return {
        sizeRows: state.table.sizeRows,
        sizeCols: state.table.sizeCols,
        activeCell: state.table.activeCell,
        currentText: state.table.currentText,
        id: state.table.id
    }
}
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {setColState, setRowState, setActiveCell, setDataState})
)(ExcelContainer)