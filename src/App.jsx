import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const url = "https://fakestoreapi.com/products";
  const exurl = "https://v6.exchangerate-api.com/v6/";

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const EX_API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API;

  const fetchPost = async () => {
    setLoading(true);
    const response = await axios.get(url);
    const data = response.data;

    const exResponse = await axios.get(`${exurl}/${EX_API_KEY}/latest/USD`);
    const exData = Number(exResponse.data.conversion_rates.INR);

    data.forEach((product) => {
      (product.quantity = 0),
        (product.price = (Number(product.price) * exData).toFixed(2));
    });

    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="flex flex-col h-min-h-screen relative">
      <NavBar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/"
          element={<Home loading={loading} products={products} />}
        />
      </Routes>
    </div>
  );
};

export default App;
