import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {setInitialState, setTitle, testDispatch} from "../../redux/tableReducer";
import {openModal} from "../../redux/modalReducer";


const HeaderContainer = (props) => {
    return <Header {...props}/>
}

const mapStateToProps = state => {

    return {
        title:state.table.title
    }
}

export default connect(mapStateToProps, {
    setTitle,
    setInitialState,
    openModal,
    testDispatch
})(HeaderContainer)