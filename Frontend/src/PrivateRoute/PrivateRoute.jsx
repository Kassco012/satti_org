/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    // Поскольку нет AuthContext, просто возвращаем детей
    // В данной реализации авторизация не используется
    const user = null; // Нет пользователя
    const loading = false; // Не загружается

    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg" style={{ color: '#0099B1' }}>
                    Загрузка...
                </div>
            </div>
        );
    }

    if (user) {
        return <>{children}</>;
    }

    // Поскольку авторизации нет, возвращаем детей напрямую
    // или можно перенаправить на главную страницу
    return <>{children}</>;

    // Если нужно перенаправление на логин:
    // return (
    //   <Navigate
    //     to="/"
    //     state={{ from: location }}
    //     replace
    //   />
    // );
};

export default PrivateRoute;