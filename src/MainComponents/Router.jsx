import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";

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
                path: '/about',
                element: <h1>About Page</h1>
            },
            {
                path: '/contact',
                element: <h1>Contact Page</h1>
            },
        ]
    }
])

export default router