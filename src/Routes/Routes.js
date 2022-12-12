import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/HomePage/Home";
import SingleProducts from "../Components/HomePage/Projects/SingleProducts";

import Main from "../Components/Main/Main";
import Blogs from "../Shared/Blogs/Blogs";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project/:id',
                element: <SingleProducts></SingleProducts>,
                loader: ({params})=>fetch(`https://portfolio-omega-six-52.vercel.app/projects/${params.id}`),
            },{
                path: '/blog',
                element: <Blogs></Blogs>
            },
        ]
    }
])




export default router