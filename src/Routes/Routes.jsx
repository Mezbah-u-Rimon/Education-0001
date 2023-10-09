import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Details from "../Components/Services/Details";
import EventsPage from "../Pages/Events/EventsPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute> <Details></Details> </PrivateRoute>,
                loader: () => fetch('/serviceData.json'),
            },

            {
                path: "/events",
                element: <PrivateRoute> <EventsPage /></PrivateRoute>,
                loader: () => fetch('/events.json'),
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;