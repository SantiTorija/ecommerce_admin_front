import Swal from "sweetalert2";
import axios from "axios";

export async function handleDeleteWine(id, token) {
  async function productDelete() {
    await axios({
      method: "DELETE",
      url: `http://localhost:8000/wines/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return;
  }
  return Swal.fire({
    title: "Estas seguro?",
    text: "No podrás revertir esta acción!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      productDelete();
      Swal.fire("Borrado!", "El vino ha sido borrado.", "success");
      this.forceUpdate();
    }
  });
}

export async function handleDeleteAdmin(id, token) {
  async function adminDelete() {
    await axios({
      method: "DELETE",
      url: `http://localhost:8000/admin/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return;
  }
  Swal.fire({
    title: "Estás seguro?",
    text: "No podrás revertir esta acción!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      adminDelete();
      Swal.fire("Borrado!", "El administrador ha sido borrado.", "success");
      this.forceUpdate();
    }
  });
}
