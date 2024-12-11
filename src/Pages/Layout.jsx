import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";

function MainLayout() {
    return (
        <>
            <Navbar /> {/* this navbar is the shared ui we want to across pages */}
            <Outlet /> {/* the actual page which will be rendred along with the navbar */}
        </>
    )
}
export default MainLayout;