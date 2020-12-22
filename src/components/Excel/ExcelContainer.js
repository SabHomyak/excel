import Excel from "./Excel";
import React from "react";
import {connect} from "react-redux";
import {setColState, setRowState} from "../redux/tableReducer";

const ExcelContainer = (props) => {
    return <Excel {...props}/>
}
export default connect(null, {setColState,setRowState})(ExcelContainer)