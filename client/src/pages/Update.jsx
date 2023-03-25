import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useParams, Location } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'

const Update = () => {

    // const bookId = useParams()
    const bookId = location.pathname.split("/")[2]
    
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

    const updateBook = () => {
        try {
          axios.put(`http://localhost:3001/books/` + bookId, data)
        } catch {
          console.error(`Failed to update a book with this id: ${bookId}`)
        }
    }

    return(
        <div>
            <h3>Update The Book</h3>
            <Formik
                initialValues={initialValues}
                // onSubmit={onSubmit}
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

                    <button type="submit" onClick={updateBook}> Update Book</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Update