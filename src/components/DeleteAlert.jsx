import Swal from "sweetalert2";
import axios from "axios";

export async function handleDeleteWine(id, token, refresh, setRefresh) {
  async function productDelete() {
    await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}wines/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    setRefresh(!refresh);
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

export async function handleDeleteAdmin(id, token, refresh, setRefresh) {
  async function adminDelete() {
    await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}admin/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    setRefresh(!refresh);
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
