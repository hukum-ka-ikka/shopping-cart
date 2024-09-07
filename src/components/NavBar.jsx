import React from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.png";
import { AiTwotoneHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const totalProducts = useSelector((state) => state.cart.count);

  return (
    <div className="h-11 bg-[#0E121E] flex justify-center sticky top-0 z-10">
      <div className="flex w-[75vw] h-11 justify-between items-center md:w-[60vw]">
        <img src={logo} className="h-8 w-24" />
        <div className="flex gap-2 md:gap-4">
          <button onClick={() => navigate("/")}>
            <AiTwotoneHome className="size-6" />
          </button>
          <button className="relative h-fit" onClick={() => navigate("/cart")}>
            <p
              className={`text-white absolute text-[10px] font-bold -mt-1 ml-4 bg-[#4F9E5E] w-[0.9rem] rounded-full ${
                totalProducts === 0 ? "" : "animate-oscillate"
              }`}
            >
              {totalProducts}
            </p>
            <img src={cartIcon} className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
