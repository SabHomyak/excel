import React, {useRef} from "react";
import classes from "./modal.module.scss"
import {connect} from "react-redux";
import {useHistory} from "react-router-dom"
import {setShow} from "../../redux/modalReducer";


const Modal = ({show, setShow, config, Form}) => {
    let history = useHistory()
    let modalDiv = useRef(null)
    const close = () => {
        setShow(false)
    }
    const task = async (confirmed) => {
        if (confirmed) {
            if (config.callback) {
                if (config.callback.constructor.name === 'AsyncFunction') {
                    await config.callback()
                } else{
                    config.callback()
                }
            }
            if (config.redirect) {
                history.push(config.redirect)
            }
        }

    }
    return (
        <>

            <div ref={modalDiv}
                 className={classes.modal}
                 style={{display: show ? 'block' : 'none'}}
                 onClick={(event) => event.target === event.currentTarget ? close() : null}
            >

                <div className={classes.modalContent}>
                    <div className={classes.modalHeader}>
                        <h2>{config.text}</h2>
                        <span
                            className={classes.close}
                            onClick={close}
                        >&times;</span>
                    </div>

                    <div className={classes.modalBody}>
                        {Form ? <Form onSubmit={config.callback}/> :
                            <>
                                <button
                                    className={classes.btn}
                                    onClick={() => {
                                        close()
                                        task(true)
                                    }}
                                >Ок
                                </button>
                                <button className={classes.btn}
                                        onClick={() => {
                                            close()
                                            task(false)
                                        }}
                                >Отмена
                                </button>
                            </>
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        show: state.modal.show,
        config: state.modal.config,
        Form: state.modal.form
    }
}
export default connect(mapStateToProps, {
    setShow
})(Modal)
