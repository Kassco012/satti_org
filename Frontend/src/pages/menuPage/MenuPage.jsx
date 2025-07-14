import React, { useState } from 'react';
import { MessageCircle, Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../components/LanguageContext';

const MenuPage = () => {
    const [selectedCuisine, setSelectedCuisine] = useState(null);
    const [showThankYou, setShowThankYou] = useState(false);
    const { t } = useLanguage();

    const getCuisineOptions = () => [
        {
            id: 'kazakh',
            name: t('kazakhCuisine'),
            description: t('kazakhCuisineDesc'),
            whatsappMessage: t('kazakhCuisineWhatsApp')
        },
        {
            id: 'turkish',
            name: t('turkishCuisine'),
            description: t('turkishCuisineDesc'),
            whatsappMessage: t('turkishCuisineWhatsApp')
        }
    ];

    const cuisineOptions = getCuisineOptions();

    const handleCuisineSelect = (cuisine) => {
        setSelectedCuisine(cuisine);
        setShowThankYou(true);

        // Автоматически скрыть сообщение через 3 секунды
        setTimeout(() => {
            setShowThankYou(false);
        }, 3000);
    };

    const sendToWhatsApp = (cuisine) => {
        const encodedMessage = encodeURIComponent(cuisine.whatsappMessage);
        window.open(`https://wa.me/77787575075?text=${encodedMessage}`, '_blank');
    };

    const sendToTelegram = (cuisine) => {
        const encodedMessage = encodeURIComponent(cuisine.whatsappMessage);
        window.open(`https://t.me/your_telegram_bot?text=${encodedMessage}`, '_blank');
    };

    return (
        <div>
            {/* Header секция */}
            <div className="bg-gradient-to-r from-red-500 to-[#D9B075] py-10">
                <div className="container mx-auto text-center">
                    <h1 className="font-extrabold text-6xl text-white mb-4">{t('menu')}</h1>
                </div>
            </div>

            <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-10">
                <div className="text-center mb-12">
                    <h2 className="text-[#D9B075] text-4xl md:text-5xl font-bold mt-2 leading-tight">
                        {t('worldCuisines')}
                    </h2>
                    <p className="text-[#D9B075] mt-4 text-lg">
                        {t('selectCuisineGetMenu')}
                    </p>
                </div>

                {/* Уведомление о выборе */}
                {showThankYou && (
                    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
                        <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-semibold">
                                {t('thankYouChoice')} "{selectedCuisine?.name}" {t('accepted')}
                            </span>
                        </div>
                    </div>
                )}

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-black mb-2">
                            {t('selectCuisinePrompt')}
                        </h3>
                        <p className="text-black">
                            {t('sendDetailedMenuAfter')}
                        </p>
                    </div>

                    {/* Карточки кухонь */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {cuisineOptions.map((cuisine) => (
                            <div
                                key={cuisine.id}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-red-200"
                            >
                                {/* Заголовок карточки */}
                                <div className="p-6 bg-gradient-to-r from-red-50 to-[#D9B075] bg-opacity-20">
                                    <h4 className="text-2xl font-bold text-black text-center">
                                        {cuisine.name}
                                    </h4>
                                    <p className="text-black text-center mt-2">
                                        {cuisine.description}
                                    </p>
                                </div>

                                {/* Кнопки действий */}
                                <div className="p-6 space-y-3">
                                    {/* Кнопка выбора - желтая по умолчанию, зеленая после выбора */}
                                    <button
                                        onClick={() => handleCuisineSelect(cuisine)}
                                        className={`w-full font-bold py-3 px-6 rounded-xl transition-colors text-lg group-hover:scale-105 transform duration-200 ${selectedCuisine?.id === cuisine.id
                                            ? 'bg-green-500 hover:bg-green-600 text-white'
                                            : 'bg-[#D9B075] hover:bg-[#D9B075] hover:opacity-90 text-white'
                                            }`}
                                    >
                                        {selectedCuisine?.id === cuisine.id ? t('selected') : `${t('select')} ${cuisine.name.toLowerCase()}`}
                                    </button>

                                    {/* Кнопки мессенджеров - только для получения меню */}
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => sendToWhatsApp(cuisine)}
                                            className="flex-1 bg-[#0099B1] hover:bg-[#0099B1] hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                            <span>WhatsApp</span>
                                        </button>

                                        <button
                                            onClick={() => sendToTelegram(cuisine)}
                                            className="flex-1 bg-[#0099B1] hover:bg-[#0099B1] hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                                        >
                                            <Phone className="w-4 h-4" />
                                            <span>Telegram</span>
                                        </button>
                                    </div>

                                    <p className="text-sm text-black text-center italic">
                                        👆 {t('detailedMenuInMessenger')}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Дополнительная информация */}
                    <div className="bg-gray-50 rounded-xl p-6 text-center">
                        <h4 className="text-lg font-semibold text-black mb-3">
                            {t('whatHappensAfterChoice')}
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-[#D9B075] bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-2xl">1️⃣</span>
                                </div>
                                <p className="font-semibold text-black">{t('chooseCuisineStep')}</p>
                                <p className="text-[#0099B1]">{t('oneClickOnCard')}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-[#D9B075] bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-2xl">2️⃣</span>
                                </div>
                                <p className="font-semibold text-black">{t('getMenuStep')}</p>
                                <p className="text-[#0099B1]">{t('inMessenger')}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-[#D9B075] bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-2xl">3️⃣</span>
                                </div>
                                <p className="font-semibold text-black">{t('placeOrderStep')}</p>
                                <p className="text-[#0099B1]">{t('withPersonalManager')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Блок выбранной кухни */}
                    {selectedCuisine && (
                        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                            <div className="flex items-center justify-center mb-4">
                                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                                <h4 className="text-xl font-bold text-green-800">
                                    {t('yourChoice')}: {selectedCuisine.name}
                                </h4>
                            </div>
                            <p className="text-black mb-4">
                                {t('excellentWePrepare')} {selectedCuisine.name.toLowerCase()} {t('andSendToMessenger')}
                            </p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => sendToWhatsApp(selectedCuisine)}
                                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>{t('getInWhatsApp')}</span>
                                </button>
                                <button
                                    onClick={() => sendToTelegram(selectedCuisine)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>{t('getInTelegram')}</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;