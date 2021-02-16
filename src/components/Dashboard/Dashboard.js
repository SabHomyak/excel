import React, {useState} from "react";
import classes from './dashboard.module.scss'
import HeaderContainer from "./Header/HeaderContainer";
import TableContainer from "./Table/TableContainer";
import NewFileForm from "../UI/Forms/FileForm/NewFileForm";
import excelFileApi from "../../Api/ExcelFileApi/excelFileApi";
import {Redirect} from "react-router-dom"

const Dashboard = (props) => {
    const [error,setError] = useState(null);
    if(error){
        throw error
    }
    return (
        <div className={classes.dashboard}>
            <HeaderContainer/>
            <div className={classes.new} onClick={() => {
                props.openModal({
                    text: 'Создание новой таблицы',
                    callback: async (value) => {
                        try {
                            let result = await excelFileApi.createFile(value.filename)
                            let files = await excelFileApi.getAllFiles()
                            props.setListFiles(files)
                            props.setShow(false)
                        } catch (e) {
                            setError(e)
                        }
                    }
                }, NewFileForm)
            }}>
                <div className={classes.view}>
                   <span className={classes.create}>
                       Новая Таблица
                   </span>
                </div>
            </div>
            <TableContainer {...props}/>
        </div>
    )
}
export default Dashboard
