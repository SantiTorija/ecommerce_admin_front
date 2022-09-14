import "../styles/customStyles.css";
import UsersTable from "./UsersTable";

function Layout() {
	return (
		<>
			<div id="layoutSidenav_content">
				<main>
					<div class="container-fluid px-4">
						<h1 class="mt-4">Admin Dashboard</h1>
						<ol class="breadcrumb mb-4">
							<li class="breadcrumb-item active">Dashboard</li>
						</ol>
						<div class="row">
							<div class="col-xl-3 col-md-6">
								<div class="card bg-primary text-white mb-4">
									<div class="card-body">Primary Card</div>
									<div class="card-footer d-flex align-items-center justify-content-between">
										<a
											class="small text-white stretched-link"
											href="hrefCambiar"
										>
											Ver más
										</a>
										<div class="small text-white">
											<i class="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6">
								<div class="card bg-warning text-white mb-4">
									<div class="card-body">Warning Card</div>
									<div class="card-footer d-flex align-items-center justify-content-between">
										<a
											class="small text-white stretched-link"
											href="hrefCambiar"
										>
											Ver más
										</a>
										<div class="small text-white">
											<i class="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6">
								<div class="card bg-success text-white mb-4">
									<div class="card-body">Success Card</div>
									<div class="card-footer d-flex align-items-center justify-content-between">
										<a
											class="small text-white stretched-link"
											href="hrefCambiar"
										>
											Ver más
										</a>
										<div class="small text-white">
											<i class="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-md-6">
								<div class="card bg-danger text-white mb-4">
									<div class="card-body">Danger Card</div>
									<div class="card-footer d-flex align-items-center justify-content-between">
										<a
											class="small text-white stretched-link"
											href="hrefCambiar"
										>
											Ver más
										</a>
										<div class="small text-white">
											<i class="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-xl-6">
								<div class="card mb-4">
									<div class="card-header">
										<i class="fas fa-chart-area me-1"></i>
										Gráfica de Ventas
									</div>
									<div class="card-body">
										<canvas id="myAreaChart" width="100%" height="40"></canvas>
									</div>
								</div>
							</div>
							<div class="col-xl-6">
								<div class="card mb-4">
									<div class="card-header">
										<i class="fas fa-chart-bar me-1"></i>
										Gráfica de Visitas al Sitio
									</div>
									<div class="card-body">
										<canvas id="myBarChart" width="100%" height="40"></canvas>
									</div>
								</div>
							</div>
						</div>
						<div class="card mb-4">
							<div class="card-header">
								<i class="fas fa-table me-1"></i>
								Listado de usuarios
							</div>
							<div class="card-body">
								<UsersTable />
							</div>
						</div>
					</div>
				</main>
				<footer class="py-4 bg-light mt-auto">
					<div class="container-fluid px-4">
						<div class="d-flex align-items-center justify-content-between small">
							<div class="text-muted">Copyright &copy; Your Website 2022</div>
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
