import React, { useEffect, useState } from "react";
import { useLanguage } from "../../components/LanguageContext";
import Cards from "../../components/Cards";
import CorporateGenie from "./CorporateGenie";
import '../../index.css'

const BoxGenie = () => {
    const { t } = useLanguage();

    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Заглушка вместо запроса к серверу
        const fetchData = async () => {
            try {
                setLoading(true);

                // Имитируем задержку сети
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Здесь должны быть ваши данные
                const mockData = [];
                setMenu(mockData);
                setFilteredItems(mockData);
            } catch (error) {
                console.error("Error fetching data:", error);
                setMenu([]);
                setFilteredItems([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Убеждаемся, что filteredItems - это массив перед использованием slice
    const currentItems = Array.isArray(filteredItems)
        ? filteredItems.slice(indexOfFirstItem, indexOfLastItem)
        : [];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Показываем загрузку
    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-xl">{t('loading')}</div>
            </div>
        );
    }

    return (
        <div>
            <div className="pt-24"></div>

            <h2 className="text-black justify-center text-center text-5xl my-14 font-bold pt-5 text-[#D9B075]">
                {t('instantOrderTitle')}
            </h2>

            <CorporateGenie />
        </div>
    );
};

export default BoxGenie;