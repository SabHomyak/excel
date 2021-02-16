import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {exit, setUsername} from "../../redux/userReducer";


const HeaderContainer = (props) => {
    return <Header {...props}/>
}
const mapStateToProps = state => {
    return {
        username: state.user.username
    }
}
export default connect(mapStateToProps,{
    exit
})(HeaderContainer)