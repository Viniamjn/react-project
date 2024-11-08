import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import AllPage from "../pages/AllPage";
import CustomErrorLayout from "../layouts/CustomErrorLayout";

export const routers =createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'all', element: <AllPage/>}


        ],
        errorElement: <CustomErrorLayout/>

    }
])