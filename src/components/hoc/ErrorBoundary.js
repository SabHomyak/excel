import React from "react"
import Login from "../Login/Login";
import {Link, withRouter} from "react-router-dom";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null}
    }

    static getDerivedStateFromError(error) {
        return {error: error.message}
    }

    componentDidCatch(error, errorInfo) {
        this.state = {error: null}
    }

    render() {
        if (this.state.error) {
            switch (this.state.error) {
                case "401":
                    return <a href={"/dashboard"}>lohiiin123</a>
                default:
                    return <div>Something went wrong...</div>
            }
        }
        return this.props.children
    }
}


export default ErrorBoundary