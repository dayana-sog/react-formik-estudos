import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  justify-content: center;

  label {
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
  }

  input[type='text'],
  input[type='email'],
  textarea {
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .button {
    border: none;
    padding: 10px;
    border-radius: 10px;
    background: #9878ca;
    color: #fff;
    cursor: pointer;
  }

  .form-control {
    margin-bottom: 20px;
  }

  .error {
    margin-top: -15px;
    color: red;
  }
`;
