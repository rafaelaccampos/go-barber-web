import React from 'react';

import SignIn from './pages/SignIn';
/*  import SignUp from './pages/SignUp';
 */
import GlobalStyle from './styles/global';

import AuthContext from './contexts/AuthContext';

const App: React.FunctionComponent = () => (
  <>
    <AuthContext.Provider value={{ name: 'Rafa' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
