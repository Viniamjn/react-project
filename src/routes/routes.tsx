import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import RecipesPage from "../pages/RecipesPage";
import CustomErrorLayout from "../layouts/CustomErrorLayout";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index:true, element:<HomePage/>},
            {path:'products', element: <ProductsPage/>},
            {path:'product/:id', element: <ProductDetailsPage/>},
            {path:'recipes', element:<RecipesPage/>}

        ],
        errorElement:<CustomErrorLayout/>
    },

]);