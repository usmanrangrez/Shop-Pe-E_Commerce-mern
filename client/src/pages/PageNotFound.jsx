import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Go-Back, Page Not Found"}>
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="text-center row">
          <div className="col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="Error"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 mt-5">
            <p className="fs-3">
              <span className="text-danger">Oops!</span> Page not found.
            </p>
            <p className="lead">The page you’re looking for doesn’t exist.</p>
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
