import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import Menus from "../Pages/Menus";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Dashboard from "../MainLayout/Dashboard";
import Cart from "../Dashboard/Cart";
import Users from "../Dashboard/Users";
import AdminRoute from "./AdminRoute";
import AddItem from "../Dashboard/AddItem";
import Payment from "../Dashboard/Payment";

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
                path: '/menus',
                element: <Menus />
            },
            {
                path: '/shop/:category',
                element: <OurShop />
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Registration />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
        // user route
            {
                path: 'home',
                element: <h1>Dashboard Home</h1>,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'payment',
                element: <Payment />
            },
            // admin route
            {
                path: 'all-users',
                element: <AdminRoute><Users /></AdminRoute>
            },
            {
                path: 'add-item',
                element: <AdminRoute><AddItem /></AdminRoute>
            },
        ]
    }
])

export default router