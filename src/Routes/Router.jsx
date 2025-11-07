import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Plants from "../Components/Plants/Plants";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Root from "../Components/Root/Root";
import Login from "../Authentication/Login/Login";
import Registration from "../Authentication/Registration/Registration";
import PrivateProvider from "../Provider/PrivateProvider";

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
            path: '/plantsDetails',
            element:<PrivateProvider>
                <Plants></Plants>
            </PrivateProvider>
        },
        {
            path: '/auth/login',
            element:<Login></Login>
        },
        {
            path: '/auth/registration',
            element:<Registration></Registration>
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