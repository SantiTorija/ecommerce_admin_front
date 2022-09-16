import Swal from "sweetalert2";
import axios from "axios";

export async function handleDeleteWine(id) {
	async function productDelete() {
		await axios({
			method: "DELETE",
			url: `http://localhost:8000/wines/${id}`,
		});
		return;
	}
	return Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!",
	}).then((result) => {
		if (result.isConfirmed) {
			productDelete();
			Swal.fire("Deleted!", "Your file has been deleted.", "success");
			this.forceUpdate();
		}
	});
}

export async function handleDeleteAdmin(id) {
	async function adminDelete() {
		await axios({
			method: "DELETE",
			url: `http://localhost:8000/admin/${id}`,
		});
		return;
	}
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!",
	}).then((result) => {
		if (result.isConfirmed) {
			adminDelete();
			Swal.fire("Deleted!", "Your file has been deleted.", "success");
			this.forceUpdate();
		}
	});
}
