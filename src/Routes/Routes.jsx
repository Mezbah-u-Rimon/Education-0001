import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Details from "../Components/Services/Details";
import EventsPage from "../Pages/Events/EventsPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: () => fetch('/serviceData.json'),
            },
            {
                path: "/events",
                element: <EventsPage></EventsPage>,
                loader: () => fetch('/events.json'),
            },
        ]
    },
]);

export default router;