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
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="App bg-light">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/productos"
            element={<Products refresh={refresh} setRefresh={setRefresh} />}
          />
          <Route
            path="/edit/:slug"
            element={<EditProduct refresh={refresh} setRefresh={setRefresh} />}
          />
          <Route
            path="/create/wine"
            element={<NewProduct refresh={refresh} setRefresh={setRefresh} />}
          />
          <Route
            path="/administradores"
            element={
              <Administrators refresh={refresh} setRefresh={setRefresh} />
            }
          />
          <Route
            path="/create/admin"
            element={<NewAdmin refresh={refresh} setRefresh={setRefresh} />}
          />
          <Route
            path="/edit/admin/:id"
            element={<EditAdmin refresh={refresh} setRefresh={setRefresh} />}
          />
          <Route path="/ordenes" element={<Orders refresh={refresh} />} />
          <Route
            path="/editar/orden/:id"
            element={<EditOrder refresh={refresh} setRefresh={setRefresh} />}
          />
          <Route
            path="/categorias"
            element={<Categories refresh={refresh} setRefresh={setRefresh} />}
          />
          <Route path="/crear/tipo" element={<NewType />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
