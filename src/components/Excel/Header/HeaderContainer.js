import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setTitle} from "../../redux/tableReducer";


const HeaderContainer = (props) => {
    return <Header {...props}/>
}

const mapStateToProps = state => {

    return {
        title:state.table.title
    }
}

export default connect(mapStateToProps, {
    setTitle
})(HeaderContainer)