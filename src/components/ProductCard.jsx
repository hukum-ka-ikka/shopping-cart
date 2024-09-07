import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  addToCart,
  reduceQuantity,
} from "../redux/slices/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const index = cartItems.findIndex((item) => item.id === product.id);

  const quantity = index === -1 ? 0 : cartItems[index].quantity;

  return (
    <div className="flex flex-col justify-between border rounded-xl shadow-md w-[80%] h-[45vh] pt-2 pb-1 flex-wrap md:w-[48%] lg:w-[23.5%] transform transition-transform duration-400 hover:scale-x-110 hover:scale-y-105 hover:shadow-lg">
      <div className="flex flex-col items-center h-[85%] gap-2 px-4">
        <h1 className="text-lg font-bold">
          {product.title.length < 10
            ? product.title
            : `${product.title.substring(0, 10)}...`}
        </h1>
        <div className="w-[70%]">
          <p className="text-xs text-[#747272] text-center">
            {product.description.length < 50
              ? product.description
              : `${product.description.substring(0, 50)}...`}
          </p>
        </div>
        <img src={product.image} className="h-[80%]" loading="lazy"/>
      </div>

      <div className="flex mx-2 justify-between items-center">
        <p className="text-[#4F9E5E] font-bold text-xs">{`₹ ${product.price}`}</p>
        {quantity === 0 ? (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex items-center justify-center text-[0.6rem] font-semibold border-[1.5px] rounded-xl py-2 h-6 text-[#0E121E] border-[#0E121E] w-[50%]"
          >
            <p className="text-[0.6rem] font-semibold -m-2">ADD TO CART</p>
          </button>
        ) : (
          <div className="flex justify-between items-center w-[50%] font-semibold">
            <button
              onClick={() => dispatch(reduceQuantity(product))}
              className="flex justify-center items-center border-[1.5px] border-[#0E121E] rounded-l-xl w-[30%] h-6 pb-1 active:bg-slate-100"
            >
              -
            </button>
            <p className="flex items-center justify-center text-xs   border-t-[1.5px] border-b-[1.5px] w-[40%] h-6 text-center border-[#0E121E]">
              {quantity}
            </p>
            <button
              onClick={() => dispatch(addQuantity(product))}
              className="flex justify-center items-center border-[1.5px] border-[#0E121E] rounded-r-xl w-[30%] h-6 pb-1 font-semibold active:bg-slate-100"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
