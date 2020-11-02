import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
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
  phNumbersArray: [''],
};

const savedValues = {
  name: 'Dayana',
  email: 'dayanasog23@gmail.com',
  channel: 'Dayana Sog',
  comments: 'asd',
  address: 'Rua Chafariz',
  social: {
    facebook: 'FB',
    twitter: 'TT',
  },
  phoneNumbers: ['935030016', '999888777'],
  phNumbersArray: ['333333333'],
};

const onSubmit = (values, onSubmitProps) => {
  console.log('onSubmit', values);
  console.log('onSubmitProps', onSubmitProps);

  //Faz com que o submit button fique indisponível se estiver enviado o formulário
  onSubmitProps.setSubmitting(false);
  //Reset os inputs após o formulário ser submetido;
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required!'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required!'),
  channel: Yup.string().required('Channel is required!')
})

function YoutubeForm() {
  const [formValues, setFormValues] = useState(null);

  return (
    <Container>
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}

        //Informa que depois de alterado não pode reainicializar
        enableReinitialize
      >
        {formik => {
          console.log(formik);

          return (
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
                        <input type="text" id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div>
                            {meta.error}
                          </div>
                        ) : null}
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

              <div className="form-control">
                <label htmlFor="phNumbersArray">List of phone numbers</label>
                <FieldArray name="phNumbersArray">
                  {
                    fieldArrayProps => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { phNumbersArray } = values;

                      return (
                        <div>
                          {phNumbersArray.map((phNumber, index) => (
                            <div key={index}>
                              <Field name={`phNumbersArray[${index}]`} />
                              {index > 0 && (
                                <button type="button" onClick={() => remove(index)} > - </button>
                              )}
                              <button type="button" onClick={() => push('')} > + </button>
                            </div>
                          ))}
                        </div>
                      );
                    }
                  }
                </FieldArray>
              </div>

              <button
                className="button"
                type="button"
                onClick={() => setFormValues(savedValues)}
              >Load save data</button>

              <button
                className="button"
                type="reset"
              >Reset</button>

              <button
                className="button"
                type="submit"
                //Faz com que o submit button só fique disponível se não houver errors
                // disabled={!formik.isValid}

                //Faz com que o submit button fique indisponível se estiver enviado o formulário
                disabled={!formik.isValid || formik.isSubmitting}
              >Submit</button>
            </Form>
          )
        }}

      </Formik>
    </Container>
  );
}

export default YoutubeForm;