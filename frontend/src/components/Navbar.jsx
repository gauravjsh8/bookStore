import React from "react";
import { CiSearch } from "react-icons/ci";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log("Authuser", authUser);
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light  fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            BookStore
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">
                  Course
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex me-5 " role="search">
              <input
                className="form-control me-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                <CiSearch />
              </button>
            </form>
            {authUser ? (
              <Logout />
            ) : (
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
      <Login />
    </>
  );
};

export default Navbar;
