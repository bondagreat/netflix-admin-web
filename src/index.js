import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoadingContextProvider from './contexts/LoadingContext';
// import { getAccessToken } from './utils/local-storage';
// import { fetchAuthUser } from './redux/authSlice';

// if (getAccessToken()) {
//   store.dispatch(fetchAuthUser())
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <LoadingContextProvider>
      <App />
    </LoadingContextProvider>
  </Provider>
  // </React.StrictMode>
);
