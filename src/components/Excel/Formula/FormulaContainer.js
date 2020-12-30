import Formula from "./Formula";
import React from "react";
import {connect} from "react-redux";
import {setDataState} from "../../redux/tableReducer";

const FormulaContainer = (props) => {
    return <Formula {...props}/>
}

const mapStateToProps = state => ({
    formula:state.formula,
    activeCell:state.activeCell
})

export default connect(mapStateToProps,{
    setDataState
})(FormulaContainer)