import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditProduct from "./pages/EditProduct";
import NewProduct from "./pages/NewProduct";
import Administrators from "./pages/Administartors";
import Login from "./pages/Login";
import ProtectedRoute from "./components/PrivateRoutes";
import Orders from "./pages/Orders";
import Categories from "./pages/Categories";
import NewAdmin from "./pages/NewAdmin";
import EditAdmin from "./pages/EditAdmin";
import EditOrder from "./pages/EditOrder";
import NewType from "./pages/NewType";

function App() {
  return (
    <div className="App bg-light">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/edit/:slug" element={<EditProduct />} />
          <Route path="/create/wine" element={<NewProduct />} />
          <Route path="/administradores" element={<Administrators />} />
          <Route path="/create/admin" element={<NewAdmin />} />
          <Route path="/edit/admin/:id" element={<EditAdmin />} />
          <Route path="/ordenes" element={<Orders />} />
          <Route path="/editar/orden/:id" element={<EditOrder />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/crear/tipo" element={<NewType />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
