import React from "react";
import Row from "./Row";
import {connect} from "react-redux";


class RowContainer extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //fix compare with stringify
        // console.log('shouldComponentUpdate')
        let thisprops = JSON.stringify(this.props.dataState)
        let nextprops = JSON.stringify(nextProps.dataState)
        // console.log(thisprops)
        // console.log(nextprops)
        // console.log(thisprops!==nextprops)
        return thisprops !== nextprops;
    }

    render() {
        return <Row {...this.props}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        colState: state.table.colState,
        sizeCols: state.table.sizeCols
    }
}

export default connect(mapStateToProps)(RowContainer)