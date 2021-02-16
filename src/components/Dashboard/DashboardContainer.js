import Dashboard from "./Dashboard";
import React from "react";
import {connect} from "react-redux";
import {openModal, setShow} from "../redux/modalReducer";
import {setListFiles} from "../redux/dashboardReducer";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const DashboardContainer = (props) => {
    // if(!props.authorized){
    //     return <Redirect to={"/login"}/>
    // }
    return <Dashboard {...props}/>
}

// const mapStateToProps = state => {
//     return {
//         authorized: state.user.authorized
//     }
// }
export default compose(
    withAuthRedirect,
    connect(null, {
        openModal, setShow, setListFiles
    })
)(DashboardContainer)