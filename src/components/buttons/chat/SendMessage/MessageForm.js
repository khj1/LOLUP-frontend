import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import './MessageForm.scss';

function MessageForm () {
  const initialValues = { 
    message: ''
  } 

  const validationSchema = Yup.object({ 
    message: Yup.string().required('')
  })

  const onSubmit = values => {
    console.log('Send', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form> 
            <FormikControl
              control='input'
              type='message' 
              name='message'
              placeholder="메세지를 입력하세요."
            />
            <button type='submit' disabled={!formik.isValid}>Submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default MessageForm
