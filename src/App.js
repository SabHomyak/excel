import React from "react";
import './App.module.scss'
import Excel from "./components/Excel/ExcelContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import {Provider} from "react-redux";
import {store} from "./components/redux/store";
import Modal from "./components/UI/Modal/Modal";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import ErrorBoundary from "./components/hoc/ErrorBoundary";
import Login from "./components/Login/Login";
import {Redirect} from "react-router-dom"
import ExcelContainer from "./components/Excel/ExcelContainer";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ErrorBoundary>
                    <Switch>
                        <Route path={'/'} exact={true}><ExcelContainer/></Route>
                        <Route path={'/dashboard'}><DashboardContainer/></Route>
                        <Route path={'/login'}><Login/></Route>
                    </Switch>
                    <Modal/>
                </ErrorBoundary>
            </BrowserRouter>

        </Provider>
    );
}

export default App;
