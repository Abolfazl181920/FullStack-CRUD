import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Add = () => {

    const [ addBook, setAddBook ] = useState({
        title: "",
        descr: "",
        price: ""
    })

    const initialValues = {
        title: "",
        descr: "",
        price: ""
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title!"),
        descr: Yup.string().required("You must input a Description!"),
        price: Yup.number().required("You must input a Price!"),
    })

    const onSubmit = (data) => {
        axios.post(`http://localhost:3001/books`, data).then((response) => {
            setAddBook(response.data)
            console.log('It Worked!!!')
        })
    }

    return(
        <div>
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

                    <button type="submit"> Add Book</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Add