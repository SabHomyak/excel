import React from "react";
import Row from "./Row";
import {connect} from "react-redux";


class RowContainer extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //fix compare with stringify
        return JSON.stringify(this.props) !== JSON.stringify(nextProps);
    }

    render() {

        return <Row {...this.props}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        colState: state.colState,
        sizeCols:state.sizeCols
    }
}

export default connect(mapStateToProps)(RowContainer)