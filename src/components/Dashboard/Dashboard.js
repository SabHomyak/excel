import React from "react";
import classes from './dashboard.module.scss'
import HeaderContainer from "./Header/HeaderContainer";
import TableContainer from "./Table/TableContainer";

const Dashboard = (props) => {
    return (
        <div className={classes.dashboard}>
            <HeaderContainer/>
            <div className={classes.new}>
               <div className={classes.view}>
                   <a href="#" className={classes.create}>
                       Новая Таблица
                   </a>
               </div>
            </div>
            <TableContainer/>
        </div>
    )
}
export default Dashboard