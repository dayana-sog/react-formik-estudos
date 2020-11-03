import React from 'react';

import InputFormik from '../InputFormik';
import TextArea from '../Textarea';
import SelectFormik from '../SelectFormik';
import RadioButtonFormik from '../RadioButtonFormik';
import CheckboxFormik from '../CheckboxFormik';
import DatePicker from '../DatePicker';
import ChakraInput from '../ChakraInput';

// import { Container } from './styles';

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <InputFormik {...rest} />

    case 'textarea':
      return <TextArea {...rest} />

    case 'select':
      return <SelectFormik {...rest} />

    case 'radio':
      return <RadioButtonFormik {...rest} />

    case 'checkbox':
      return <CheckboxFormik {...rest} />

    case 'date':
      return <DatePicker {...rest} />

    case 'chakrainput':
      return <ChakraInput {...rest} />
      
    default:
      return null;
  }
}

export default FormikControl;