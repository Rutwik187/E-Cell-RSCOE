import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import OurTeam from './Components/OurTeam/OurTeam';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/OurTeam" element={<OurTeam />} />
          {/* <Route exact path="/Activities" element={<Activities />} />
          <Route exact path="/AboutUS" element={<AboutUs />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
