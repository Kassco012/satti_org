import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../components/LanguageContext';

const ServicePage = () => {
    const { serviceType } = useParams();
    const { t } = useLanguage();

    // Данные для каждой услуги с переводами
    const getServiceData = () => ({
        'furshet': {
            title: t('furshet'),
            image: '/images/furshet.jpg',
            description: t('furshetPageDesc')
        },
        'coffee-break': {
            title: t('coffeeBreak'),
            image: '/images/coffee-break.jpg',
            description: t('coffeeBreakPageDesc')
        },
        'banquet': {
            title: t('banquet'),
            image: '/images/banquet.jpg',
            description: t('banquetPageDesc')
        },
        'delivery': {
            title: t('delivery'),
            image: '/images/delivery.jpg',
            description: t('deliveryPageDesc')
        }
    });

    const serviceData = getServiceData();
    const currentService = serviceData[serviceType];

    // Если услуга не найдена
    if (!currentService) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('serviceNotFound')}</h1>
                    <Link to="/" className="btn bg-red text-white rounded-full px-6 py-2">
                        {t('backToHome')}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Отступ для фиксированного navbar */}
            <div className="pt-24">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    {/* Заголовок */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-[#D9B075] mb-4">
                            {currentService.title}
                        </h1>
                        <p className="text-lg text-[#0099B1]">
                            {currentService.description}
                        </p>
                    </div>

                    {/* Основное изображение */}
                    <div className="mb-8">
                        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={currentService.image}
                                alt={currentService.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Заменяем на placeholder если изображение не загрузилось
                                    e.target.src = 'https://via.placeholder.com/800x400/f3f4f6/374151?text=' + encodeURIComponent(currentService.title);
                                }}
                            />
                        </div>
                    </div>

                    {/* Кнопка быстрого заказа */}
                    <div className="text-center mb-12">
                        <Link
                            to="/boxgenie"
                            className="inline-flex items-center justify-center bg-[#0099B1] hover:bg-[#0099B1] hover:opacity-90 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            {t('quickOrder')}
                        </Link>
                    </div>

                    {/* Дополнительная информация */}
                    <div className="text-center">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {t('wantToKnowMore')}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {t('contactForConsultation')}
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="bg-[#0099B1] hover:bg-[#0099B1] hover:opacity-90 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                                >
                                    {t('contacts')}
                                </Link>
                                <Link
                                    to="/"
                                    className="bg-[#0099B1] hover:bg-[#0099B1] hover:opacity-90 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
                                >
                                    {t('home')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;