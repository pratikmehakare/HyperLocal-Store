import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { addUser } from "../redux/Slices/UserSlice";
import { clearCart } from "../redux/Slices/CartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    const calculatedTotalAmount = cart.reduce((acc, curr) => {
      const itemPrice = parseFloat(curr.price);
      return !isNaN(itemPrice) ? acc + itemPrice : acc;
    }, 0);
    setTotalAmount(calculatedTotalAmount);
  }, [cart]);

  const handleOrder = () =>{
    dispatch(addUser(userName))
    dispatch(clearCart());
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl text-gray-600 font-mono font-semibold mb-4 text-center">
        Your Cart
      </h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="space-y-4 bg-gray-100 p-6 rounded-lg">
            {cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="flex flex-col gap-2 bg-gray-100 p-6 rounded-lg">
            <div className="font-bold text-green-700 text-5xl mb-4">Summary</div>
            <div className="text-gray-700 mb-2">Total Items: {cart.length}</div>
            <div className="text-gray-700 mb-4">Total Amount: ₹ {totalAmount}</div>

            {/* User Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Name:
              </label>
              <input
                type="text"
                placeholder="Type your name to proceed order"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Checkout Button */}
            <Link to="/order">
            <button
              disabled={!userName.trim()}
              onClick={handleOrder}
              className={`w-full text-white rounded font-semibold text-sm py-2 uppercase transition duration-300 ease-in ${
                userName.trim()
                  ? "bg-green-700 hover:bg-gray-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Check Out Now
            </button>
            </Link>

            {/* Shop More Button */}
            <Link to="/">
              <button className="w-full bg-green-700 text-white rounded font-semibold text-sm py-2 uppercase hover:bg-gray-800 transition duration-300 ease-in">
                Shop More
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-lg mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="w-2/12 bg-green-700 text-white rounded font-semibold text-sm py-2 uppercase hover:bg-gray-800 transition duration-300 ease-in"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
