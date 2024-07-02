import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reducer from './reducer';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const store = createStore(reducer);

const container = document.getElementById('root'); // Get the container to hook the React app

// Ensure the container is not null
if (container) {
  const root = createRoot(container); // Create a root if container is not null

  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}