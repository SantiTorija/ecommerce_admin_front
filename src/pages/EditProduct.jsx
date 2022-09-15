import EditForm from "../components/EditForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function EditProduct() {
	return (
		<>
			<div className="sb-nav-fixed">
				<Navbar />
				<div id="layoutSidenav">
					<Sidebar />
					<EditForm />
				</div>
			</div>
			;
		</>
	);
}

export default EditProduct;
