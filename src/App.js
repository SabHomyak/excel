import React from "react";
import './App.module.scss'
import Excel from "./components/Excel/ExcelContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import {createStore} from "redux";
import tableReducer from "./components/redux/tableReducer";
import {Provider} from "react-redux";
import {store} from "./components/redux/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact={true}><Excel/></Route>
                    <Route path={'/dashboard'}><Dashboard/></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
