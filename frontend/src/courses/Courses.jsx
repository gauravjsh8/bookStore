import React from "react";
import Course from "../components/Course";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <>
      <Navbar />
      <div>
        <Course />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Courses;
