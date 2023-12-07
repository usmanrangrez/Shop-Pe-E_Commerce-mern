import React from "react";
import Layout from "../components/Layout/Layout";
import emailjs from "emailjs-com";
import { useRef, useEffect, useState } from "react";

const Contact = () => {
  useEffect(() => emailjs.init("Bd4sJLKMeTTQKzXq5"), []);
  const emailRef = useRef();
  const nameRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_kw37cm4";
    const templateId = "template_3kbq4ng";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        recipient: emailRef.current.value,
      });
      alert("Email successfully sent. Please check your inbox.");
    } catch (error) {
      console.log(error);
    } finally {
      emailRef.current = "";
      nameRef.current = "";
      setLoading(false);
    }
  };

  return (
    <Layout title={"Contact Us - ShopPe"}>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h3 className="text-secondary text-uppercase mb-3">Contact</h3>
              <h2 className="display-5 mb-5">
                We're eager to connect with you!
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="border p-4">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      ref={nameRef}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button className="btn btn-primary" disabled={loading}>
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border p-4">
                <div className="mb-4">
                  <h4 className="text-primary mb-3">Office</h4>
                  <p className="text-secondary">
                    Visit us to discuss in person.
                  </p>
                  <address className="text-secondary">
                    Khanyar, Srinagar - Jammu & Kashmir (190003)
                  </address>
                </div>
                <div className="mb-4">
                  <h4 className="text-primary mb-3">Phone</h4>
                  <p className="text-secondary">
                    Connect with us directly over a call.
                  </p>
                  <p className="text-secondary">
                    <a
                      className="link-secondary text-decoration-none"
                      href="tel:+917006572213"
                    >
                      +91-7006572213
                    </a>
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-primary mb-3">Email</h4>
                  <p className="text-secondary">
                    Send us an email with your queries.
                  </p>
                  <p className="text-secondary">
                    <a
                      className="link-secondary text-decoration-none"
                      href="mailto:usmaanrangrez@gmail.com"
                    >
                      usmaanrangrez@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="text-primary mb-3">Opening Hours</h4>
                  <div className="d-flex mb-2">
                    <p className="text-secondary fw-bold me-3">Mon - Fri</p>
                    <p className="text-secondary">9am - 5pm</p>
                  </div>
                  <div className="d-flex">
                    <p className="text-secondary fw-bold me-3">Sat - Sun</p>
                    <p className="text-secondary">9am - 2pm</p>
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

export default Contact;
