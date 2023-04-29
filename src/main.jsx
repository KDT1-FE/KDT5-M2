import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '~/routes';
import { MyContext } from '~/store/MyContext';
import '~/common/common.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContext>
    <RouterProvider router={router} />
  </MyContext>
);
