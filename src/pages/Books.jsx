import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiBaseUrl } from './../config/config';
import Edit from "../resources/images/edit.png";
import Delete from "../resources/images/delete.png";
export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const result = await axios.get(`${apiBaseUrl}/books`);
        setBooks(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);
  return (
    <div>
      <h1>Books Manager</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.img} alt="" />}
            <h1>{book.title}</h1>
            <p>{book.desc}</p>
            <div className="btn-group">
                <button className="btn delete">
                  <img src={Delete} alt="" />
                </button>
                <button className="btn update">
                  <img src={Edit} alt="" />
                </button>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-add">
        <Link to="/add">Add New Book</Link>
      </button>
    </div>
  );
};
