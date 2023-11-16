import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import Menus from "../Pages/Menus";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <h1>Error page 404 not found</h1>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '//menus',
                element: <Menus />
            },
            {
                path: '/shop',
                element: <h1>Contact Page</h1>
            },
        ]
    }
])

export default router