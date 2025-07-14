import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import BoxGenie from "../pages/menuPage/BoxGenie";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CartPage from "../pages/menuPage/CartPage";
import Order from "../pages/dashboard/user/Order";
import Contact from '../pages/Contact/Contact'
import ServicePage from "../pages/Service/ServicePage";
import Calculator from "../pages/Calculator/Calculator";
import MenuPage from "../pages/menuPage/MenuPage"; 
import ReviewsCarousel from '../components/ReviewsCarousel';
import AboutUsPage from '../components/AboutUsPage';




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/boxgenie",
          element: <BoxGenie/>
        },
        {
          path: "/calculator",
          element: <Calculator/>
        },
        {
          path: "/order",
          element:<PrivateRoute><Order/></PrivateRoute>
        },
        {
          path: "/cart-page",
          element: <CartPage/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path: "about",  
          element: <AboutUsPage/>
        },
        {
          path: "reviews",
          element: <ReviewsCarousel/>
        },
        {
          path: "service/:serviceType",
          element: <ServicePage/>
        },
        {
         path: "menu",
         element: <MenuPage />
        },
        {
         path: 'reviews',
         element: <ReviewsCarousel />
        }
      ]
    },
    
  ]);

export default router;