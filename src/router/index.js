import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import AuthRoute from '@/components/AuthRoute';
import Home from "@/pages/Home";
import Articles from "@/pages/Articles";
import NewArticles from "@/pages/NewArticles";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/index',
        element: <AuthRoute><Layout/></AuthRoute>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/index/articles',
                element: <Articles />
            },
            {
                path: '/index/newarticles',
                element: <NewArticles />
            }
        ]
    }
])

export default router;