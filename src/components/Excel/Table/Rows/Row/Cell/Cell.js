import React, {useEffect, useRef, useState} from "react";
import classes from './cell.module.scss'


const Cell = (props) => {
    const [isEditable, setIsEditable] = useState(false)
    const currentCell = props.position
    let prevCell = null
    let div = useRef()
    let text = props.data ? props.data.text : ''
    let style = props.data ? props.data.style : ''
    const activeClass = props.isActive ? classes.selected : ''
    useEffect(() => {
        if (props.isActive) {
            props.setCurrentText(text)
            props.setStyleCell(style)
        }
    }, [props.isActive, style])
    if (isEditable) {
        //without setTimeout Element.focus doesnt work...
        setTimeout(() => {
            div.current.focus()
        })
    }
    return (
        <div className={classes.rowData}>
            <div
                ref={div}
                className={classes.cell + ' ' + activeClass}
                contentEditable={isEditable}
                suppressContentEditableWarning={isEditable}
                style={{width: props.width, ...style}}
                data-cell={currentCell}
                onClick={event => {
                    if (event.shiftKey) {
                        props.setGroupActiveCell(currentCell, prevCell)
                    } else {
                        props.setActiveCell(currentCell)
                    }
                }}
                onDoubleClick={(event) => {
                    setIsEditable(true)
                }}
                onFocus={(event) => {
                    // ni rabotaet:))
                    // console.log(event.relatedTarget)
                    prevCell = event.relatedTarget ? event.relatedTarget.dataset.cell : '1:0'
                }}
                onBlur={(event) => {
                    let currText = event.target.innerHTML
                    if (text !== currText && currText !== '') {
                        props.setDataState(currentCell, event.target.innerHTML)
                    }
                    setIsEditable(false)
                }}
                onKeyDown={(event) => {
                    let isNextLine = event.code === 'Enter' && !event.shiftKey
                    if (isNextLine) {
                        event.preventDefault()
                    }
                    if (event.code === 'Escape' || isNextLine) {
                        event.target.blur()
                    }
                }}
                onInput={(event) => props.setCurrentText(event.target.innerHTML)}
                dangerouslySetInnerHTML={{__html: parse(text)}}
            />
        </div>
    )
}

const parse = (text) => {
    if (text.startsWith('=')) {
        try {
            return eval(text.slice(1))
        } catch (e) {
            return text
        }
    }
    return text
}

export default React.memo(Cell)
