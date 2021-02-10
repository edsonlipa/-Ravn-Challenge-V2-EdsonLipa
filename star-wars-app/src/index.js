import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';
import App from './App';
import 'bootswatch/dist/flatly/bootstrap.min.css'; // Added this :boom:

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
