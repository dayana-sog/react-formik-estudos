import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikControl from '../../components/FormikControl';

import { Container } from './styles';

const radioOptions = [
  { key: 'Email', value: 'emailmoc' },
  { key: 'Phone', value: 'telephonemoc' },
];

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  contactMode: '',
  phone: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirmation is required'),
  contactMode: Yup.string().required('Option Contact is required'),
  phone: Yup.string().when('contactMode', {
    is: 'telephonemoc',
    then: Yup.string().required('Phone is required')
  }),
});

const onSubmit = values => console.log('Form submit', values);

function Registration() {
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
                control="input"
                label="Email"
                type="email"
                name="email"
              />

              <FormikControl
                control="input"
                label="Password"
                type="password"
                name="password"
              />

              <FormikControl
                control="input"
                label="Confirm Password"
                type="password"
                name="passwordConfirmation"
              />

              <FormikControl
                control="radio"
                label="Mode of contact"
                name="contactMode"
                options={radioOptions}
              />

              <FormikControl
                control="input"
                label="Phone"
                type="text"
                name="phone"
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

export default Registration;