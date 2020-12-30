const SET_ACTIVE_CELL = 'SET_ACTIVE_CELL'
const SET_GROUP_ACTIVE_CELL = 'SET_GROUP_ACTIVE_CELL'
const SET_DATASTATE = 'SET_DATASTATE'
const SET_FORMULA = 'SET_FORMULA'
const SET_COLSTATE = 'SET_COLSTATE'
const SET_ROWSTATE = 'SET_ROWSTATE'

const initialState = {
    title: 'Новая таблица',
    sizeRows: 3,
    sizeCols: 3,
    colState: {1: 500, 0: 200},
    rowState: {1: 100, 2: 100},
    dataState: {
        '1:0': 'supertext',
        '1:1': 'kak on eto pridumal??',
        '2:1': 'kak on eto pridumal??'
    },
    formula: 'formula1',
    activeCell: ['1:0'],
    prevCell: ''
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CELL:
            // let formula
            // if (state.dataState[action.cell]) {
            //     formula = state.dataState[action.cell].replaceAll('<br>', "")
            // }
            return {
                ...state,
                activeCell: action.cell,
                prevCell: '',
                formula:state.dataState[action.cell]
            }
        case SET_GROUP_ACTIVE_CELL:
            let prevCell = state.prevCell === '' ? action.prevCell : state.prevCell

            let activeCells = generateActiveCells(prevCell, action.currentCell)
            return {...state, activeCell: activeCells, prevCell, formula: ''}
        case SET_DATASTATE:
            let dataState = {...state.dataState}
            dataState[action.cell] = action.value
            return {
                ...state, dataState
            }
        case SET_FORMULA:
            return {...state, formula: action.value}
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
export const setFormula = (value) => ({type: SET_FORMULA, value})

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