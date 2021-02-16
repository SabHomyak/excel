import {Field, Form} from "react-final-form";
import React from "react";
import classes from "./LoginForm.module.scss"


const required = value => (value ? undefined : 'Required')
const composeValidators = (...validators) => value => {
    return validators.reduce((error, validator) => error || validator(value), undefined)
}

const LoginForm = (props) => {
    return (
        <div
        >
            <Form
                onSubmit={props.onSubmit}
                render={({handleSubmit, submitting, submitError}) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="login"
                            validate={composeValidators(required)}
                        >
                            {({input, meta}) => (
                                <div>
                                    <label>Логин: </label>
                                    <input {...input}
                                           type="text"
                                           placeholder="Логин"
                                           className={classes.input}
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field
                            name="password"
                            validate={composeValidators(required)}
                        >
                            {({input, meta}) => (
                                <div>
                                    <label>Пароль:</label>
                                    <input {...input}
                                           type="password"
                                           placeholder="Пароль"
                                           className={classes.input}
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        {submitError && <span>{submitError}</span>}
                        <div className={classes.buttons}>
                            <button type="submit" className={classes.button} disabled={submitting}>
                                Войти
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}
export default LoginForm
