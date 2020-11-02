import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import { Container } from './styles';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = values => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required!'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required!'),
  channel: Yup.string().required('Channel is required!')
})

function OldYoutubeForm() {
  
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form >
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field 
              type="text" 
              id="name" 
              name="name" 
              // onChange, onBlur, Value
              // {...formik.getFieldProps('name')}
            />
            <ErrorMessage name="name" />
          </div>

          <div className="form-control">
            <label htmlFor="name">Email</label>
            <Field 
              type="text" 
              id="email" 
              name="email" 
            />
            <ErrorMessage name="email" />
          </div>

          <div className="form-control">
            <label htmlFor="name">Channel</label>
            <Field 
              type="text" 
              id="channel" 
              name="channel" 
            />
            <ErrorMessage name="channel" />
          </div>

          <button className="button" type="submit" >Submit</button>
        </Form>
      </Formik>
    </Container>
  );
}

export default OldYoutubeForm;