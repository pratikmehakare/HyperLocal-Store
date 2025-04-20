import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { removeUser } from '../redux/Slices/UserSlice';

const Order = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Order Placed!</h1>
        <p className="text-lg text-gray-700 mb-2">
          Thank you, <span className="font-semibold text-green-700">{user}</span>!
        </p>
        <p className="text-gray-600 mb-6">Your order has been placed successfully.</p>

        <Link to="/">
          <button 
          onClick={()=> dispatch(removeUser())}
          
          className="w-full bg-green-700 text-white font-semibold py-2 rounded hover:bg-gray-800 transition duration-300 ease-in">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Order;
