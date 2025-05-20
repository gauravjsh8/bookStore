import React from "react";

const Signup = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "400px" }}
        >
          <div className="modal-content" style={{ width: "80%" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sign Up
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
                placeholder="Name"
              />
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
            <div className="modal-footer d-flex align-items-center justify-content-between">
              <div>
                <p className="mt-1">
                  Already Registered? {""}
                  <span>
                    <a
                      href="#"
                      className="text-decoration-none"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                      data-bs-dismiss="modal"
                    >
                      Log in Here
                    </a>
                  </span>
                </p>
              </div>
              <button
                type="button"
                className="btn btn-primary p-1"
                style={{ width: "100%" }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
