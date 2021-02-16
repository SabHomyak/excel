import React, {useEffect} from "react";
import classes from './table.module.scss'
import excelFileApi from "../../../Api/ExcelFileApi/excelFileApi";
import {Link, useHistory} from "react-router-dom";

const Table = (props) => {
    useEffect(() => {
        return () => {
            props.setListFiles([])
        }
    }, [])
    let history = useHistory()
    const printFiles = props.files.map(file => {
        return (
            <li className={classes.record} key={file.id}>
                <a href="/"
                   onClick={async (e) => {
                       e.preventDefault()
                       let excelFile = await excelFileApi.getFile(file.id)
                       props.setInitialState({...excelFile})

                       localStorage.removeItem('tableState')
                       history.push('/')
                   }}>{file.excelFileName}</a>
                <strong>{new Date(file.openedDate).toLocaleDateString()}</strong>
            </li>
        )
    })
    return (
        <div className={classes.table + ' ' + classes.view}>
            <div className={classes.listHeader}>
                <span>Название</span>
                <span>Дата изменения</span>
            </div>
            <ul className={classes.list}>
                {printFiles}
            </ul>
        </div>
    )
}
export default Table