import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EditForm() {
  useEffect(() => {
    const dataWine = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}wines/${wineSlug}`,
      });
      setWine(response.data);
      return response;
    };
    dataWine();
  }, []);
  const adminState = useSelector((state) => state.admin);
  const params = useParams();
  const wineSlug = params.slug;
  const [wine, setWine] = useState(null);
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
  const navigate = useNavigate();

  async function updateProduct() {
    try {
      const response = await axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_API_URL}wines/${wine._id}`,
        data: {
          name: name ? name : wine.name,
          picture: picture ? picture : wine.picture,
          variety: variety ? variety : wine.variety,
          type: wineType,
          country: country ? country : wine.country,
          region: region ? region : wine.region,
          harvest: harvest ? harvest : wine.harvest,
          cellar: cellar ? cellar : wine.cellar,
          capacity: capacity ? capacity : wine.capacity,
          description: description ? description : wine.description,
          price: price ? price : wine.price,
          stock: stock ? stock : wine.stock,
          highlighted: highlighted ? highlighted : wine.highlighted,
        },
        headers: {
          Authorization: `Bearer ${adminState.token}`,
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
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

  return (
    wine && (
      <div id="layoutSidenav_content" className="m-4">
        <div className="d-flex justify-content-between py-4">
          <h1>Editar Producto</h1>
        </div>

        <Form
          style={{ maxWidth: "50rem" }}
          onSubmit={(e) => {
            updateProduct();
            console.log(name);
            navigate("/Products");
          }}
        >
          <div className="d-flex mb-4">
            <Form.Group className="w-100 me-3">
              <Form.Label>Nombre del Product</Form.Label>
              <Form.Control
                required={true}
                type="text"
                defaultValue={wine.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="w-100">
              <Form.Label>Seleccionar Archivo</Form.Label>
              <Form.Control type="file" onChange={upLoadImage} />
            </Form.Group>
          </div>

          <div className="d-flex mb-4">
            <Form.Group className="w-100 me-3">
              <Form.Label>Variety</Form.Label>
              <Form.Control
                required={true}
                type="text"
                defaultValue={wine.variety}
                onChange={(e) => setVariety(e.target.value)}
              />
            </Form.Group>
            <div className="w-100">
              <Form.Label>Seleccione tipo de vino</Form.Label>
              <Form.Select
                required={true}
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
            <Form.Group className="w-100 me-3">
              <Form.Label>País</Form.Label>
              <Form.Control
                required={true}
                type="text"
                defaultValue={wine.country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="w-100">
              <Form.Label>Región</Form.Label>
              <Form.Control
                required={true}
                type="text"
                defaultValue={wine.region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="d-flex mb-4">
            <Form.Group className="w-100 me-3">
              <Form.Label>Cosecha</Form.Label>
              <Form.Control
                required={true}
                type="text"
                defaultValue={wine.harvest}
                onChange={(e) => setHarvest(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="w-100">
              <Form.Label>Bodega</Form.Label>
              <Form.Control
                required={true}
                type="text"
                defaultValue={wine.cellar}
                onChange={(e) => setCellar(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="d-flex mb-4">
            <Form.Group className="w-100 me-3 d-block d-md-inline">
              <Form.Label>Capacidad</Form.Label>
              <Form.Control
                required={true}
                type="text"
                defaultValue={wine.capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="w-100 d-block d-md-inline">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                required={true}
                type="number"
                defaultValue={wine.price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-4">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              required={true}
              as="textarea"
              rows="4"
              defaultValue={wine.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex mb-4">
            <Form.Group className="w-100">
              <Form.Label>Destacado</Form.Label>
              <Form.Check
                required={true}
                type="radio"
                label="si"
                onChange={() => setHighlighted(true)}
                name="highlighted"
                id="default-radio"
              />
              <Form.Check
                required={true}
                type="radio"
                label="no"
                onChange={() => setHighlighted(false)}
                name="highlighted"
                id="default-radio"
              />
            </Form.Group>
            <Form.Group className="w-100 me-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                required={true}
                type="number"
                defaultValue={wine.stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="mb-5">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button className="ms-3" variant="light" type="submit">
              Back
            </Button>
          </div>
        </Form>
      </div>
    )
  );
}
/* } */

export default EditForm;
