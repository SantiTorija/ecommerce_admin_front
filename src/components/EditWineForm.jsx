import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditForm() {
  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/wines/${wineSlug}`,
      });
      setWine(response.data);
      return response;
    };
    dataWine();
  }, []);

  const params = useParams();
  const wineSlug = params.slug;
  const [wine, setWine] = useState(null);
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
  const navigate = useNavigate();

  async function updateProduct() {
    try {
      const response = await axios({
        method: "PATCH",
        url: `http://localhost:8000/wines/${wine._id}`,
        data: {
          name: name ? name : wine.name,
          picture: picture ? picture : wine.picture,
          variety: variety ? variety : wine.variety,
          country: country ? country : wine.country,
          region: region ? region : wine.region,
          harvest: harvest ? harvest : wine.harvest,
          cellar: cellar ? cellar : wine.cellar,
          capacity: capacity ? capacity : wine.capacity,
          tastingNote: tastingNote ? tastingNote : wine.tastingNote,
          description: description ? description : wine.description,
          price: price ? price : wine.price,
          stock: stock ? stock : wine.stock,
          /* highlighted*/
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    wine && (
      <div id="layoutSidenav_content" className="m-4">
        <div className="d-flex justify-content-between py-4">
          <h1>Editar Producto</h1>
        </div>

        <Form
          onSubmit={(e) => {
            updateProduct();
            console.log(name);
            navigate("/Products");
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Nombre del Product</Form.Label>
            <Form.Control
              type="text"
              defaultValue={wine.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Seleccionar Archivo</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setPicture(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Variety</Form.Label>
            <Form.Control
              type="text"
              defaultValue={wine.variety}
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
              defaultValue={wine.country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Región</Form.Label>
            <Form.Control
              type="text"
              defaultValue={wine.region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cosecha</Form.Label>
            <Form.Control
              type="text"
              defaultValue={wine.harvest}
              onChange={(e) => setHarvest(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bodega</Form.Label>
            <Form.Control
              type="text"
              defaultValue={wine.cellar}
              onChange={(e) => setCellar(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Capacidad</Form.Label>
            <Form.Control
              type="text"
              defaultValue={wine.capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nota de Cata</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              defaultValue={wine.tastingNote}
              onChange={(e) => setTastingNote(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              defaultValue={wine.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              defaultValue={wine.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              defaultValue={wine.stock}
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
    )
  );
}
/* } */

export default EditForm;
