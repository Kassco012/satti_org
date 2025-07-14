import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import img4 from '../pages/home/img/О нас.jpg'

const AboutUsPage = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const services = [
        {
            icon: "",
            title: t('nationalCuisine'),
            description: t('nationalCuisineDesc')
        },
        {
            icon: "",
            title: t('locationChoice'),
            description: t('locationChoiceDesc')
        },
        {
            icon: "",
            title: t('fullService'),
            description: t('fullServiceDesc')
        },
        {
            icon: "",
            title: t('mediaServices'),
            description: t('mediaServicesDesc')
        },
        {
            icon: "",
            title: t('decoration'),
            description: t('decorationDesc')
        },
        {
            icon: "",
            title: t('turnkey'),
            description: t('turnkeyDesc')
        }
    ];

    const teamValues = [
        {
            icon: "",
            title: t('passionWork'),
            description: t('passionWorkDesc')
        },
        {
            icon: "",
            title: t('quality'),
            description: t('qualityDesc')
        },
        {
            icon: "",
            title: t('individualApproach'),
            description: t('individualApproachDesc')
        },
        {
            icon: "",
            title: t('punctuality'),
            description: t('punctualityDesc')
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Основные услуги */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16 flex flex-col items-center justify-center">
                    <h2 className="text-5xl font-bold mb-6 text-center" style={{ color: '#0099B1' }}>
                        {t('organizeEverything')}
                    </h2>
                    <p className="text-2xl max-w-3xl mx-auto text-center" style={{ color: '#0099B1' }}>
                        {t('organizeDesc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border"
                            style={{ borderColor: '#D9B075' }}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#D9B075' }}>
                                {service.title}
                            </h3>
                            <p className="text-lg text-center leading-relaxed" style={{ color: '#0099B1' }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Наша миссия */}
                <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20 border" style={{ borderColor: '#D9B075' }}>
                    <div className="text-center mb-12 flex flex-col items-center justify-center">
                        <h2 className="text-5xl font-bold mb-8 text-center" style={{ color: '#0099B1' }}>
                            {t('ourMission')}
                        </h2>
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-xl leading-relaxed mb-8 text-center" style={{ color: '#0099B1' }}>
                                <span className="font-semibold" style={{ color: '#D9B075' }}>Sátti Organization</span> {t('missionText1')}
                            </p>
                            <p className="text-xl leading-relaxed mb-8 text-center" style={{ color: '#0099B1' }}>
                                {t('missionText2')}
                            </p>
                            <p className="text-xl leading-relaxed text-center" style={{ color: '#0099B1' }}>
                                {t('missionText3')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Наши ценности */}
                <div className="mb-20">
                    <div className="text-center flex flex-col items-center justify-center mb-16">
                        <h2 className="text-5xl font-bold text-center" style={{ color: '#0099B1' }}>
                            {t('ourValues')}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamValues.map((value, index) => (
                            <div
                                key={index}
                                className="text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                                style={{ background: `linear-gradient(to bottom right, #0099B1, #0099B1)` }}
                            >
                                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 text-center">
                                    {value.title}
                                </h3>
                                <p className="text-center leading-relaxed text-lg" style={{ color: '#D9B075' }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Добавляем компактную секцию "О нас" */}
                <div className="mb-20">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-lg p-8">
                            <div className="about-img">
                                <img
                                    src={img4}
                                    alt={t('about')}
                                    className="w-full rounded-2xl shadow-lg"
                                />
                            </div>
                            <div className="about-content">
                                <div className="section-header mb-6">
                                    <p className="text-xl lg:text-2xl font-bold" style={{ color: '#0099B1' }}>{t('about')}</p>
                                    <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#0099B1' }}>Sátti Organization</h2>
                                </div>
                                <div className="about-text text-sm">
                                    <p className="leading-relaxed" style={{ color: '#0099B1' }}>
                                        Sátti Organization {t('missionText1')} {t('missionText2')} {t('missionText3')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Статистика */}
                <div className="rounded-3xl text-white p-12 mb-20" style={{ background: `linear-gradient(to right, #D9B075, #D9B075)` }}>
                    <div className="text-center flex flex-col items-center justify-center mb-12">
                        <h2 className="text-5xl font-bold text-center text-white">
                            {t('ourAchievements')}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                            <div className="text-5xl font-bold mb-4 text-white">500+</div>
                            <div className="text-xl text-white">{t('satisfiedClients')}</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                            <div className="text-5xl font-bold mb-4 text-white">1000+</div>
                            <div className="text-xl text-white">{t('completedEvents')}</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                            <div className="text-5xl font-bold mb-4 text-white">50+</div>
                            <div className="text-xl text-white">{t('experienceYears')}</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                            <div className="text-5xl font-bold mb-4 text-white">24/7</div>
                            <div className="text-xl text-white">{t('customerSupport')}</div>
                        </div>
                    </div>
                </div>

                {/* Призыв к действию */}
                <div className="text-center bg-white rounded-3xl shadow-2xl p-12 border flex flex-col items-center justify-center" style={{ borderColor: '#D9B075' }}>
                    <h2 className="text-5xl font-bold mb-8 text-center" style={{ color: '#0099B1' }}>
                        {t('readyForEvent')}
                    </h2>
                    <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-center">
                        {t('readyForEventDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/contact')}
                            className="text-white px-10 py-5 rounded-xl font-semibold text-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                            style={{ background: `linear-gradient(to right, #0099B1, #0099B1)` }}
                        >
                            {t('contactUs')}
                        </button>
                        <button
                            onClick={() => navigate('/calculator')}
                            className="border-2 px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300"
                            style={{
                                borderColor: '#0099B1',
                                color: '#0099B1',
                                backgroundColor: 'transparent'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#D9B075'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            {t('calculateCost')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;