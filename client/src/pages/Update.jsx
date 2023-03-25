import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Update = () => {

    const initialValues = {
        title: "",
        descr: "",
        price: ""
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string(),
        descr: Yup.string(),
        price: Yup.number()
    })

    return(
        <div>
            <h3>Update The Book</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainer">
                    <label>Title: </label>
                    <ErrorMessage name="title" component="span" />
                    <Field
                        name="title"
                        placeholder="(Ex. Title...)"
                    />
                    <label>Description: </label>
                    <ErrorMessage name="descr" component="span" />
                    <Field
                        name="descr"
                        placeholder="(Ex. Post...)"
                    />
                    <label>price: </label>
                    <ErrorMessage name="price" component="span" />
                    <Field
                        name="price"
                        placeholder="(Ex. John123...)"
                    />

                    <button type="submit"> Update Book</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Update