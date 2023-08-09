import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { Home } from "./pages/home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
