import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'semantic-ui-react'

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>First Name</label>
                <Field
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First Name" />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <Field
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <Field
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Email" />
            </Form.Field>
            <Form.Group inline>
                <label>Sex</label>
                <label>
                    <Field
                        name="sex"
                        component="input"
                        type="radio"
                        value="male"
                    />{' '}
                    Male
                </label>
                <label>
                    <Field
                        name="sex"
                        component="input"
                        type="radio"
                        value="female"
                    />{' '}
                    Female
                </label>
            </Form.Group>
            <label>Favorite Color</label>
            <Field name="favoriteColor" component="select">
                <option />
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
            </Field>
            <Form.Field>
                <label htmlFor="employes">Employed</label>
                <Field
                    name="employed"
                    id="employed"
                    component="input"
                    type="checkbox" />
            </Form.Field>
            <Form.Field>
                <label>Notes</label>
                <Field name="notes" component="textarea" />
            </Form.Field>
            <Form.Field>
                <Button type='submit' disabled={pristine || submitting} content='Sumbit' />
                <Button type='button' disabled={pristine || submitting} onClick={reset} content='Clear Values' />
            </Form.Field>
        </Form>
    )
}

export default reduxForm({ form: 'simple' })(SimpleForm)