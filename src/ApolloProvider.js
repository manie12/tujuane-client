import React from 'react';
import App from './App';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './Redux/index'
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: "http://localhost:5000"
});



const authLink = setContext(() => {
    const localToken = JSON.parse(localStorage.getItem("jwtToken"))
    console.log(localToken.token)

    return {
        headers: {
            Authorization: localToken ? `Bearer ${localToken.token}` : ""
        }
    }
})


const client = new ApolloClient({
    link: authLink.concat(httpLink),
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