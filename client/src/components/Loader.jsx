import React from 'react';
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <>
      <style jsx>
        {`
          .loader {
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(17, 17, 17, 0.9));
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
          }
          .loader-content {
            background: radial-gradient(circle, rgba(34, 34, 34, 1) 0%, rgba(17, 17, 17, 1) 100%);
            padding: 20px 40px;
            border-radius: 20px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .loader-text {
            margin-top: 20px;
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            font-weight: 600;
            color: #f1f1f1;
            text-align: center;
            line-height: 1.4;
          }
        `}
      </style>
      <div className="loader">
        <div className="loader-content">
          <CircularProgress size={60} thickness={5} color="warning" />
          <p className="loader-text">
            Processing your request. <br /> Please wait...
          </p>
        </div>
      </div>
    </>
  );
};

export default Loader;
