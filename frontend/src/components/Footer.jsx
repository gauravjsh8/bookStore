import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start mt-5">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">BookStore</h5>
              <p>
                Learn something new every day. Books, courses, and resources to
                help you grow.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-dark">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Tiktok
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>
              <p>Email: info@bookstore.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </div>
        </div>

        <div className="text-center p-3 bg-dark text-white">
          © 2025 BookStore. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
