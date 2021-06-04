import React from 'react';
import { createClient, Provider } from 'urql';
import { Home } from './src/screens/Home';

const client = createClient({
  url: 'https://hasura-social-connect.herokuapp.com/v1/graphql',
  fetchOptions: {
    headers: {
      'x-hasura-admin-secret': '96Q63&ix!wKVthdSV2sX'
    }
  }
});

const App = () => {
  return (
    <Provider value={client}>
      <Home />
    </Provider>
  );
};

export default App;
