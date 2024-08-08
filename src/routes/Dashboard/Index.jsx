import { Route, Routes } from "react-router-dom";
import { Home, Profile } from "../../pages/Dashboard";
import Navbar from "../../components/Navbar";

function DashboardPage() {
  return (
    <>
    <div className="container mx-auto flex">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
    </>
  );
}

export default DashboardPage;
