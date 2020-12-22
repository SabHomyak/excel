import Formula from "./Formula";
import React from "react";
import {connect} from "react-redux";

const FormulaContainer = (props) => {
    return <Formula {...props}/>
}

const mapStateToProps = state => ({
    formula:state.formula
})

export default connect(mapStateToProps)(FormulaContainer)