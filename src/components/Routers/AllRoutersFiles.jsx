import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUS from "./ContactUs";
import HomePage from "./Homepage";

function AllRoutersFiles() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about" element={<AboutUs />}></Route>
        <Route exact path="/contact" element={<ContactUS />}></Route>
      </Routes>
    </Router>
  );
}

export default AllRoutersFiles;
