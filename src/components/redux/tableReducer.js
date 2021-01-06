const SET_ACTIVE_CELL = 'SET_ACTIVE_CELL'
const SET_GROUP_ACTIVE_CELL = 'SET_GROUP_ACTIVE_CELL'
const SET_DATASTATE = 'SET_DATASTATE'
const SET_CURRENT_TEXT = 'SET_CURRENT_TEXT'
const SET_COLSTATE = 'SET_COLSTATE'
const SET_ROWSTATE = 'SET_ROWSTATE'
const SET_TITLE = 'SET_TITLE'
const SET_TEXT_STYLE = 'SET_TEXT_STYLE'
const SET_STYLE_CELL = 'SET_STYLE_CELL'


const reHydrateStore = () => {
    if (localStorage.getItem('tableState') !== null) {
        return JSON.parse(localStorage.getItem('tableState')) // re-hydrate the store
    }
}
const initialStateFromSessionStorage = reHydrateStore()

const initialState = {
    title: 'Новая таблица',
    sizeRows: 3,
    sizeCols: 5,
    colState: {},
    rowState: {},
    dataState: {
        '1:0': {
            text: 'etto',
            style: {
                textAlign: 'right',
                fontWeight: 'bold'
            }
        }
    },
    currentText: '',
    activeCell: ['1:0'],
    prevCell: '',
    currentStyleCell: {},
    ...initialStateFromSessionStorage
}
const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CELL:
            return {
                ...state,
                activeCell: action.cell,
                prevCell: ''
            }
        case SET_GROUP_ACTIVE_CELL:
            let prevCell = state.prevCell === '' ? action.prevCell : state.prevCell

            let activeCells = generateActiveCells(prevCell, action.currentCell)
            return {...state, activeCell: activeCells, prevCell, formula: ''}
        case SET_DATASTATE:
            let dataState = {...state.dataState}
            dataState[action.cell] = {...dataState[action.cell], text: action.value}
            return {
                ...state, dataState
            }
        case SET_CURRENT_TEXT:
            return {...state, currentText: action.text}
        case SET_TEXT_STYLE:
            let oldObj = state.dataState[state.activeCell]
            let newObj = {...oldObj}
            newObj.style = {...oldObj.style, ...action.style}
            const updatedData = {...state.dataState, [state.activeCell]: newObj}
            return {...state, dataState: updatedData}
        case SET_STYLE_CELL:
            return {...state,currentStyleCell: action.style}
        case SET_TITLE:
            return {...state, title: action.title}
        case SET_COLSTATE:
            return {...state, colState: {...state.colState, [action.col]: action.width}}
        case SET_ROWSTATE:
            return {...state, rowState: {...state.rowState, [action.row]: action.height}}
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


export const ACTIONS = [
    SET_COLSTATE, SET_ROWSTATE, SET_DATASTATE, SET_TITLE,SET_STYLE_CELL
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
    let activeCells = []
    for (let row = prevRow; row <= currRow; row++) {
        for (let col = prevCol; col <= currCol; col++) {
            activeCells.push(`${row}:${col}`)
        }
    }
    return activeCells
}