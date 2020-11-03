import React from 'react';

// import FormikContainer from './components/FormikContainer';
import LoginFormik from './pages/LoginFormik';
// import Registration from './pages/Registration';

import { ThemeProvider, theme } from '@chakra-ui/core';

// import EnrolmentFormik from './pages/EnrolmentFormik';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginFormik />
    </ThemeProvider>
  );
}

export default App;
