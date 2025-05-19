import React from "react";
import Book from "../../public/book.jpg";

const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 mt-5">
          <h3>
            Hello, welcome here to learn something
            <span className="text-danger"> new everyday.</span>
          </h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            recusandae minus saepe magnam assumenda, provident earum non
            sapiente nam necessitatibus sint ipsam, mollitia, perspiciatis aut.
            Consequatur officiis tempore eaque quidem. Inventore repellat
            eligendi obcaecati velit laborum. Deleniti rem sapiente, amet modi
          </p>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="form-label"></label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
          </div>
          <button type="button" className="btn btn-outline-info mt-3 ">
            Information
          </button>
        </div>
        <div className="col-12 col-lg-6 my-5   ">
          <img src={Book} width={400} className="img-lg-margin " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
