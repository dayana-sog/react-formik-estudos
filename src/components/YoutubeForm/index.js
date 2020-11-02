import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import TextError from '../TextError';

import { Container } from './styles';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
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

function YoutubeForm() {
  
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
            <ErrorMessage name="name" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="name">Email</label>
            <Field 
              type="text" 
              id="email" 
              name="email" 
            />
            <ErrorMessage name="email" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="name">Channel</label>
            <Field 
              type="text" 
              id="channel" 
              name="channel" 
            />
            <ErrorMessage name="channel" component={TextError} />
          </div>

          <div className="form-control">
            <label htmlFor="comments">Comments</label>
            <Field 
              id="comments"
              name="comments"
              as="textarea"
            />
          </div>

          <div className="form-control">
            <label htmlFor="address">Adress</label>
            <Field 
              name="address"
            >
              {(props) => {
                const { field, form, meta } = props;

                return (
                  <div>
                    <input type="text" id="address" {...field}/>
                    {meta.touched && meta.error ? (
                      <div>
                        {meta.error}
                      </div>
                    ): null}
                  </div>
                )
              }}
            </Field>
          </div>

          <div className="form-control">
            <label htmlFor="facebook">Facebook Profile</label>
            <Field 
              id="facebook"
              name="social.facebook"
              type="text"
            />
          </div>

          <div className="form-control">
            <label htmlFor="twitter">Twitter Profile</label>
            <Field 
              id="twitter"
              name="social.twitter"
              type="text"
            />
          </div>

          <div className="form-control">
            <label htmlFor="primaryPh">Primary phone Number</label>
            <Field 
              id="primaryPh"
              name="phoneNumbers[0]"
              type="text"
            />
          </div>

          <div className="form-control">
            <label htmlFor="secondPh">Second phone Number</label>
            <Field 
              id="secondPh"
              name="phoneNumbers[1]"
              type="text"
            />
          </div>

          <button className="button" type="submit" >Submit</button>
        </Form>
      </Formik>
    </Container>
  );
}

export default YoutubeForm;