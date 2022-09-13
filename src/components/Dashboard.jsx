import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import LayoutContent from "./LayoutContent";

function Dashboard() {
	return (
		<div classNameName="sb-nav-fixed">
			<Navbar />
			<div id="layoutSidenav">
				<Sidebar />
				<LayoutContent />
			</div>
		</div>
	);
}

export default Dashboard;
