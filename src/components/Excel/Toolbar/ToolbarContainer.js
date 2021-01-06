import Toolbar from "./Toolbar";
import React from "react";
import {connect} from "react-redux";

const ToolbarContainer = (props) => {
    return <Toolbar {...props}/>
}

const mapStateToProps = state => {
    return {
        styles:state.table.currentStyleCell
    }
}
export default connect(mapStateToProps)(ToolbarContainer)