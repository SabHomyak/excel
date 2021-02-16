import React from "react";
import {Link} from "react-router-dom";
import NewFileForm from "../UI/Forms/FileForm/NewFileForm";
import LoginForm from "../UI/Forms/LoginForm/LoginForm";
import userApi from "../../Api/UserApi/userApi";
import {FORM_ERROR} from "final-form";
import {useHistory} from "react-router-dom"
import {connect} from "react-redux";
import {login, setUsername} from "../redux/userReducer";

const Login = (props) => {
    let history = useHistory()
    return <LoginForm onSubmit={async (e) => {
        const str = btoa(e.login + ':' + e.password)
        let res = await userApi.auth(str)
        if (res.status === 401) {
            return {[FORM_ERROR]: 'Неверный логин или пароль!'}
        } else {
            props.login(res.username, str)
            // history.push("/dashboard")
        }
    }
    }/>
}
export default connect(null, {login})(Login)