import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import FormikControl from '../../components/FormikControl';

import { Container } from './styles';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is requires'),
});

const onSubmit = values => console.log('Form submit', values);

function LoginFormik() {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {
          formik =>
            <Form>
              <FormikControl
                control="chakrainput"
                label="Email"
                type="email"
                name="email"
              />

              <FormikControl
                control="chakrainput"
                label="Password"
                type="password"
                name="password"
              />

              <button
                type="submit"
                className="button"
                disabled={!formik.isValid}
              >Submit</button>
            </Form>
        }
      </Formik>
    </Container>
  );
}

export default LoginFormik;