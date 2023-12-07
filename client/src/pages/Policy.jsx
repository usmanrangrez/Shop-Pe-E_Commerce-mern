import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <section className="py-5" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              {/* Updated image design */}
              <div
                className="rounded bg-light p-4"
                style={{ border: "1px solid #ccc" }}
              >
                <img
                  src="/images/contactus.jpeg"
                  className="img-fluid rounded"
                  alt="Privacy Policy"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center text-lg-start">
                <h1
                  className="mb-4"
                  style={{ color: "#004d99", fontSize: "2rem" }}
                >
                  Our Commitment to Privacy
                </h1>
                <p style={{ color: "#333", fontSize: "1.1rem" }}>
                  At ShopPe, your privacy matters. Our Privacy Policy outlines
                  how we collect, use, and protect your information when you use
                  our services. We take the security of your personal data
                  seriously.
                </p>
                <h2
                  className="mt-5"
                  style={{ color: "#004d99", fontSize: "1.8rem" }}
                >
                  Data Collection Methods
                </h2>
                <p style={{ color: "#333", fontSize: "1.1rem" }}>
                  We gather data through various means, including cookies and
                  server logs, to enhance your browsing experience and improve
                  our services.
                </p>
                <h2
                  className="mt-5"
                  style={{ color: "#004d99", fontSize: "1.8rem" }}
                >
                  Using Your Information
                </h2>
                <p style={{ color: "#333", fontSize: "1.1rem" }}>
                  Your information helps us personalize your experience, respond
                  to your inquiries, and deliver valuable updates and marketing
                  information.
                </p>
                <h2
                  className="mt-5"
                  style={{ color: "#004d99", fontSize: "1.8rem" }}
                >
                  Ensuring Your Privacy
                </h2>
                <p style={{ color: "#333", fontSize: "1.1rem" }}>
                  We prioritize safeguarding your information. Our Privacy
                  Policy is regularly updated, and we recommend reviewing it
                  periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policy;
