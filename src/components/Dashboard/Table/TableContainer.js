import Table from "./Table";
import React, {useEffect, useState} from "react";
import excelFileApi from "../../../Api/ExcelFileApi/excelFileApi";
import {connect} from "react-redux";
import {setInitialState} from "../../redux/tableReducer";
import {setListFiles} from "../../redux/dashboardReducer";


const TableContainer = (props) => {
    let files = props.files
    useEffect(async () => {
        files = await excelFileApi.getAllFiles()
        props.setListFiles(files)
    }, [])
    return <Table {...props} files={files}/>
}
const mapStateToProps = state => {
    return {
        files: state.dashboard.listFiles
    }
}
export default connect(mapStateToProps, {
    setInitialState,
    setListFiles
})(TableContainer)