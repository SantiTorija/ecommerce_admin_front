import "../styles/customStyles.css";
import UsersTable from "./UsersTable";

function Layout() {
	return (
		<>
			<div id="layoutSidenav_content">
				<main>
					<div className="container-fluid px-4">
						<h1 className="mt-4">Admin Dashboard</h1>
						<ol className="breadcrumb mb-4">
							<li className="breadcrumb-item active">Dashboard</li>
						</ol>
						<div className="row">
							<div className="col-xl-3 col-md-6">
								<div className="card bg-primary text-white mb-4">
									<div className="card-body">Primary Card</div>
									<div className="card-footer d-flex align-items-center justify-content-between">
										<a
											className="small text-white stretched-link"
											href="hrefCambiar"
										>
											Ver más
										</a>
										<div className="small text-white">
											<i className="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="card bg-warning text-white mb-4">
									<div className="card-body">Warning Card</div>
									<div className="card-footer d-flex align-items-center justify-content-between">
										<a
											className="small text-white stretched-link"
											href="hrefCambiar"
										>
											Ver más
										</a>
										<div className="small text-white">
											<i className="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="card bg-success text-white mb-4">
									<div className="card-body">Success Card</div>
									<div className="card-footer d-flex align-items-center justify-content-between">
										<a
											className="small text-white stretched-link"
											href="hrefCambiar"
										>
											Ver más
										</a>
										<div className="small text-white">
											<i className="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6">
								<div className="card bg-danger text-white mb-4">
									<div className="card-body">Danger Card</div>
									<div className="card-footer d-flex align-items-center justify-content-between">
										<a
											className="small text-white stretched-link"
											href="hrefCambiar"
										>
											Ver más
										</a>
										<div className="small text-white">
											<i className="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-6">
								<div className="card mb-4">
									<div className="card-header">
										<i className="fas fa-chart-area me-1"></i>
										Gráfica de Ventas
									</div>
									<div className="card-body">
										<canvas id="myAreaChart" width="100%" height="40"></canvas>
									</div>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="card mb-4">
									<div className="card-header">
										<i className="fas fa-chart-bar me-1"></i>
										Gráfica de Visitas al Sitio
									</div>
									<div className="card-body">
										<canvas id="myBarChart" width="100%" height="40"></canvas>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-4">
							<div className="card-header">
								<i className="fas fa-table me-1"></i>
								Listado de usuarios
							</div>
							<div className="card-body">
								<UsersTable />
							</div>
						</div>
					</div>
				</main>
				<footer className="py-4 bg-light mt-auto">
					<div className="container-fluid px-4">
						<div className="d-flex align-items-center justify-content-between small">
							<div className="text-muted">
								Copyright &copy; Your Website 2022
							</div>
							<div>
								<a href="hrefCambiar">Privacy Policy</a>
								&middot;
								<a href="hrefCambiar">Terms &amp; Conditions</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}

export default Layout;
