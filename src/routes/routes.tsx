import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PageUsers from "../pages/PageUsers";
import PagePosts from "../pages/PagePosts";
import PageComments from "../pages/PageComments";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <PageUsers/>},
            {path: 'posts', element: <PagePosts/>},
            {path: 'comments', element: <PageComments/>}

        ],
    },

]);