import "./App.css";
import Hello from "./components/Hello";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/Routers/AboutUs";
import ContactUS from "./components/Routers/ContactUs";
import HomePage from "./components/Routers/Homepage";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          {/* <Hello /> */}
          <div>
          <ul>
            <li>
              <Link to="/">Home Page </Link>
            </li>
            <li>
              <Link to="/about">About Us </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us </Link>
            </li>
          </ul>
          </div>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/about" element={<AboutUs />}></Route>
            <Route exact path="/contact" element={<ContactUS />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
