import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditProduct from "./pages/EditProduct";
import NewProduct from "./pages/NewProduct";
import Administrators from "./pages/Administartors";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Categories from "./pages/Categories";
import NewAdmin from "./pages/NewAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/edit/:slug" element={<EditProduct />} />
        <Route path="/create/wine" element={<NewProduct />} />
        <Route path="/administradores" element={<Administrators />} />
        <Route path="/create/admin" element={<NewAdmin />} />
        <Route path="/ordenes" element={<Orders />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
