import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-0m2y6qa40ntj1kf4.us.auth0.com'
      clientId='yHMJ8CAcqNzWAuw0RiHPx8fkUPInXnRW'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);


serviceWorker.unregister();
