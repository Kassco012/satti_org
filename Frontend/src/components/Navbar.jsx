import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaRegUser, FaChevronDown, FaInstagram, FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import Modal from "./Modal";
import "../index.css";
import { FaTelegram } from "react-icons/fa6";
import { useLanguage } from "../components/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const location = useLocation();
    const [isSticky, setSticky] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const { t } = useLanguage();


    const user = null; 
    const isAdmin = false; 
    const cart = []; 

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const toggleServices = () => {
        setIsServicesOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.services-dropdown')) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        { path: "", label: t('home') },
        { path: "menu", label: t('menu') },
        { path: "about", label: t('about') },
        { path: "boxgenie", label: t('quickOrder') },
        { path: "calculator", label: t('calculator') },
        { path: "reviews", label: t('reviews') },
        { path: "contact", label: t('contacts') },
    ];

    const serviceItems = [
        { path: "/service/furshet", label: t('furshet') },
        { path: "/service/coffee-break", label: t('coffeeBreak') },
        { path: "/service/banquet", label: t('banquet') },
        { path: "/service/delivery", label: t('delivery') },
    ];

    return (
        <header
            id="navbar"
            className={`max-w-screen-2xl container1 mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out ${isSticky ? "sticky-bg-white" : "sticky-bg-white"}`}
        >
            <div
                className={`navbar xl:px-24 ${isSticky
                    ? "shadow-md bg-white transition-all duration-300 ease-in-out text-black font-semibold"
                    : ""
                    }`}
                style={{ maxWidth: "100%", width: "100%", maxHeight: "14.5vh" }}
            >
                <div className="navbar-start">
                    <div className="dropdown justify-between">
                        <label
                            onClick={toggleMenu}
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                            aria-label={t('menu')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3 text`}
                            style={{ display: isMenuOpen ? "block" : "none" }}
                        >
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className={`text-${isSticky ? "black" : "black"} font-bold text-G hover:bg-transparent ${location.pathname === `/${item.path}` || (item.path === "" && location.pathname === "/") ? "active" : ""
                                            }`}
                                        style={{
                                            color: (location.pathname === `/${item.path}` || (item.path === "" && location.pathname === "/")) ? '#0099B1' : 'inherit'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = '#0099B1'}
                                        onMouseLeave={(e) => e.target.style.color = (location.pathname === `/${item.path}` || (item.path === "" && location.pathname === "/")) ? '#0099B1' : '#000'}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/">
                        <img
                            src="/logo.png"
                            alt="Sátti Organization"
                            className="my-2 h-16 md:h-20 lg:h-24 w-auto object-contain"
                            id="logoms"
                        />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg space-x-3">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={`text-${isSticky ? "black" : "black"} font-bold rounded-full hover:text-white text-R hover:rounded-full hover:bg-hover px-4 py-2`}
                                    style={{
                                        color: (location.pathname === `/${item.path}` || (item.path === "" && location.pathname === "/")) ? '#0099B1' : 'inherit',
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="relative services-dropdown">
                        <button
                            onClick={toggleServices}
                            className={`btn btn-ghost flex items-center gap-2 font-bold text-white rounded-full px-4 py-2`}
                            style={{ backgroundColor: '#0099B1' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#007a8c'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#0099B1'}
                            aria-label={t('services')}
                        >
                            {t('services')}
                            <FaChevronDown
                                className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        {isServicesOpen && (
                            <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg border z-50">
                                <ul className="py-2">
                                    {serviceItems.map((service, index) => (
                                        <li key={index}>
                                            <Link
                                                to={service.path}
                                                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                                                onClick={() => setIsServicesOpen(false)}
                                                onMouseEnter={(e) => e.target.style.color = '#0099B1'}
                                                onMouseLeave={(e) => e.target.style.color = '#374151'}
                                            >
                                                {service.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <LanguageSwitcher />

                    <div className="flex items-center gap-3">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle text-gray-600 hover:text-pink-500 transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={20} />
                        </a>

                        <a
                            href="https://wa.me/77787575075"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle text-gray-600 hover:text-green-500 transition-colors"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp size={20} />
                        </a>

                        <a
                            href="https://t.me/77787575075"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-circle text-gray-600 hover:text-blue-500 transition-colors"
                            aria-label="Telegram"
                        >
                            <FaTelegram size={20} />
                        </a>
                    </div>

                    <Modal />
                </div>
            </div>
        </header>
    );
};

export default Navbar;