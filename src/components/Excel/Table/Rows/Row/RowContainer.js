import React from "react";
import Row from "./Row";
import {connect} from "react-redux";


class RowContainer extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        debugger
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
    }
}

export default connect(mapStateToProps)(RowContainer)