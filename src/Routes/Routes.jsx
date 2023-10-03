import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <div>Hello about</div>
            }
        ]
    }
])

export default Routes;