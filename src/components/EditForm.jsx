import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

	/* const [name, setName] = useState(wine.name);
	const [picture, setPicture] = useState(wine.picture);
	const [variety, setVariety] = useState(wine.variety);
	const [country, setCountry] = useState(wine.country);
	const [region, setRegion] = useState(wine.region);

	const [harvest, setHarvest] = useState(wine.harvest);
	const [cellar, setCellar] = useState(wine.cellar);
	const [capacity, setCapacity] = useState(wine.capacity);
	const [tastingNote, setTastingNote] = useState(wine.tastingNote);
	const [description, setDescription] = useState(wine.description);

	const [price, setPrice] = useState(wine.price);
	const [stock, setStock] = useState(wine.stock);
	const [highlighted, setHighlighted] = useState(wine.highlighted); */

	return (
		wine && (
			<div id="layoutSidenav_content" className="m-4">
				<div className="d-flex justify-content-between py-4">
					<h1>Editar Producto</h1>
				</div>

				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Nombre del Product</Form.Label>
						<Form.Control type="text" value={wine.name} />
					</Form.Group>

					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Seleccionar Archivo</Form.Label>
						<Form.Control type="file" />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Variety</Form.Label>
						<Form.Control type="text" value={wine.variety} />
					</Form.Group>

					{/* 		<Form.Group className="mb-3">
				<Form.Label>Tipo</Form.Label>
				<Form.Control type="text" value={wine.type} />
			</Form.Group> */}

					<Form.Group className="mb-3">
						<Form.Label>País</Form.Label>
						<Form.Control type="text" value={wine.country} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Región</Form.Label>
						<Form.Control type="text" value={wine.region} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Cosecha</Form.Label>
						<Form.Control type="text" value={wine.harvest} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Bodega</Form.Label>
						<Form.Control type="text" value={wine.cellar} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Capacidad</Form.Label>
						<Form.Control type="text" value={wine.capacity} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Nota de Cata</Form.Label>
						<Form.Control as="textarea" rows="4" value={wine.tastingNote} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Descripción</Form.Label>
						<Form.Control as="textarea" rows="4" value={wine.description} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Precio</Form.Label>
						<Form.Control type="number" value={wine.price} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Stock</Form.Label>
						<Form.Control type="number" value={wine.stock} />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Destacado</Form.Label>
						<Form.Check
							type="radio"
							label="si"
							name="highlighted"
							id="default-radio"
						/>
						<Form.Check
							type="radio"
							label="no"
							name="highlighted"
							id="default-radio"
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Slug</Form.Label>
						<Form.Control type="text" value={wine.slug} />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		)
	);
}

export default EditForm;
