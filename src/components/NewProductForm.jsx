import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateProductForm({ setRefresh, refresh }) {
  const adminState = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [variety, setVariety] = useState(null);
  const [wineType, setWineType] = useState(null);
  const [country, setCountry] = useState(null);
  const [region, setRegion] = useState(null);
  const [harvest, setHarvest] = useState(null);
  const [cellar, setCellar] = useState(null);
  const [capacity, setCapacity] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [highlighted, setHighlighted] = useState(null);

  const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecommerce");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dazcipdps/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setPicture(file.secure_url);
  };
  async function createProduct() {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}wines/`,
        data: {
          name: name,
          picture: picture,
          variety: variety,
          type: wineType,
          country: country,
          region: region,
          harvest: harvest,
          cellar: cellar,
          capacity: capacity,
          description: description,
          price: price,
          stock: stock,
          highlighted: highlighted,
        },
        headers: {
          Authorization: `Bearer ${adminState.token}`,
          "Content-Type": "application/json",
        },
      });
      setRefresh(!refresh);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{ marginBottom: "100%" }}
      id="layoutSidenav_content"
      className="m-4"
    >
      <div className="d-flex justify-content-between py-4">
        <h1>Crear nuevo producto</h1>
      </div>

      <Form
        style={{ maxWidth: "50rem" }}
        onSubmit={() => {
          createProduct();
          navigate("/Productos");
        }}
      >
        <div className="d-flex mb-4">
          <Form.Group className=" me-5 w-100">
            <Form.Label>Producto</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="Nombre del vino"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className=" w-100">
            <Form.Label>Seleccionar foto</Form.Label>
            <Form.Control required="true" type="file" onChange={upLoadImage} />
          </Form.Group>
        </div>

        <div className="d-flex mb-4">
          <Form.Group className=" me-5 w-100">
            <Form.Label>Variedad</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="Variedad"
              onChange={(e) => setVariety(e.target.value)}
            />
          </Form.Group>

          <div className=" w-100">
            <Form.Label>Seleccione tipo de vino</Form.Label>
            <Form.Select
              required="true"
              onChange={(e) => setWineType(e.target.value)}
              aria-label="Default select example"
            >
              <option>...</option>
              <option value="Tinto">Tinto</option>
              <option value="Blanco">Blanco</option>
              <option value="Rose">Rose</option>
              <option value="Espumante">Espumante</option>
            </Form.Select>
          </div>
        </div>
        <div className="d-flex mb-4">
          <Form.Group className="w-100 me-5">
            <Form.Label>País</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="Pais de procedencia"
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Label>Región</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="región de procedencia"
              onChange={(e) => setRegion(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className="d-flex mb-4">
          <Form.Group className="me-5 w-100">
            <Form.Label>Cosecha</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="Año de cosecha"
              onChange={(e) => setHarvest(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Label>Bodega</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="Bodega"
              onChange={(e) => setCellar(e.target.value)}
            />
          </Form.Group>
        </div>

        <div className="d-flex mb-4">
          <Form.Group className="w-100 me-5">
            <Form.Label>Capacidad</Form.Label>
            <Form.Control
              required="true"
              type="text"
              placeholder="capcidad"
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="w-100 ">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              required="true"
              type="number"
              placeholder="Precio en dólares"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            required="true"
            as="textarea"
            rows="4"
            placeholder="Descripción del producto"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex mb-4">
          <Form.Group className="mb-3 me-5 w-100">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              required="true"
              type="number"
              placeholder="Cantidad en inventario"
              onChange={(e) => setStock(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="me-5 w-100">
            <Form.Label>Destacado</Form.Label>
            <Form.Check
              required="true"
              type="radio"
              label="si"
              onClick={() => setHighlighted(true)}
              name="highlighted"
              id="default-radio"
            />
            <Form.Check
              required="true"
              type="radio"
              label="no"
              onClick={() => setHighlighted(false)}
              name="highlighted"
              id="default-radio"
            />
          </Form.Group>
        </div>

        <Button className="mb-5" variant="primary" type="submit">
          Submit
        </Button>
        <Button
          onClick={() => navigate("/productos")}
          className="mb-5 ms-4"
          variant="light"
        >
          Back
        </Button>
      </Form>
    </div>
  );
}

export default CreateProductForm;
