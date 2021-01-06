import Formula from "./Formula";
import React from "react";
import {connect} from "react-redux";
import {setDataState} from "../../redux/tableReducer";

const FormulaContainer = (props) => {
    return <Formula {...props}/>
}

const mapStateToProps = state => {
    return {
        text: state.table.currentText,
        activeCell: state.table.activeCell
    }
}

export default connect(mapStateToProps, {
    setDataState
})(FormulaContainer)