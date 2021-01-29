export const SET_SHOW = 'SET_SHOW'
export const SET_TEXT = 'SET_TEXT'
export const OPEN_MODAL = 'OPEN_MODAL'
export const SET_FORM = 'SET_FORM'
const initialState = {
    show: false,
    config: {
        text: 'Test',
        redirect: '',
        callback: () => {
        }
    },
    form: null
}
const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SHOW:
            return {...state, show: action.show}
        case SET_TEXT:
            return {...state, text: action.text}
        case OPEN_MODAL:
            return {...state, show: true, config: action.config,form:action.form}
        default:
            return state
    }

}
export default modalReducer

export const setShow = (show) => ({type: SET_SHOW, show})
export const setText = (text) => ({type: SET_TEXT, text})
export const openModal = (config, form) => ({type: OPEN_MODAL, config, form})


