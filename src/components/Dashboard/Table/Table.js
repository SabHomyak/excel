import React from "react";
import classes from './table.module.scss'
import excelFileApi from "../../../Api/ExcelFileApi/excelFileApi";
import { useHistory } from "react-router-dom";

const Table = (props) => {
    let history = useHistory()
    const printFiles = props.files.map(file => {
        return (
            <li className={classes.record} key={file.id}>
                <a href="/#"
                   onClick={(e) => {
                       e.preventDefault()
                        excelFileApi.getFile(file.id)
                            .then(file =>{
                                props.setInitialState({...file})
                                localStorage.removeItem('tableState')
                                history.push('/')
                            })
                   }}>{file.excelFileName}</a>
                <strong>{new Date(file.openedDate).toLocaleDateString()}</strong>
            </li>
        )
    })
    return (
        <div className={classes.table + ' ' + classes.view}>
            <div className={classes.listHeader}>
                <span>Название</span>
                <span>Дата открытия</span>
            </div>
            <ul className={classes.list}>
                {printFiles}
            </ul>
        </div>
    )
}
export default Table