import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const Auth = () => {

  const [ addUser, setAddUser ] = useState({
    username: "",
    password: "",
    email: ""
})

  const initialValues = {
    username: "",
    password: "",
    email: ""
  }
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("You must input a Username!"),
    password: Yup.number().required("You must input a Password!"),
    email: Yup.string().email().required("You must input an Email!"),
  })
  
  const onSubmit = (data) => {
    axios.post(`http://localhost:3001/auth`, data).then((response) => {
        setAddUser(response.data)
        console.log('User Added!!!')
    })
  }

  return (
    <div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainer">
                    <label>UserName: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        name="username"
                        placeholder="(Ex. Title...)"
                    />
                    <label>Password: </label>
                    <ErrorMessage name="password" component="span" />
                    <Field
                        name="password"
                        placeholder="(Ex. Post...)"
                    />
                    <label>Email: </label>
                    <ErrorMessage name="email" component="span" />
                    <Field
                        name="email"
                        placeholder="(Ex. John123...)"
                    />

                    <button type="submit"> Add User</button>
                </Form>
            </Formik>
        </div>
  )
}

export default Auth