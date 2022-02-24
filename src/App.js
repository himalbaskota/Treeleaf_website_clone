import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbarservice from "./components/Navbarservice";
import Landing from "./components/Landing";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/" element={<Landing />}></Route>
          {/* <Route exact path="/Navbarservice" element={<Navbarservice/>}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
