import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useSearch } from "../context/Search";
import { useCart } from "../context/Cart";

const Search = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart([]);

  //Add to Cart
  const addToCart = (prod) => {
    setCart((prev) => {
      return [...prev, prod];
    });
    toast.success("Product Added to Cart");
  };

  return (
    <Layout title={"Search Results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No products Found"
              : `Found ${values.results.length} products`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div
                key={p._id}
                className="card m-2 search-card"
                style={{ width: "18rem" }}
              >
                <img
                  src={`${
                    import.meta.env.VITE_API
                  }/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top img-fluid"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text text-white">
                    {p.description.substring(0, 30)}
                  </p>
                  <p className="card-text text-white">${p.price}</p>
                  <button className="btn btn-primary ms-1 search-page-button mb-2">
                    See Details
                  </button>
                  <button
                    className="btn btn-secondary ms-1 search-page-button"
                    onClick={() => addToCart(p)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
