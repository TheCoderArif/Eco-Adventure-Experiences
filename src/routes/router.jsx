import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch('services.json')
    },
    {
        path: '/auth',
        element: <h3>Auth Layout</h3>
    },
    {
        path: '*',
        element: <h4>Error Element</h4>
    }
]);

export default router;