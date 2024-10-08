import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';
import Products from './components/products/Products';
import ProductPage from './components/products/ProductPage';
import { ROUTES } from './utils/routes';
import Profile from './components/auth/Profile';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


const router = createHashRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<h1>Error!</h1>,
    children:[
      {
        path:"/",
        element: <h1>Hello!</h1>
      },
      {
        path:ROUTES.PRODUCTS,
        element:<Products />,
      },
      {
        path:ROUTES.PRODUCT,
        element:<ProductPage />
      },
      {
        path:ROUTES.PROFILE,
        element:<Profile />
      },
      {
        path:ROUTES.LOGIN,
        element:<Login />
      },
      {
        path:ROUTES.REGISTER,
        element:<Register />
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
