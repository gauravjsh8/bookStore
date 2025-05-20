import React from "react";
import Signup from "./Signup";

const Login = () => {
  return (
    <>
      <div>
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "400px", margin: "auto" }}
          >
            <div className="modal-content" style={{ width: "80%" }}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Login
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Password"
                />
              </div>
              <div className="modal-footer d-flex-column align-items-center justify-content-between">
                <div>
                  <p className="mt-1">
                    Not Registered? {""}
                    <span>
                      <a
                        href="#"
                        className="text-decoration-none"
                        data-bs-toggle="modal"
                        data-bs-target="#signUpModal"
                        data-bs-dismiss="modal"
                      >
                        Signup Here
                      </a>
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn-primary p-1"
                  style={{
                    width: "100%",
                    backgroundColor: "green",
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Signup />
    </>
  );
};

export default Login;
