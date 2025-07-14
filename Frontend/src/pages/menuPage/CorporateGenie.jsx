import React, { useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';

const CorporateGenie = () => {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        guests: '',
        cuisine: [],
        location: '',
        customLocation: '',
        services: [],
        specialRequests: ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const getCuisineOptions = () => [
        { id: 'kazakh', label: t('kazakhCuisineLabel'), flag: '🇰🇿' },
        { id: 'turkish', label: t('turkishCuisineLabel'), flag: '🇹🇷' },
        { id: 'both', label: t('bothCuisines'), flag: '🌍' }
    ];

    const getLocationOptions = () => [
        { id: 'client', label: t('clientHasPlace') },
        { id: 'nature', label: t('natureLocation') },
        { id: 'banquet', label: t('banquetHall') },
        { id: 'eastern', label: t('easternStyle') }
    ];

    const getServiceOptions = () => [
        { id: 'decoration', label: t('hallDecoration') },
        { id: 'service', label: t('staffService') },
        { id: 'music', label: t('liveMusic') },
        { id: 'host', label: t('hostMaster') },
        { id: 'show', label: t('singerShow') },
        { id: 'photo', label: t('videoPhotoShooting') }
    ];

    const cuisineOptions = getCuisineOptions();
    const locationOptions = getLocationOptions();
    const serviceOptions = getServiceOptions();

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleMultiSelect = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter(item => item !== value)
                : [...prev[field], value]
        }));
    };

    const nextStep = () => {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const sendToWhatsApp = () => {
        const message = `*${t('orderCalculator')}*
${t('dateLabel')} ${formData.date}
${t('guestsLabel')} ${formData.guests}
${t('nameLabel')} ${formData.name}
${t('phoneLabel')} ${formData.phone}
${t('cuisineLabel')} ${formData.cuisine.join(', ')}
${t('locationLabel')} ${formData.location}
${t('servicesLabel')} ${formData.services.join(', ')}
${t('wishesLabel')} ${formData.specialRequests}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/77017220051?text=${encodedMessage}`, '_blank');

        setIsSubmitted(true);
    };

    const makePhoneCall = () => {
        window.open('tel:+77017220051', '_self');
    };

    if (isSubmitted) {
        return (
            <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <div className="text-green-500 text-4xl">✅</div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('thankYouSubmit')}</h2>
                    <p className="text-gray-600 mb-6">
                        {t('applicationSentWhatsApp')}
                    </p>
                    <button
                        onClick={() => {
                            setIsSubmitted(false);
                            setCurrentStep(1);
                            setFormData({
                                name: '', phone: '', date: '', guests: '', cuisine: [],
                                location: '', customLocation: '', services: [], specialRequests: ''
                            });
                        }}
                        className="bg-[#D9B075] hover:bg-[#D9B075] hover:opacity-90 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        {t('newOrder')}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20">
            <div className="max-w-2xl mx-auto">
                {/* Прогресс бар */}
                <div className="mb-8">
                    <div className="flex justify-between mb-2">
                        {[1, 2, 3, 4, 5].map((step) => (
                            <div
                                key={step}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                                          ${step <= currentStep ? 'bg-[#D9B075] text-white' : 'bg-gray-200 text-gray-500'}`}
                            >
                                {step}
                            </div>
                        ))}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-[#D9B075] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentStep / 5) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Шаг 1: Базовая информация */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                {t('basicInfo')}
                            </h2>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('yourName')}</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D9B075] focus:border-transparent"
                                    placeholder={t('enterYourName')}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('phone')}
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D9B075] focus:border-transparent"
                                    placeholder="+7 (777) 123-45-67"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('eventDateLabel')}
                                </label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => handleInputChange('date', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D9B075] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('approximateGuests')}
                                </label>
                                <input
                                    type="number"
                                    value={formData.guests}
                                    onChange={(e) => handleInputChange('guests', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D9B075] focus:border-transparent"
                                    placeholder={t('forExample30')}
                                    min="1"
                                />
                            </div>
                        </div>
                    )}

                    {/* Шаг 2: Выбор кухни */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                {t('selectCuisineTitle')}
                            </h2>

                            <div className="grid gap-4">
                                {cuisineOptions.map((option) => (
                                    <label
                                        key={option.id}
                                        className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                          ${formData.cuisine.includes(option.id)
                                                ? 'border-[#D9B075] bg-[#D9B075] bg-opacity-20'
                                                : 'border-gray-200 hover:border-[#D9B075]'}`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.cuisine.includes(option.id)}
                                            onChange={() => handleMultiSelect('cuisine', option.id)}
                                            className="w-5 h-5 text-[#D9B075] rounded focus:ring-[#D9B075]"
                                        />
                                        <div className="ml-4 flex items-center">
                                            <span className="text-2xl mr-3">{option.flag}</span>
                                            <span className="font-semibold text-gray-800">{option.label}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>

                            <div className="text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg">
                                {t('menuExampleAfterOrder')}
                            </div>
                        </div>
                    )}

                    {/* Шаг 3: Локация */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                {t('eventLocation')}
                            </h2>

                            <div className="space-y-3">
                                {locationOptions.map((option) => (
                                    <label
                                        key={option.id}
                                        className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                          ${formData.location === option.id
                                                ? 'border-[#D9B075] bg-[#D9B075] bg-opacity-20'
                                                : 'border-gray-200 hover:border-[#D9B075]'}`}
                                    >
                                        <input
                                            type="radio"
                                            name="location"
                                            checked={formData.location === option.id}
                                            onChange={() => handleInputChange('location', option.id)}
                                            className="w-5 h-5 text-[#D9B075] focus:ring-[#D9B075]"
                                        />
                                        <div className="ml-4 flex items-center">
                                            <span className="font-semibold text-gray-800">{option.label}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Шаг 4: Дополнительные услуги */}
                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                {t('additionalServicesTitle')}
                            </h2>

                            <div className="grid gap-3">
                                {serviceOptions.map((service) => (
                                    <label
                                        key={service.id}
                                        className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all
                          ${formData.services.includes(service.id)
                                                ? 'border-[#D9B075] bg-[#D9B075] bg-opacity-20'
                                                : 'border-gray-200 hover:border-[#D9B075]'}`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.services.includes(service.id)}
                                            onChange={() => handleMultiSelect('services', service.id)}
                                            className="w-5 h-5 text-[#D9B075] rounded focus:ring-[#D9B075]"
                                        />
                                        <div className="ml-4 flex items-center">
                                            <span className="font-semibold text-gray-800">{service.label}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {t('specialRequests')}
                                </label>
                                <textarea
                                    value={formData.specialRequests}
                                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D9B075] focus:border-transparent"
                                    rows="4"
                                    placeholder={t('tellAboutWishes')}
                                />
                            </div>
                        </div>
                    )}

                    {/* Шаг 5: Подтверждение */}
                    {currentStep === 5 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                {t('orderConfirmation')}
                            </h2>

                            <div className="bg-gray-50 p-6 rounded-xl space-y-3">
                                <div className="flex items-center"><strong>👤 {t('nameLabel')}</strong> <span className="ml-2">{formData.name}</span></div>
                                <div className="flex items-center"><strong>📞 {t('phoneLabel')}</strong> <span className="ml-2">{formData.phone}</span></div>
                                <div className="flex items-center"><strong>📅 {t('dateLabel')}</strong> <span className="ml-2">{formData.date}</span></div>
                                <div className="flex items-center"><strong>👥 {t('guestsLabel')}</strong> <span className="ml-2">{formData.guests}</span></div>
                                <div className="flex items-center">
                                    <strong>{t('cuisineLabel')}</strong>
                                    <span className="ml-2">
                                        {formData.cuisine.map(id => cuisineOptions.find(opt => opt.id === id)?.label).filter(Boolean).join(', ') || t('notSelected')}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <strong>{t('locationLabel')}</strong>
                                    <span className="ml-2">
                                        {locationOptions.find(opt => opt.id === formData.location)?.label || t('notSelected')}
                                    </span>
                                </div>
                                {formData.services.length > 0 && (
                                    <div className="flex items-start">
                                        <strong>{t('servicesLabel')}</strong>
                                        <span className="ml-2">
                                            {formData.services.map(id => serviceOptions.find(opt => opt.id === id)?.label).filter(Boolean).join(', ')}
                                        </span>
                                    </div>
                                )}
                                {formData.specialRequests && (
                                    <div className="flex items-start"><strong>📝 {t('wishesLabel')}</strong> <span className="ml-2">{formData.specialRequests}</span></div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={sendToWhatsApp}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors text-lg"
                                >
                                    {t('fillInWhatsApp')}
                                </button>

                                <button
                                    onClick={makePhoneCall}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-colors text-lg flex items-center justify-center gap-2"
                                >
                                    {t('callButton')}: +7 778 7575075
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Кнопки навигации */}
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className={`px-6 py-3 rounded-lg font-semibold transition-colors
                    ${currentStep === 1
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-[#D9B075] hover:bg-[#D9B075] hover:opacity-90 text-white'}`}
                        >
                            ← {t('back')}
                        </button>

                        {currentStep < 5 && (
                            <button
                                onClick={nextStep}
                                className="px-6 py-3 bg-[#D9B075] hover:bg-[#D9B075] hover:opacity-90 text-white rounded-lg font-semibold transition-colors"
                            >
                                {t('next')} →
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateGenie;