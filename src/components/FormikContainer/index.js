import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikControl from '../FormikControl';

import { Container } from './styles';

function FormikContainer() {
  const dropDownOptions = [
    { key: 'Select option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOsption3' },
  ];

  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOsption3' },
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    description: Yup.string().required('Description is required!'),
    selectOption: Yup.string().required('Select Option is required!'),
    radioOption: Yup.string().required('Radio Option is required!'),
    checkOption: Yup.array().required('Checkbox Option is required!'),
    birthDate: Yup.date().required('Date is required!').nullable(),
  });

  const onSubmit = values => {
    console.log('Form data', values);
    console.log('Saved data', JSON.parse(JSON.stringify(values)));
  };

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
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="textarea"
                label="Description"
                name="description"
              />
              <FormikControl
                control="select"
                label="Select a topic"
                name="selectOption"
                options={dropDownOptions}
              />
              <FormikControl
                control="radio"
                label="Radio topic"
                name="radioOption"
                options={radioOptions}
              />

              <FormikControl
                control="checkbox"
                label="Checkbox topic"
                name="checkOption"
                options={checkboxOptions}
              />

              <FormikControl 
                control="date"
                label="Date Topic"
                name="birthDate"
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

export default FormikContainer;