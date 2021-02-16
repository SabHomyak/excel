import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {deleteExcel, updateExcel, setInitialState, setTitle, testDispatch} from "../../redux/tableReducer";
import {openModal, setShow} from "../../redux/modalReducer";


const HeaderContainer = (props) => {
    const callback = props.changed ?
        () => {
            props.openModal({
                text: 'Сохранить файл?',
                redirect: 'dashboard',
                callback: async () => {
                    await props.updateExcel()
                }
            })
        } :
        null
    // const callback = () => {
    //     console.log(11)
    // }
    return <Header {...props} callback={callback}/>
}

const mapStateToProps = state => {

    return {
        title: state.table.title,
        idFile: state.table.id,
        changed: state.table.changed
    }
}

export default connect(mapStateToProps, {
    setTitle,
    setInitialState,
    openModal,
    updateExcel,
    deleteExcel,
    setShow
})(HeaderContainer)