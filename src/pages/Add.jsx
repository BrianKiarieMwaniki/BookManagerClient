import React from "react";
import { useState } from "react";
import { apiBaseUrl } from "./../config/config";
import axios  from "axios";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiBaseUrl}/books`, book);
      navigate("/");
    } catch (error) { console.log(error);}
  };

  console.log(book);
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Description"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="text"
        placeholder="Cover"
        onChange={handleChange}
        name="cover"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};
