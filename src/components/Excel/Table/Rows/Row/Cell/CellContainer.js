import React from "react";
import Cell from "./Cell";
import {connect} from "react-redux";
import {
    setActiveCell,
    setDataState,
    setFormula,
    setGroupActiveCell,} from "../../../../../redux/tableReducer";


const CellContainer = (props) => {
    const active = !!props.activeCell.includes(props.position)
    return <Cell {...props} activeCell={null} isActive={active}/>
}

const mapStateToProps = state => {
    return {
        activeCell: state.activeCell
    }
}
export default connect(mapStateToProps, {
    setActiveCell,
    setDataState,
    setFormula,
    setGroupActiveCell
})(CellContainer)