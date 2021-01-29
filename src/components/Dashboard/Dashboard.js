import React from "react";
import classes from './dashboard.module.scss'
import HeaderContainer from "./Header/HeaderContainer";
import TableContainer from "./Table/TableContainer";
import NewFileForm from "../UI/Forms/NewFileForm";
import excelFileApi from "../../Api/ExcelFileApi/excelFileApi";

const Dashboard = (props) => {
    return (
        <div className={classes.dashboard}>
            <HeaderContainer/>
            <div className={classes.new} onClick={()=>{
                props.openModal({
                    text:'Создание новой таблицы',
                    callback:async (value)=>{
                        let result = await excelFileApi.createFile(value.filename)
                        let files = await  excelFileApi.getAllFiles()
                        props.setListFiles(files)
                        props.setShow(false)
                    }
                },NewFileForm)
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