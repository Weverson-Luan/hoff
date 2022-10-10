import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NativeBaseProvider} from 'native-base';

// style provider
import theme from './src/styles/colors/theme';

// routes main
import {AppRoutes} from './src/routes/index';

const App = () => {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

/**
 * EXPORT
 */
export default App;
