import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";

function WinesTable() {
	const [wines, setWines] = useState(null);

	useEffect(() => {
		const dataWine = async () => {
			const response = await axios({
				method: "GET",
				url: `http://localhost:8000/wines/`,
			});
			setWines(response.data);

			return response;
		};
		dataWine();
	}, []);

	return (
		wines && (
			<div id="layoutSidenav_content" className="m-4">
				<div className="d-flex justify-content-between py-4">
					<h1>Listado de Productos</h1>
					<button className="btn btn-success">Agregar nuevo</button>
				</div>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Wine name</th>
							<th>Price</th>
							<th>Stock</th>
							<th>Highlighted</th>
							<th>Options</th>
						</tr>
					</thead>
					<tbody>
						{wines.map((wine, index) => {
							return (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{wine.name}</td>
									<td>{wine.price}</td>
									<td>{wine.stock}</td>
									<td>{wine.highlighted ? "true" : "false"}</td>
									<td className="d-flex justify-content-center gap-2 text-center">
										<Link to={`/edit/${wine.slug}`}>
											<button className="btn btn-primary">Editar</button>
										</Link>
										<button className="btn btn-danger">Borrar</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		)
	);
}

export default WinesTable;