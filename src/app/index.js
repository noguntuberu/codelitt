import React from 'react';
import { GuestLayout } from './guest';
import { MemberLayout } from './member';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  return <div>
    {true ? <MemberLayout /> : <GuestLayout />}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      // hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
};