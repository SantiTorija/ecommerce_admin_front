import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditProduct from "./pages/EditProduct";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/edit/:slug" element={<EditProduct />} />
        <Route path="/create/wine" element={<NewProduct />} />
      </Routes>
    </div>
  );
}

export default App;
