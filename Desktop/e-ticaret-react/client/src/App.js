import "./App.css";
import "./reset.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SingIn from "./pages/Auth/singin";
import SingUp from "./pages/Auth/singup";
import Home from "./pages/Auth/Home";
import Products from "./pages/movies";
import MovieDetail from "./pages/movies/MovieDetail";
import Article from "./components/navbar/Article";
import Profile from "./pages/Auth/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div id="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/singin" element={<SingIn />} />
            <Route path="movies/:movie_id" element={<MovieDetail />} />
            <Route path="/singup" element={<SingUp />} />
            <Route path="/movies" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
