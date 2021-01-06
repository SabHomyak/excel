import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import tableReducer, {ACTIONS} from "./tableReducer";


const rootReducer = combineReducers({
    table: tableReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localStorageMiddleware = ({getState}) => {
    return next => action => {
        const result = next(action);
        if (ACTIONS.includes(result.type)) {
            const tableState = {
                rowState: getState().table.rowState,
                colState: getState().table.colState,
                dataState: getState().table.dataState,
                title:getState().table.title
            }
            localStorage.setItem('tableState', JSON.stringify(tableState))
        }
        return result;
    };
};


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(localStorageMiddleware)))
