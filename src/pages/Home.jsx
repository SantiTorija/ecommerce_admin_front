import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
      ;
    </>
  );
}

export default Home;
