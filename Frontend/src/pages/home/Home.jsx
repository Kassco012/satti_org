import React from 'react';
import { useLanguage } from '../../components/LanguageContext';
import Homebg from './Homebg';

// Компактная секция "О нас" для главной страницы
const AboutUsSection = () => {
    const { t } = useLanguage();

    return (
        <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Левая часть - текст */}
                    <div>
                        <div className="mb-6">
                            <p className="text-xl font-bold text-[#0099B1] mb-2">{t('aboutUs')}</p>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('Sátti Organization')}</h2>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                <span className="font-semibold text-[#0099B1]">{t('Sátti Organization')}</span> {t('aboutUsHomeDesc1')}
                            </p>
                            <p>
                                {t('aboutUsHomeDesc2')}
                            </p>
                            <p>
                                {t('aboutUsHomeDesc3')}
                            </p>
                        </div>
                    </div>

                    {/* Правая часть - изображение или иконки услуг */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-[#0099B1] to-[#007B94] text-white p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3"></div>
                            <h3 className="font-bold text-lg mb-2">{t('kazakhCuisineHome')}</h3>
                            <p className="text-sm opacity-90">{t('kazakhCuisineHomeDesc')}</p>
                        </div>

                        <div className="bg-gradient-to-br from-[#D9B075] to-[#C09856] text-white p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3"></div>
                            <h3 className="font-bold text-lg mb-2">{t('fullServiceHome')}</h3>
                            <p className="text-sm opacity-90">{t('fullServiceHomeDesc')}</p>
                        </div>

                        <div className="bg-gradient-to-br from-[#D9B075] to-[#C09856] text-white p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3"></div>
                            <h3 className="font-bold text-lg mb-2">{t('anyLocationsHome')}</h3>
                            <p className="text-sm opacity-90">{t('anyLocationsHomeDesc')}</p>
                        </div>

                        <div className="bg-gradient-to-br from-[#0099B1] to-[#007B94] text-white p-6 rounded-xl text-center">
                            <div className="text-4xl mb-3"></div>
                            <h3 className="font-bold text-lg mb-2">{t('yearsExperience')}</h3>
                            <p className="text-sm opacity-90">{t('yearsExperienceDesc')}</p>
                        </div>
                    </div>
                </div>

                {/* Статистика */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-[#0099B1] mb-2">500+</div>
                        <div className="text-gray-600">{t('satisfiedClients')}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-[#D9B075] mb-2">1000+</div>
                        <div className="text-gray-600">{t('completedEvents')}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-[#0099B1] mb-2">50+</div>
                        <div className="text-gray-600">{t('experienceYears')}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="text-3xl font-bold text-[#D9B075] mb-2">24/7</div>
                        <div className="text-gray-600">{t('customerSupport')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            {/* Hero секция с satty.png */}
            <Homebg />

            {/* Компактная секция "О нас" */}
            <AboutUsSection />
        </div>
    );
};

export default Home;