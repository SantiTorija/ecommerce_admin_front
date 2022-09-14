import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

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
							<tr>
								<td>{index + 1}</td>
								<td>{wine.name}</td>
								<td>{wine.price}</td>
								<td>{wine.stock}</td>
								<td>{wine.highlighted ? "true" : "false"}</td>
								<td>
									<button className="btn btn-primary">Editar</button>
									<button className="btn btn-danger">Borrar</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		)
	);
}

export default WinesTable;
