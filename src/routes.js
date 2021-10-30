import Anemostat_lite from "./pages/Anemostat_lite";
import Partners from "./pages/Partners";
import Anemostat from "./pages/Anemostat";
import { About_route, Anemostat_hamam_route, Anemostat_lite_route, Anemostat_route, Cart_route, Contact_route, Main_route, Partners_route } from "./Utils/const";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import AnemostatHamam from "./pages/AnemostatHamam";
import About from "./pages/About";

export const routes = [
    {
        path: Partners_route,
        component: Partners
    },
    {
        path: Anemostat_hamam_route,
        component: AnemostatHamam
    },
    {
        path: Anemostat_lite_route,
        component: Anemostat_lite
    },
    {
        path: Anemostat_route,
        component: Anemostat
    },
    {
        path: Cart_route,
        component: Cart
    },
    {
        path: Contact_route,
        component: Contact
    },
    {
        path: Main_route,
        component: Main
    },
    {
        path: About_route,
        component: About
    },
]