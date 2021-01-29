import excelFileApi from "../../Api/ExcelFileApi/excelFileApi";

const SET_ACTIVE_CELL = 'SET_ACTIVE_CELL'
const SET_GROUP_ACTIVE_CELL = 'SET_GROUP_ACTIVE_CELL'
const SET_DATASTATE = 'SET_DATASTATE'
const SET_CURRENT_TEXT = 'SET_CURRENT_TEXT'
const SET_COLSTATE = 'SET_COLSTATE'
const SET_ROWSTATE = 'SET_ROWSTATE'
const SET_TITLE = 'SET_TITLE'
const SET_TEXT_STYLE = 'SET_TEXT_STYLE'
const SET_STYLE_CELL = 'SET_STYLE_CELL'
const SET_INITIAL_STATE = 'SET_INITIAL_STATE'


const reHydrateStore = () => {
    if (localStorage.getItem('tableState') !== null) {
        return JSON.parse(localStorage.getItem('tableState')) // re-hydrate the store
    }
}

const initialState = {
    id: 0,
    title: 'Новая таблица',
    sizeRows: 5,
    sizeCols: 5,
    colState: {},
    rowState: {},
    dataState: {},
    currentText: '',
    activeCell: '1:0',
    prevCell: '1:0',
    currentStyleCell: {}
}
const tableReducer = (state = {
    ...initialState,
    ...reHydrateStore()
}, action) => {
    switch (action.type) {
        case SET_ACTIVE_CELL:
            let prevCell = typeof state.activeCell === "string" ? state.activeCell : action.cell
            return {
                ...state,
                activeCell: action.cell,
                prevCell
            }
        case SET_GROUP_ACTIVE_CELL:
            let prev = state.prevCell
            if (typeof state.activeCell === 'string') {
                prev = state.activeCell
            }
            let activeCells = generateActiveCells(prev, action.currentCell)
            return {...state, activeCell: activeCells, currentText: '', prevCell: prev}
        case SET_DATASTATE:
            let dataState = {...state.dataState}
            let newObj = {...dataState[action.cell]}
            newObj.text = action.value
            if (newObj.style === undefined) {
                newObj.style = {}
            }
            dataState[action.cell] = newObj
            return {
                ...state, dataState
            }
        case SET_CURRENT_TEXT:
            return {...state, currentText: action.text}
        case SET_TEXT_STYLE:
            let updatedData = {...state.dataState}
            if (typeof state.activeCell === 'object') {
                let cells = state.activeCell
                for (let row in cells) {
                    let cols = cells[row]
                    cols.forEach(col => {
                        let cell = `${row}:${col}`
                        let oldObj = state.dataState[cell]
                        let newObj = oldObj ?
                            {...oldObj} :
                            {
                                text: '',
                                style: {}
                            }

                        newObj.style = {...newObj.style, ...action.style}
                        updatedData[cell] = newObj
                    })
                }
            } else {
                let oldObj = state.dataState[state.activeCell]
                let newObj = oldObj ?
                    {...oldObj} :
                    {
                        text: '',
                        style: {}
                    }
                newObj.style = {...newObj.style, ...action.style}
                updatedData  [state.activeCell] = newObj
            }
            return {...state, dataState: updatedData}
        case SET_STYLE_CELL:
            return {...state, currentStyleCell: action.style}
        case SET_TITLE:
            return {...state, title: action.title}
        case SET_COLSTATE:
            return {...state, colState: {...state.colState, [action.col]: action.width}}
        case SET_ROWSTATE:
            return {...state, rowState: {...state.rowState, [action.row]: action.height}}
        case SET_INITIAL_STATE:
            return {...initialState, ...action.state}
        default:
            return state
    }

}
export default tableReducer

export const setActiveCell = (cell) => ({type: SET_ACTIVE_CELL, cell})
export const setGroupActiveCell = (currentCell, prevCell) => ({type: SET_GROUP_ACTIVE_CELL, currentCell, prevCell})
export const setColState = (col, width) => ({type: SET_COLSTATE, col, width})
export const setRowState = (row, height) => ({type: SET_ROWSTATE, row, height})
export const setDataState = (cell, value) => ({type: SET_DATASTATE, cell, value})
export const setCurrentText = (text) => ({type: SET_CURRENT_TEXT, text})
export const setTextStyle = (style) => ({type: SET_TEXT_STYLE, style})
export const setStyleCell = (style) => ({type: SET_STYLE_CELL, style})
export const setTitle = (title) => ({type: SET_TITLE, title})
export const setInitialState = (state) => ({type: SET_INITIAL_STATE, state})
export const updateExcel = () => async (dispatch, getState) => {
    const state = getState().table
    const file = {
        excelFileName: state.title,
        jsonData: `${JSON.stringify({
            colState: state.colState,
            dataState: state.dataState,
            rowState: state.rowState
        })}`,
        openedDate: new Date().getTime()
    }
    await excelFileApi.updateFile(state.id,file)
}
export const deleteExcel = (id) => async (dispatch) => {
    await excelFileApi.deleteFile(id)
    localStorage.removeItem('tableState')
    dispatch(setInitialState({}))
}


export const ACTIONS = [
    SET_COLSTATE, SET_ROWSTATE, SET_DATASTATE, SET_TITLE, SET_STYLE_CELL
]

const generateActiveCells = (prevCell, currentCell) => {
    let [prevRow, prevCol] = prevCell.split(':').map(el => parseInt(el))
    let [currRow, currCol] = currentCell.split(':').map(el => parseInt(el))
    if (prevRow > currRow) {
        let data = prevRow
        prevRow = currRow
        currRow = data
    }
    if (prevCol > currCol) {
        let data = prevCol
        prevCol = currCol
        currCol = data
    }
    let activeCells = {}
    for (let row = prevRow; row <= currRow; row++) {
        activeCells[row] = []
        for (let col = prevCol; col <= currCol; col++) {
            // activeCells.push(`${row}:${col}`)
            activeCells[row].push(col)
        }
    }
    return activeCells
}
