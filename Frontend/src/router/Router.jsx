import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import BoxGenie from "../pages/menuPage/BoxGenie";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CartPage from "../pages/menuPage/CartPage";
import Order from "../pages/dashboard/user/Order";
import Contact from '../pages/Contact/Contact';
import ServicePage from "../pages/Service/ServicePage";
import Calculator from "../pages/Calculator/Calculator";
import MenuPage from "../pages/menuPage/MenuPage";
import ReviewsCarousel from '../components/ReviewsCarousel';
import AboutUsPage from '../components/AboutUsPage';

// 404 компонент
const NotFound = () => (
    <div className="pt-20 text-center min-h-screen flex items-center justify-center">
        <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-gray-600 mb-4">Страница не найдена</p>
            <a href="/" className="bg-[#0099B1] text-white px-4 py-2 rounded hover:bg-[#007B94]">
                На главную
            </a>
        </div>
    </div>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />, // Добавляем обработку ошибок на верхнем уровне
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/boxgenie",
                element: <BoxGenie />
            },
            {
                path: "/calculator",
                element: <Calculator />
            },
            {
                path: "/order",
                element: <PrivateRoute><Order /></PrivateRoute>
            },
            {
                path: "/cart-page",
                element: <CartPage />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "about",
                element: <AboutUsPage />
            },
            {
                path: "reviews",
                element: <ReviewsCarousel />
            },
            {
                path: "service/:serviceType",
                element: <ServicePage />
            },
            {
                path: "menu",
                element: <MenuPage />
            },
            {
                path: '*', // Catch-all маршрут для 404
                element: <NotFound />
            }
        ]
    }
]);

export default router;