import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4 bg-footer">
      <h4 className="text-center mb-4">
        Shop anything and <span className="text-danger ev">everything</span> All
        with ShopPe!
      </h4>
      <div className="d-flex justify-content-center align-items-center">
        <p className="mb-0">
          <Link to="/about" className="text-light me-3">
            About
          </Link>
          <Link to="/contact" className="text-light me-3">
            Contact
          </Link>
          <Link to="/policy" className="text-light me-3">
            Policy
          </Link>
          <a
            href="https://github.com/usmanrangrez"
            className="text-light social-link me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/usman-rangrez-125a07ab/"
            className="text-light social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="social-icon" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
