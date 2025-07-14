import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../src/App.css";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const Main = () => {
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Симуляция начальной загрузки
    useEffect(() => {
        // Проверяем сохраненную тему из localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }

        const timer = setTimeout(() => {
            setLoading(false);
        }, 800); // Быстрая загрузка

        return () => clearTimeout(timer);
    }, []);

    // Переключение темы
    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        document.documentElement.classList.toggle("dark", newMode);
    };

    // Применяем тему при изменении
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    return (
        <div className={`${isDarkMode ? "bg-gray-900" : "bg-white"} min-h-screen`}>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="relative">
                    <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                    <div className="min-h-screen">
                        <Outlet />
                    </div>
                    <Footer isDarkMode={isDarkMode} />
                </div>
            )}
        </div>
    );
};

export default Main;