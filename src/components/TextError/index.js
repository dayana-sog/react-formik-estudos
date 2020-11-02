import React from 'react';

import { Container } from './styles';

function TextError(props) {
  return (
    <Container>
      <div className="error">
        {props.children}
      </div>
     </Container>
  );
}

export default TextError;