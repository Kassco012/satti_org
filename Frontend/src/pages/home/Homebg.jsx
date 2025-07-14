import React from 'react';
import { useLanguage } from '../../components/LanguageContext';
import homebg from '../../assets/фон.png';

const Homebg = () => {
    const { t } = useLanguage();

    return (
        <div className="relative w-full h-screen">
            {/* Адаптивный отступ сверху */}
            <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${homebg})`,
                    paddingTop: 'clamp(80px, 12vh, 150px)' // Адаптивный отступ
                }}
            >
                {/* Опциональный оверлей для лучшей читаемости текста */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                {/* Контент поверх изображения */}
                <div className="relative z-10 h-full flex items-center justify-center text-white">
                    <div className="text-center px-4">
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg"
                            style={{
                                fontFamily: 'KZ Gropled'
                                
                            }}
                        >
                            {t('sattiOrganization')}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-lg">
                            {t('culinaryArtKazakh')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/menu"
                                className="bg-[#0099B1] hover:bg-[#007B94] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                {t('viewMenu')}
                            </a>
                            <a
                                href="/calculator"
                                className="bg-[#D9B075] hover:bg-[#C09856] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                            >
                                {t('calculateCostHome')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homebg;