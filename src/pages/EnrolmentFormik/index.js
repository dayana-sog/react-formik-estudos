import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import FormikControl from '../../components/FormikControl';

import { Container } from './styles';

const dropDownOptions = [
  { key: 'Select option', value: '' },
  { key: 'React', value: 'react' },
  { key: 'Angular', value: 'angular' },
  { key: 'Vue', value: 'vue' },
];

const checkboxOptions = [
  { key: 'HTML', value: 'htmlOption' },
  { key: 'CSS', value: 'cssOption' },
  { key: 'JavaScript', value: 'javaSriptOption' },
];

const initialValues = {
  email: '',
  bio: '',
  course: '',
  skillset: [],
  courseDate: null, 
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  bio: Yup.string().required('Bio is required'),
  course: Yup.string().required('Course is required'),
  skillset: Yup.string().required('Skillset is required'),
  courseDate: Yup.date().required('Course date is required!').nullable(),
});

const onSubmit = values => console.log('Form submit', values);

function EnrolmentFormik() {
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
                control="textarea"
                label="Bio"
                type="text"
                name="bio"
              />

              <FormikControl
                control="select"
                label="Course"
                type="select"
                name="course"
                options={dropDownOptions}
              />

              <FormikControl
                control="checkbox"
                label="SkillSet"
                name="skillset"
                options={checkboxOptions}
              />

              <FormikControl
                control="date"
                label="Course Date"
                name="courseDate"
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

export default EnrolmentFormik;