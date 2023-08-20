import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { Home } from "./pages/home";
import { Store } from "./pages/store";
import ItemDetail from "./pages/detail/ItemDetail";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/detail-product/:id?" element={<ItemDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
