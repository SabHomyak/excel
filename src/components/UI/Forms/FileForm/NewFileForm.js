import {Field, Form} from "react-final-form";
import React from "react";
import classes from "./newFileForm.module.scss"


const required = value => (value ? undefined : 'Required')
const composeValidators = (...validators) => value => {
    return validators.reduce((error, validator) => error || validator(value), undefined)
}

const NewFileForm = (props) => {
    return (
        <div
        >
            <Form
                onSubmit={props.onSubmit}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="filename"
                            validate={composeValidators(required)}
                        >
                            {({input, meta}) => (
                                <div>
                                    <label>Название таблицы: </label>
                                    <input {...input}
                                           type="text"
                                           placeholder="Название таблицы"
                                           className={classes.input}
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div className={classes.buttons}>
                            <button type="submit" className={classes.button} disabled={submitting}>
                                Ок
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}
export default NewFileForm
