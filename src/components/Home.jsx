import axios from "axios";
import ProductCard from "./ProductCard";

const Home = ({ loading, products }) => {
  return (
    <div className="flex min-h-[80vh] justify-center pb-6">
      {loading ? (
        <div className="flex h-[80vh] w-screen justify-center items-center">
          <div className="custom-loader"></div>
        </div>
      ) : products.length === 0 ? (
        <div>No Products Found</div>
      ) : (
        <div className="w-[75vw] mt-6 flex flex-wrap justify-center gap-5 lg:gap-3 md:w-[60vw]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
