import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from "./Components/navbar";
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import CreateCharity from './pages/createCharity2';
import SubmitThanks from './pages/submitThanks';
import CharityExpand from './pages/charityExpand';
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/submitThanks" element={<SubmitThanks />} />
            <Route path="/createCharity" element={<CreateCharity />} />
            <Route path="/charityExpand" element={<CharityExpand />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}
