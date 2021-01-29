import Dashboard from "./Dashboard";
import React from "react";
import {connect} from "react-redux";
import {openModal, setShow} from "../redux/modalReducer";
import {setListFiles} from "../redux/dashboardReducer";

const DashboardContainer = (props) => {
    return <Dashboard {...props}/>
}
export default connect(null, {
    openModal, setShow,setListFiles
})(DashboardContainer)