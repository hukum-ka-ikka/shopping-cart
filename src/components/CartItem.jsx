import React from "react";
import { useDispatch } from "react-redux";
import {
  addQuantity,
  reduceQuantity,
  removeFromCart,
} from "../redux/slices/CartSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 sm:flex-row border-b-2 border-[#0e121e] pt-2">
      <div className="p-2">
      <img src={product.image} className="h-40 w-52" loading="lazy"/>
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="text-md font-semibold">{product.title}</p>
        <p className="text-sm">{`${product.description.substring(0, 70)}...`}</p>
        <div className="flex flex-col gap-2 justify-between lg:flex-row">
          <p className="text-sm">
            Item Total: ₹
            <span>{` ${(Number(product.price) * product.quantity).toFixed(
              2
            )}`}</span>
          </p>
          <div className="flex justify-between items-center w-[50%] font-semibold lg:w-[30%]">
            <button
              onClick={() => dispatch(reduceQuantity(product))}
              className="flex justify-center items-center border-[1.5px] border-[#0E121E] rounded-l-xl w-[30%] h-6 pb-1 active:bg-slate-100"
            >
              -
            </button>
            <p className="flex items-center justify-center text-xs  border-t-[1.5px] border-b-[1.5px] w-[40%] h-6 text-center border-[#0E121E]">
              {product.quantity}
            </p>
            <button
              onClick={() => dispatch(addQuantity(product))}
              className="flex justify-center items-center border-[1.5px] border-[#0E121E] rounded-r-xl w-[30%] h-6 pb-1 font-semibold active:bg-slate-100"
            >
              +
            </button>
          </div>
        </div>
        <div className="-mt-1 lg:-mt-3">
          <button
            onClick={() => dispatch(removeFromCart(product))}
            className="text-xs font-semibold text-white bg-[#4F9E5E] rounded-lg p-1 px-2 active:bg-[#2d5a35] mb-2 lg:mb-0"
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
