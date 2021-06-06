import React from 'react';
import App from './App';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './Redux/index'



const httpLink = createHttpLink({
    uri: "http://localhost:5000"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));


export default (

    <ApolloProvider client={client}>
        <Provider store={store}>

            <BrowserRouter >

                <App />

            </BrowserRouter>
        </Provider >

    </ApolloProvider>

)