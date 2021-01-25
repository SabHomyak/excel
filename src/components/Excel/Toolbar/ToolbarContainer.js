import Toolbar from "./Toolbar";
import React from "react";
import {connect} from "react-redux";

export const defaultStyles = {
    textAlign: 'left'
}

const buttons = [
    {isActive: false, type: 'format_align_left', style: {textAlign: 'left'}},
    {isActive: false, type: 'format_align_center', style: {textAlign: 'center'}},
    {isActive: false, type: 'format_align_right', style: {textAlign: 'right'}},
    {isActive: false, type: 'format_bold', style: {fontWeight: 'bold'}},
    {isActive: false, type: 'format_italic', style: {fontStyle: 'italic'}},
    {isActive: false, type: 'format_underlined', style: {textDecoration: 'underline'}}
]

const ToolbarContainer = (props) => {
    let styles = props.styles
    if (Object.keys(styles).length === 0) {
        styles = defaultStyles
    }
    return <Toolbar styles={styles} buttons={buttons}/>
}

const mapStateToProps = state => {
    return {
        styles: state.table.currentStyleCell,
        activeCell: state.table.activeCell
    }
}
export default connect(mapStateToProps)(ToolbarContainer)