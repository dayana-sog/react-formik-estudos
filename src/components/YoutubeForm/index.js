import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


import { Container } from './styles';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

// const validate = values =>  {
//   let errors = {};

//   if (!values.name) {
//     errors.name= 'Name is required!'   
//   }

//   if (!values.email) {
//     errors.email= 'Email is required!'   
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format'
//   }

//   if (!values.channel) {
//     errors.channel= 'Channel is required!'   
//   }

//   return errors;
// }

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
  const formik = useFormik({
    initialValues,
    onSubmit, 
    validationSchema,
    //validate,
  });

  return (
    <Container>
      <div>
        <form onSubmit={formik.handleSubmit} >
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? 
            <div className="error">{formik.errors.name}</div> : 
            null
          } 

          <label htmlFor="name">Email</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.email} 
          />
          {formik.errors.email && formik.touched.email ? 
            <div className="error">{formik.errors.email}</div> : 
            null
          } 

          <label htmlFor="name">Channel</label>
          <input 
            type="text" 
            id="channel" 
            name="channel" 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel ? 
            <div className="error">{formik.errors.channel}</div> :
            null
          } 

          <button className="button" type="submit" >Submit</button>
        </form>
      </div>
    </Container>
  );
}

export default YoutubeForm;