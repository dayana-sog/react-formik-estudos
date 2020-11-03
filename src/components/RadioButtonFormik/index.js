import React from 'react';
import { Field, ErrorMessage } from 'formik';

import TextError from '../TextError';

// import { Container } from './styles';

function RadioButtonFormik({ label, name, options, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as={name} id={name} name={name} {...rest}>
        {
          ({ field }) => {
            return options.map(option => {
              return (
                <React.Fragment key={option.key}>
                  <input 
                    type="radio" 
                    id={options.value} 
                    {...field} 
                    value={option.value} 
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              )
            })
          }
        }
      </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButtonFormik;