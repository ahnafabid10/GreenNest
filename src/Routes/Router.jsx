import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Plants from "../Components/Plants/Plants";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/plants',
            element:<Plants></Plants>
        },
        {
            path: '/*',
            element:<ErrorPage></ErrorPage>
        },
    ]
);

export default router;