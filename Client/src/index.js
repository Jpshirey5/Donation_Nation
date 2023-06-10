// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

// reportWebVitals();


import { ApolloClient, ApolloProvider } from '@apollo/client';
import { InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

// Initialize ApolloClient
const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

// injectStyles();

// Find our rootElement or throw and error if it doesn't exist
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

// Pass the ApolloClient instance to the ApolloProvider component
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

reportWebVitals();