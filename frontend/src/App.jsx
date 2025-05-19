import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeBooks from "./components/FreeBooks";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBooks />

      <Footer />
    </>
  );
}

export default App;
