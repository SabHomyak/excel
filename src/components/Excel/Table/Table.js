import React from "react";
import classes from './table.module.scss'
import RowsContainer from "./Rows/RowsContainer";


const Table = () => {
    return (
        <div className={classes.table}>
            <RowsContainer/>
        </div>
    )
}

export default Table