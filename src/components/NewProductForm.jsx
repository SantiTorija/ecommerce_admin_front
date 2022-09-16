import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [picture, setPicture] = useState(null);
  const [variety, setVariety] = useState(null);
  const [country, setCountry] = useState(null);
  const [region, setRegion] = useState(null);
  const [harvest, setHarvest] = useState(null);
  const [cellar, setCellar] = useState(null);
  const [capacity, setCapacity] = useState(null);
  const [tastingNote, setTastingNote] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [highlighted, setHighlighted] = useState(null);

  const upLoadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ecommerce");
    /*  setLoading(true); */
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
  console.log(picture);
  async function createProduct() {
    try {
      const response = await axios({
        method: "POST",
        url: `http://localhost:8000/wines/`,
        data: {
          name: name,
          picture: picture,
          variety: variety,
          country: country,
          region: region,
          harvest: harvest,
          cellar: cellar,
          capacity: capacity,
          tastingNote: tastingNote,
          description: description,
          price: price,
          stock: stock,
          /* highlighted*/
        },
      });
      console.log();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="layoutSidenav_content" className="m-4">
      <div className="d-flex justify-content-between py-4">
        <h1>Crear nuevo producto</h1>
      </div>

      <Form
        onSubmit={() => {
          createProduct();
          navigate("/Products");
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del vino"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Seleccionar Archivo</Form.Label>
          <Form.Control type="file" onChange={upLoadImage} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Variedad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Variedad"
            onChange={(e) => setVariety(e.target.value)}
          />
        </Form.Group>

        {/* 		<Form.Group className="mb-3">
				<Form.Label>Tipo</Form.Label>
				<Form.Control type="text" defaultValue={wine.type} />
			</Form.Group> */}

        <Form.Group className="mb-3">
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pais de procedencia"
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Región</Form.Label>
          <Form.Control
            type="text"
            placeholder="región de procedencia"
            onChange={(e) => setRegion(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Cosecha</Form.Label>
          <Form.Control
            type="text"
            placeholder="Año de cosecha"
            onChange={(e) => setHarvest(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Bodega</Form.Label>
          <Form.Control
            type="text"
            placeholder="Bodega"
            onChange={(e) => setCellar(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Capacidad</Form.Label>
          <Form.Control
            type="text"
            placeholder="capcidad"
            onChange={(e) => setCapacity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nota de Cata</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            placeholder="Nota de cata"
            onChange={(e) => setTastingNote(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            placeholder="Descripción del producto"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio en dólares"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Cantidad en inventario"
            onChange={(e) => setStock(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Destacado</Form.Label>
          <Form.Check
            type="radio"
            label="si"
            onChange={() => setHighlighted(true)}
            name="highlighted"
            id="default-radio"
          />
          <Form.Check
            type="radio"
            label="no"
            onChange={() => setHighlighted(false)}
            name="highlighted"
            id="default-radio"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
/* } */

export default CreateProductForm;
