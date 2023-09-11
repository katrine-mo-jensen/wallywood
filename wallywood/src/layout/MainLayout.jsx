import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation/nav";
import { Footer } from "../components/footer/Footer";

export const MainLayout = () => {
    return(
        <main>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </main>
    )
}