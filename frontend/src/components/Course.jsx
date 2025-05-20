import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books");
        const data = response.data;
        console.log("Response", response);
        console.log("Data", data);
        setBooks(data.Books);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);
  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <div>
        <h1 className="text-center">
          We're delighted to have you <span className="text-danger">here</span>
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          totam ratione enim. Enim consequatur quidem natus inventore
          recusandae, possimus quasi dolores magnam tempora debitis fugit
          tenetur exercitationem blanditiis, itaque quisquam. Incidunt
          voluptatum architecto natus aliquam impedit libero maiores id ipsa
          quasi et, maxime perspiciatis fugiat sint corporis at velit, illum
          delectus repellat quas cupiditate ratione qui enim molestias? Ullam,
          rerum? Eaque doloribus aperiam alias eligendi. Omnis enim laboriosam
          saepe, nesciunt cum et, at corporis voluptas aut dolorem facilis
          aperiam animi quae dolorum aliquam rerum ipsam vitae sed recusandae
          minus sequi? Error veniam quas corrupti iste! Saepe, ducimus quam
          ipsam facilis mollitia asperiores voluptatum maxime atque corrupti,
          tenetur dolores harum doloribus praesentium et nostrum obcaecati fuga
          nemo maiores quidem adipisci sit.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <Link to="/">
            <button className="btn btn-info rounded-pill">Get Back</button>
          </Link>
        </div>
      </div>
      <div className="row mt-5">
        {books.map((book) => (
          <div key={book._id} className="col-md-4 mb-4">
            <Cards item={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
