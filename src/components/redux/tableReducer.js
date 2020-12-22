const SET_ACTIVE_CELL = 'SET_ACTIVE_CELL'
const SET_DATASTATE = 'SET_DATASTATE'
const SET_FORMULA = 'SET_FORMULA'
const SET_COLSTATE = 'SET_COLSTATE'
const SET_ROWSTATE = 'SET_ROWSTATE'

const initialState = {
    title: 'Новая таблица',
    colState: {1: 500, 0: 200},
    rowState: {1: 100, 2: 100},
    dataState: {
        '1:0': 'supertext',
        '1:1': 'kak on eto pridumal??',
        '2:1': 'kak on eto pridumal??'
    },
    formula: 'formula1',
    activeCell: '1:0'
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_CELL:
            return {
                ...state,
                activeCell: action.cell,
                formula: state.dataState[action.cell]
            }
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
export const setColState = (col, width) => ({type: SET_COLSTATE, col, width})
export const setRowState = (row, height) => ({type: SET_ROWSTATE, row, height})
export const setDataState = (cell, value) => ({type: SET_DATASTATE, cell, value})
export const setFormula = (value) => ({type: SET_FORMULA, value})