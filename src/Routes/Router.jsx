import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Plants from "../Components/Plants/Plants";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Root from "../Components/Root/Root";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root,
            element: <ErrorPage></ErrorPage>,
            children:[
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
        }
        
    ]
);

export default router;