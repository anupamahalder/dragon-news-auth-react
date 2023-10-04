import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";
const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // when we will go to home component news data will be loaded 
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                // we will make the news router as a private router and whatever we will put inside private route will be its children and user only can reach children when there will be a user/valid user/login user
                element: <PrivateRoute>
                    <News></News>
                    </PrivateRoute>
            },
            {
                path: '/about',
                element: <div>Hello about</div>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/career',
                element: <div>This is career</div>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Routes;