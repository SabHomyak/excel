import React from "react";
import classes from './table.module.scss'


const Table = (props) => {
    return (
        <div className={classes.table + ' ' + classes.view}>
            <div className={classes.listHeader}>
                <span>Название</span>
                <span>Дата открытия</span>
            </div>
            <ul className={classes.list}>
                <li className={classes.record}>
                    <a href="#">Таблица номер 1</a>
                    <strong>12.06.2020</strong>
                </li>
                <li className={classes.record}>
                    <a href="#">Таблица номер 1</a>
                    <strong>12.06.2022</strong>
                </li>
                <li className={classes.record}>
                    <a href="#">Таблица номер 1</a>
                    <strong>12.06.2021</strong>
                </li>
            </ul>
        </div>
    )
}
export default Table