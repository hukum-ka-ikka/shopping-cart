import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const totalProducts = useSelector((state) => state.cart.count);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const products = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center min-h-[80vh]">
      <div className="flex w-[60vw] mt-2 justify-center lg:justify-start">
        {products.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col gap-6">
              <p className="font-semibold">Your cart is empty!</p>
              <button
                className="bg-[#4F9E5E] text-white py-1 rounded-md text-sm font-semibold"
                onClick={() => navigate("/")}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 p-2 lg:flex-row relative">
            <div className="flex flex-col lg:w-[70%]">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>

            <div className="flex flex-col justify-between w-full lg:w-[35%] lg:absolute lg:h-[80vh] lg:ml-[550px] ">
              <div className="mt-7">
                <p className="text-md font-bold text-[#4f9e5e] lg:mt-5">
                  YOUR CART
                </p>
                <p className="text-3xl font-bold text-[#4f9e5e]">SUMMARY</p>
                <p className="mt-4 text-sm font-semibold">
                  Total Items: <span>{` ${totalProducts}`}</span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">
                  Total Amount:{" "}
                  <span className="font-bold">{` ₹${totalAmount.toFixed(
                    2
                  )}`}</span>
                </p>
                <button className="bg-[#4f9e5e] text-white text-sm rounded-lg py-1 px-2 w-full active:bg-[#2d5a35]">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
