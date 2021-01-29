export const SET_LIST_FILES = 'SET_LIST_FILES'

const initialState = {
    listFiles:[]
}
const dashboardReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LIST_FILES:
            return {...state, listFiles: action.files}
        default:
            return state
    }

}
export default dashboardReducer

export const setListFiles = (files) => ({type: SET_LIST_FILES, files})



