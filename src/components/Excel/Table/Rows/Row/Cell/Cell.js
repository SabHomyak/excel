import React, {useCallback, useEffect, useMemo, useRef} from "react";
import classes from './cell.module.scss'


const Cell = (props) => {

    const currentCell = props.position
    let prevCell = null
    let div = useRef()
    let text = props.data ? props.data.text : ''
    let style = props.data ? props.data.style : ''
    const activeClass = props.isActive ? classes.selected : ''
    useEffect(() => {
        if (props.isActive) {
            props.setCurrentText(text)
            div.current.focus()
            props.setStyleCell(style)
        }
    }, [props.isActive, style])
    return (
        <div className={classes.rowData}>
            <div
                ref={div}
                className={classes.cell + ' ' + activeClass}
                contentEditable={true}
                suppressContentEditableWarning={true}
                style={{width: props.width, ...style}}
                data-cell={currentCell}
                onClick={event => {
                    if (event.shiftKey) {
                        props.setGroupActiveCell(currentCell, prevCell)
                    } else {
                        if (!props.isActive) {
                            props.setActiveCell([currentCell])
                        }
                    }
                }}
                onFocus={(event) => {
                    prevCell = event.relatedTarget ? event.relatedTarget.dataset.cell : '1:0'
                }}
                onBlur={(event) => {
                    let currText = event.target.innerHTML
                    if (text !== currText && currText !== '') {
                        props.setDataState(currentCell, event.target.innerHTML)
                    }
                }}
                onKeyDown={(event) => {
                    if (event.code === 'Enter' && !event.shiftKey) {
                        event.preventDefault()
                    }
                }}
                onInput={(event) => props.setCurrentText(event.target.innerHTML)}
                dangerouslySetInnerHTML={{__html: text}}
            />
        </div>
    )
}

export default React.memo(Cell)
