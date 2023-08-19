import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { Home } from "./pages/home";
import { Store } from "./pages/store";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
