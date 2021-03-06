import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import notfound from "./pages/notfound"

// CSS IMPORTS
import "./css/app.css";
import "./css/ui.css";
import "./css/about.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <div className="logo">
            lishu <br /> gupta
          </div>
          <ul>
            <li>
              <Link className="link" to="">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route element={<notFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
