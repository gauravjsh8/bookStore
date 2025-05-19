import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./courses/Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
