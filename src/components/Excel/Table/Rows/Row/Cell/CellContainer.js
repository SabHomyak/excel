import React from "react";
import Cell from "./Cell";
import {connect} from "react-redux";
import {
    setActiveCell,
    setDataState,
    setCurrentText,
    setGroupActiveCell, setStyleCell,
} from "../../../../../redux/tableReducer";


const CellContainer = (props) => {
    // const active = !!props.activeCell.includes(props.position)
    return <Cell {...props} activeCell={null} isActive={props.activeCell}/>
}

const mapStateToProps = state => {
    return {
        activeCell: state.table.activeCell
    }
}
export default connect(null, {
    setActiveCell,
    setDataState,
    setCurrentText,
    setGroupActiveCell,
    setStyleCell
})(React.memo(CellContainer))