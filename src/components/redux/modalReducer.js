export const SET_SHOW = 'SET_SHOW'
export const SET_TEXT = 'SET_TEXT'
export const OPEN_MODAL = 'OPEN_MODAL'
export const SET_TASK = 'SET_TASK'


const initialState = {
    show: false,
    config: {
        text: 'Сохранить файл?',
        redirect: '',
        callback:()=>{}
    }
}
const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SHOW:
            return {...state, show: action.show}
        case SET_TEXT:
            return {...state, text: action.text}
        case OPEN_MODAL: {
            return {...state, show: true, config: action.config}
        }
        default:
            return state
    }

}
export default modalReducer

export const setShow = (show) => ({type: SET_SHOW, show})
export const setText = (text) => ({type: SET_TEXT, text})
export const openModal = (config) => ({type: OPEN_MODAL, config})


