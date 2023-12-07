import React from "react";
import { useSearch } from "../../context/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="form-inline my-2 my-lg-0 d-flex"
      onSubmit={handleSubmit}
      style={{ maxWidth: "300px" }} // Adjust the width if needed
    >
      <input
        className="form-control mr-sm-2 flex-grow-1"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={values.keyword}
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0 ms-2 text-white border"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
