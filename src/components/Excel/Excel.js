import React from "react";
import classes from './excel.module.scss'
import HeaderContainer from "./Header/HeaderContainer";
import ToolbarContainer from "./Toolbar/ToolbarContainer";
import FormulaContainer from "./Formula/FormulaContainer";
import TableContainer from "./Table/TableContainer";

const Excel = (props) => {
    document.onselectstart = e => true
    document.onkeydown = (e => {
        if (e.shiftKey && document.onselectstart()) {
            document.onselectstart = e => false
        }
        if (!e.shiftKey) {
            switchCell(e, props.activeCell)
        }
    })
    return (
        <div className={classes.excel}
             onMouseDown={(e) => resizer(e, props)}
        >
            <HeaderContainer/>
            <ToolbarContainer/>
            <FormulaContainer/>
            <TableContainer/>
        </div>)

    function resizer(e, props) {
        if (e.target.dataset.resize) {
            document.onselectstart = e => false
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
                document.onselectstart = e => true
                e.target.style['opacity'] = '0'
                e.target.style.right = '0'
                e.target.style.bottom = '0'
                type === 'col' ?
                    props.setColState(resizer.dataset.col, parseInt(resizer.style.width || getComputedStyle(resizer).width) + delta) :
                    props.setRowState(resizer.dataset.row, parseInt(resizer.style.height || getComputedStyle(resizer).height) + delta)
            }
        }
    }

    function switchCell(event, activeCell) {
        let cell = activeCell
        let isFocused = document.activeElement.attributes.getNamedItem('contenteditable')
        if (!event.shiftKey && !isFocused) {
            let col
            let row
            if (typeof cell === 'string') {
                [row, col] = cell.split(':').map(el => parseInt(el))
            } else {
                let cells = Object.keys(cell)
                row = cells[cells.length - 1]
                col = cell[row][cell[row].length -1]
            }
            const code = event.code
            switch (code) {
                case 'ArrowRight':
                case 'Tab':
                    col++
                    if (col < props.sizeCols && col >= 0) {
                        props.setActiveCell(row + ':' + col)
                    }
                    break
                case 'ArrowLeft':
                    col--
                    if (col < props.sizeCols && col >= 0) {
                        props.setActiveCell(row + ':' + col)
                    }
                    break
                case 'ArrowDown':
                case 'Enter':
                    row++
                    if (row < props.sizeRows && row >= 1) {
                        props.setActiveCell(row + ':' + col)
                    }

                    break
                case 'ArrowUp':
                    row--
                    if (row < props.sizeRows && row >= 1) {
                        props.setActiveCell(row + ':' + col)
                    }
                    break
            }
        }
    }

}


export default Excel