import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Shop Pe"}>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded"
                src="/images/about.jpeg"
                alt="About Shop Pe"
              />
            </div>
            <div className="col-12 col-lg-6">
              <h2 className="h1 mb-4">Who Are We?</h2>
              <p className="lead fs-5 text-muted mb-4">
                We help you with your daily needs!
              </p>
              <p className="mb-5">Shop with Shop Pe and grab exciting deals!</p>
              <div className="row gx-4">
                <div className="col-12 col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-gear-fill text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="..." />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-3">Versatile Brand</h4>
                      <p className="text-muted mb-0">
                        We offer products from multiple brands.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-fire text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="..." />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-3">Quality Products</h4>
                      <p className="text-muted mb-0">
                        We believe in providing quality products!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
