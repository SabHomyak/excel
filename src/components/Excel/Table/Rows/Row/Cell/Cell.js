import React, {useEffect, useRef} from "react";
import classes from './cell.module.scss'


const Cell = (props) => {
    const currentCell = props.position
    let prevCell = null
    let div = useRef()
    const activeClass = props.isActive ? classes.selected : ''
    useEffect(() => {
        if (props.isActive) {
            div.current.focus()
        }
    }, [props.isActive])
    return (
        <div className={classes.rowData}>
            <div
                ref={div}
                className={classes.cell + ' ' + activeClass}
                contentEditable={true}
                suppressContentEditableWarning={true}
                style={{width: props.width}}
                data-cell={currentCell}
                onClick={event => {
                    if (event.shiftKey) {
                        props.setGroupActiveCell(currentCell, prevCell)
                    } else {
                        props.setActiveCell([currentCell])
                    }
                }}
                onFocus={(event) => {
                    prevCell = event.relatedTarget ? event.relatedTarget.dataset.cell : '1:0'
                }}
                onBlur={(event) => {
                    props.setDataState(currentCell, event.target.innerHTML)
                }}
                onKeyDown={(event) => {
                    if (event.code === 'Enter' && !event.shiftKey) {
                        event.preventDefault()
                    }
                }}
                onInput={(event) => props.setFormula(event.target.innerHTML)}
                dangerouslySetInnerHTML={{__html: props.data}}
            />
        </div>
    )
}

export default React.memo(Cell)