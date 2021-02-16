export const SET_AUTHORIZED = 'SET_AUTHORIZED'
export const SET_USERNAME = 'SET_USERNAME'
export const SET_AUTHKEY = 'SET_AUTHKEY'
export const EXIT = 'EXIT'
export const LOGIN = 'LOGIN'

const initialState = {
    authorized: false,
    username: '',
    authKey: ''

}
const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTHORIZED:
            return {...state, authorized: action.authorized}
        case EXIT:
            return initialState
        case LOGIN:
            return {...state, authorized: true, username: action.username, authKey: action.authKey}
        default:
            return state
    }

}
export default userReducer

export const setAuthorized = (authorized) => ({type: SET_AUTHORIZED, authorized})
export const setUsername = (username) => ({type: SET_USERNAME, username})
export const setAuthKey = (authKey) => ({type: SET_AUTHORIZED, authKey})
export const exit = () => ({type: EXIT})
export const login = (username, authKey) => ({type: LOGIN, username, authKey})



