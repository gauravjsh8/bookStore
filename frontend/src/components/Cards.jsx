import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="mt-5 ">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-dark text-center">{item.name}</h5>
          <p
            style={{
              backgroundColor: "#ab274f",
              borderRadius: "50px",
              display: "inline-flex",
              color: "white",
              padding: "5px 10px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              margin: "auto",
            }}
          >
            {item.category}
          </p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <div className="d-flex justify-content-around ">
            <a href="#" className="btn btn-primary bg-light text-dark">
              Buy now
            </a>
            <div
              className=" rounded-pill bg-dark "
              style={{
                width: "50px",
                textAlign: "center",
                color: "white",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ${item.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
