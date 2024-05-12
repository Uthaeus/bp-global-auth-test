import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import UserContextProvider from './store/user-context';
import UsersContextProvider from './store/users-context';
import OrdersContextProvider from './store/orders-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <UsersContextProvider>
        <OrdersContextProvider>
          <App />
        </OrdersContextProvider>
      </UsersContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

