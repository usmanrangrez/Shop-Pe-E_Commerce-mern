import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";
import { useCart } from "../context/Cart";
import "../styles/CategoryProductStyles.css";

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setloading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  //Cart
  const [cart, setCart] = useCart();

  //get product
  const getAllProducts = async () => {
    try {
      setloading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/v1/product/product-list/${page}`
      );
      setloading(false);
      setProducts(data.products);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!checked.length) {
      getAllProducts();
    }
  }, [checked.length]);

  //get Total Count (Pagination)
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTotal();
  }, []);

  //LOAD MORE
  const loadMore = async () => {
    try {
      setloading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/v1/product/product-list/${page}`
      );
      setProducts([...products, ...data.products]);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    if (page === 1) {
      return;
    }
    loadMore();
  }, [page]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/v1/product/product-category/${
          params.slug
        }`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) {
      getProductsByCat();
    }
  }, [params?.slug]);

  //Add to Cart
  const addToCart = (prod) => {
    setCart((prev) => {
      return [...prev, prod];
    });
    toast.success("Product Added to Cart");
  };

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} results found</h6>
        <div className="row">
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div
                key={p._id}
                className="card m-2 cate-card"
                style={{ width: "18rem" }}
              >
                <img
                  src={`${
                    import.meta.env.VITE_API
                  }/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top img-fluid background-image"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 30)}</p>
                  <p className="card-text">${p.price}</p>
                  <button
                    className="btn btn-primary ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => addToCart(p)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
            <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault(), setPage(page + 1);
                  }}
                >
                  {loading ? "Loading" : "Loadmore"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
