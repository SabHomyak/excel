import React from "react";
import Cell from "./Cell";
import {connect} from "react-redux";
import {setActiveCell, setDataState, setFormula} from "../../../../../redux/tableReducer";


const CellContainer = React.memo((props) => {
    return <Cell {...props}/>
})


export default connect(null, {
    setActiveCell,
    setDataState,
    setFormula
})(CellContainer)