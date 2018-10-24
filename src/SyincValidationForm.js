import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
}

const warn = values => {
    const warnings = {}
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span style={{color:'red', 'fontWeight':'bold'}}>{error}</span>) ||
                        (warning && <span style={{color:'orange', 'fontWeight':'bold'}}>{warning}</span>))}
            </div>
        </div>
    )

const SyncValidationForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <Form onSubmit={handleSubmit}>
            <Field
                name="username"
                type="text"
                component={renderField}
                label="username"
            />
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field name="age" type="number" component={renderField} label="Age" />
            <Form.Field>
                <Button type="sumbit" disabled={submitting} content="Submit" />
                <Button type="button" disabled={pristine || submitting} onClick={reset} content="Clear Values" />
            </Form.Field>
        </Form>
    )
}

export default reduxForm({
    form: 'syncValidation',
    validate,
    warn
})(SyncValidationForm)