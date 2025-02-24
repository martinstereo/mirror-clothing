import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { Elements } from '@stripe/react-stripe-js';
import App from './App';
import { persistor, store } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';
import { PersistGate } from 'redux-persist/integration/react';
/* import * as serviceWorkerRegistration from './serviceWorkerRegistration'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
/* // Unregister the service worker in development
if (process.env.NODE_ENV === 'development') {
  serviceWorkerRegistration.unregister();
} else {
  serviceWorkerRegistration.register();
} */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
