import React from "react";
import classes from './excel.module.scss'
import HeaderContainer from "./Header/HeaderContainer";
import ToolbarContainer from "./Toolbar/ToolbarContainer";
import FormulaContainer from "./Formula/FormulaContainer";
import TableContainer from "./Table/TableContainer";

const Excel = (props) => {
    let excelDiv = React.createRef()
    return (
        <div className={classes.excel}
             onMouseDown={(e) => {
                 resizer(e, props)
             }}
             ref={excelDiv}
        >
            <HeaderContainer/>
            <ToolbarContainer/>
            <FormulaContainer/>
            <TableContainer/>
        </div>)

    function resizer(e, props) {
        if (e.target.dataset.resize) {
            const resizer = e.target.closest('[data-type="resizable"]')
            const coords = resizer.getBoundingClientRect()
            const type = e.target.dataset.resize
            const test = e.target
            let delta
            test.style.opacity = '1'
            test.style[type === 'col' ? 'bottom' : 'right'] = '-70vh'
            document.onmousemove = e => {
                delta = e[type === 'col' ? 'pageX' : 'pageY'] - coords[type === 'col' ? 'right' : 'bottom']
                test.style[type === 'col' ? 'right' : 'bottom'] = -delta + 'px'
            }

            document.onmouseup = () => {
                document.onmousemove = null
                document.onmouseup = null
                e.target.style['opacity'] = '0'
                e.target.style.right = '0'
                e.target.style.bottom = '0'
                type === 'col' ?
                    props.setColState(resizer.dataset.col, parseInt(resizer.style.width || getComputedStyle(resizer).width) + delta) :
                    props.setRowState(resizer.dataset.row, parseInt(resizer.style.height || getComputedStyle(resizer).height) + delta)
            }
        }
    }

}


export default Excel