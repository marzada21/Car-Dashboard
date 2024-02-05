import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
    },
];

export default routes