import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import {ApolloClient,InMemoryCache,HttpLink,from,ApolloProvider} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.map(( {message} ) => {
            alert(`Graphql error ${message}`);
        });
    }
});
  
const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);
  
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
