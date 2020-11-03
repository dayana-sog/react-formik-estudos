import React from 'react';
import { Field, ErrorMessage } from 'formik';

import TextError from '../TextError';

function InputFormik({ label, name, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default InputFormik;