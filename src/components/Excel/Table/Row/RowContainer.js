import React from "react";
import Row from "./Row";


class RowContainer extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return JSON.stringify(this.props) !== JSON.stringify(nextProps);
    }

    render() {
        console.log('render')
        return <Row {...this.props}/>
    }
}

export default RowContainer