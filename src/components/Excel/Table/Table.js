import React from "react";
import classes from './table.module.scss'
import Rows from "./Rows/Rows";
import RowsContainer from "./Rows/RowsContainer";


const Table = (props) => {
    return (
        <div className={classes.table}>
            <RowsContainer size={20}/>
        </div>
    )
}

export default Table