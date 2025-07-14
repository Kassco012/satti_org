import React, { useState } from 'react';
import { Plus, Minus, Calendar, Users, MapPin, Clock, Calculator } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const OrderCalculator = () => {
    const { t } = useLanguage();
    const [serviceType, setServiceType] = useState('');
    const [guests, setGuests] = useState(10);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [selectedService, setSelectedService] = useState(null);
    const [additionalServices, setAdditionalServices] = useState({});

    const services = {
        buffet: {
            name: t('buffets'),
            image: '/images/furshet.jpg',
            items: [
                { id: 'buffet-light', name: t('lightBuffet'), priceMin: 4000, priceMax: 6000, unit: t('perPerson') },
                { id: 'buffet-standard', name: t('standardBuffet'), priceMin: 5600, priceMax: 8400, unit: t('perPerson') },
                { id: 'buffet-premium', name: t('premiumBuffet'), priceMin: 7200, priceMax: 10800, unit: t('perPerson') },
                { id: 'buffet-vip', name: t('vipBuffet'), priceMin: 8000, priceMax: 12000, unit: t('perPerson') }
            ]
        },
        coffee: {
            name: t('coffeeBreaks'),
            image: '/images/coffee-break.jpg',
            items: [
                { id: 'coffee-mini', name: t('miniCoffeeBreak'), priceMin: 4000, priceMax: 6000, unit: t('perPerson') },
                { id: 'coffee-standard', name: t('standardCoffeeBreak'), priceMin: 5600, priceMax: 8400, unit: t('perPerson') },
                { id: 'coffee-extended', name: t('extendedCoffeeBreak'), priceMin: 4800, priceMax: 7200, unit: t('perPerson') }
            ]
        },
        banquet: {
            name: t('banquets'),
            image: '/images/banquet.jpg',
            items: [
                { id: 'banquet-classic', name: t('classicBanquet'), priceMin: 8000, priceMax: 12000, unit: t('perPerson') },
                { id: 'banquet-deluxe', name: t('deluxeBanquet'), priceMin: 10000, priceMax: 15000, unit: t('perPerson') },
                { id: 'banquet-royal', name: t('royalBanquet'), priceMin: 12000, priceMax: 18000, unit: t('perPerson') }
            ]
        },
        delivery: {
            name: t('dishDelivery'),
            image: '/images/delivery.jpg',
            items: [
                { id: 'hot-dishes', name: t('hotDishes'), priceMin: 5600, priceMax: 8400, unit: t('perPerson') },
                { id: 'cold-appetizers', name: t('coldAppetizers'), priceMin: 4000, priceMax: 6000, unit: t('perPerson') },
                { id: 'desserts', name: t('desserts'), priceMin: 1600, priceMax: 2400, unit: t('perPerson') },
                { id: 'salads', name: t('salads'), priceMin: 4000, priceMax: 6000, unit: t('perPerson') }
            ]
        }
    };

    const additionalOptions = {
        waiter: { name: t('waiters'), priceMin: 24000, priceMax: 36000, unit: t('perDay') },
        equipment: { name: t('equipmentRental'), priceMin: 40000, priceMax: 60000, unit: t('perSet') },
        decoration: { name: t('decorDesign'), priceMin: 80000, priceMax: 120000, unit: t('perSet') },
        music: { name: t('musicSupport'), priceMin: 56000, priceMax: 84000, unit: t('perDay') },
        photographer: { name: t('photographer'), priceMin: 48000, priceMax: 72000, unit: t('perDay') }
    };

    const selectService = (item) => {
        setSelectedService(item);
    };

    const toggleAdditionalService = (key) => {
        setAdditionalServices(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const calculateTotal = () => {
        let totalMin = 0;
        let totalMax = 0;

        if (selectedService) {
            const multiplier = selectedService.unit === t('perPerson') ? guests : 1;
            totalMin += selectedService.priceMin * multiplier;
            totalMax += selectedService.priceMax * multiplier;
        }

        const additionalMin = Object.entries(additionalServices)
            .filter(([_, selected]) => selected)
            .reduce((sum, [key]) => sum + additionalOptions[key].priceMin, 0);

        const additionalMax = Object.entries(additionalServices)
            .filter(([_, selected]) => selected)
            .reduce((sum, [key]) => sum + additionalOptions[key].priceMax, 0);

        return { min: totalMin + additionalMin, max: totalMax + additionalMax };
    };

    const handleOrderSubmit = (platform) => {
        let message = ` *${t('orderCalculator')} Satty Catering*\n\n`;
        message += ` ${t('guestCount')}: ${guests}\n`;
        if (date) message += ` ${t('eventDate')}: ${new Date(date).toLocaleDateString()}\n`;
        if (time) message += ` ${t('time')}: ${time}\n`;
        if (location) message += ` ${t('address')}: ${location}\n\n`;

        if (selectedService) {
            const multiplier = selectedService.unit === t('perPerson') ? guests : 1;
            const serviceTotalMin = selectedService.priceMin * multiplier;
            const serviceTotalMax = selectedService.priceMax * multiplier;
            message += ` *Выбранная услуга:*\n`;
            message += `• ${selectedService.name} = ${serviceTotalMin.toLocaleString()}-${serviceTotalMax.toLocaleString()}₸\n\n`;
        }

        const additionalList = Object.entries(additionalServices)
            .filter(([_, selected]) => selected)
            .map(([key]) => `• ${additionalOptions[key].name} = ${additionalOptions[key].priceMin.toLocaleString()}-${additionalOptions[key].priceMax.toLocaleString()}₸`);

        if (additionalList.length > 0) {
            message += ` *${t('additionalServices')}:*\n`;
            additionalList.forEach(item => message += `${item}\n`);
            message += `\n`;
        }

        const total = calculateTotal();
        message += ` *${t('totalPayment')}: ${total.min.toLocaleString()}-${total.max.toLocaleString()}₸*\n\n`;
        message += `Пожалуйста, подтвердите заказ`;

        const encodedMessage = encodeURIComponent(message);
        const url = platform === 'whatsapp'
            ? `https://wa.me/77787575075?text=${encodedMessage}`
            : `https://t.me/77787575075?text=${encodedMessage}`;

        window.open(url, '_blank');
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
            {/* Header */}
            <div className="text-white p-6 rounded-t-xl shadow-lg" style={{ background: 'linear-gradient(to right, #0099B1)' }}>
                <div className="flex items-center gap-3 mb-2">
                    <Calculator className="w-8 h-8" />
                    <h1 className="text-3xl font-bold">{t('orderCalculator')}</h1>
                </div>
                <p className="text-lg" style={{ color: '#f0f9ff' }}> Sátti Organization - {t('qualityFirst')}</p>
            </div>

            <div className="border-l border-r border-gray-200 p-6 space-y-8">
                {/* Event Details */}
                <div className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        {t('eventDetails')}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Users className="w-4 h-4 inline mr-1" />
                                {t('guestCount')}
                            </label>
                            <input
                                type="number"
                                value={guests}
                                onChange={(e) => {
                                    setGuests(Math.max(1, parseInt(e.target.value) || 1));
                                    setSelectedService(null);
                                }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                style={{ '--focus-ring-color': '#0099B1' }}
                                onFocus={(e) => e.target.style.borderColor = '#0099B1'}
                                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                                min="1"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Calendar className="w-4 h-4 inline mr-1" />
                                {t('eventDate')}
                            </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                onFocus={(e) => e.target.style.borderColor = '#0099B1'}
                                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <Clock className="w-4 h-4 inline mr-1" />
                                {t('time')}
                            </label>
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                onFocus={(e) => e.target.style.borderColor = '#0099B1'}
                                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <MapPin className="w-4 h-4 inline mr-1" />
                                {t('address')}
                            </label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder={t('addressPlaceholder')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                onFocus={(e) => e.target.style.borderColor = '#0099B1'}
                                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                            />
                        </div>
                    </div>
                </div>

                {/* Service Selection */}
                <div>
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">{t('selectServiceType')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {Object.entries(services).map(([key, service]) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setServiceType(key);
                                    setSelectedService(null);
                                }}
                                className={`p-4 rounded-xl border-2 transition-all overflow-hidden ${serviceType === key
                                    ? 'border-[#0099B1] bg-[#0099B1]/10 text-[#0099B1]'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                style={{
                                    borderColor: serviceType === key ? '#0099B1' : '#e5e7eb',
                                    backgroundColor: serviceType === key ? 'rgba(0, 153, 177, 0.1)' : 'white',
                                    color: serviceType === key ? '#0099B1' : 'inherit'
                                }}
                            >
                                <div className="mb-3">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-20 object-cover rounded-lg"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    <div className="text-2xl mt-2 hidden"></div>
                                </div>
                                <div className="font-medium">{service.name}</div>
                            </button>
                        ))}
                    </div>

                    {/* Service Options */}
                    {serviceType && (
                        <div className="bg-white border rounded-xl p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-3">
                                <img
                                    src={services[serviceType].image}
                                    alt={services[serviceType].name}
                                    className="w-8 h-8 object-cover rounded"
                                />
                                {services[serviceType].name} {t('forPersons')} {guests} {t('persons')}
                            </h3>
                            <div className="grid gap-3">
                                {services[serviceType].items.map((item) => {
                                    const multiplier = item.unit === t('perPerson') ? guests : 1;
                                    const totalPriceMin = item.priceMin * multiplier;
                                    const totalPriceMax = item.priceMax * multiplier;
                                    const isSelected = selectedService && selectedService.id === item.id;

                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => selectService(item)}
                                            className={`flex items-center justify-between p-4 border-2 rounded-lg transition-all`}
                                            style={{
                                                borderColor: isSelected ? '#0099B1' : '#e5e7eb',
                                                backgroundColor: isSelected ? 'rgba(0, 153, 177, 0.1)' : 'white'
                                            }}
                                        >
                                            <div className="text-left">
                                                <div className={`font-medium`} style={{ color: isSelected ? '#0099B1' : '#111827' }}>
                                                    {item.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {item.priceMin.toLocaleString()}-{item.priceMax.toLocaleString()}₸ {item.unit}
                                                </div>
                                            </div>
                                            <div className={`text-right`} style={{ color: isSelected ? '#0099B1' : '#111827' }}>
                                                <div className="text-xl font-bold">
                                                    {totalPriceMin.toLocaleString()}-{totalPriceMax.toLocaleString()}₸
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {t('total')}
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Additional Services */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('additionalServices')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Object.entries(additionalOptions).map(([key, service]) => (
                            <label key={key} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                <input
                                    type="checkbox"
                                    checked={additionalServices[key] || false}
                                    onChange={() => toggleAdditionalService(key)}
                                    className="w-4 h-4 rounded"
                                    style={{ accentColor: '#0099B1' }}
                                />
                                <div className="ml-3 flex-1">
                                    <div className="font-medium">{service.name}</div>
                                    <div className="text-sm text-gray-500">
                                        {service.priceMin.toLocaleString()}-{service.priceMax.toLocaleString()}₸ {service.unit}
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Total Section */}
            <div className="p-6 rounded-b-xl border" style={{ background: 'linear-gradient(to right, #f9fafb, #f3f4f6)' }}>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{t('totalPayment')}</h2>
                        <p className="text-gray-600">
                            {guests > 0 && `${t('forPersons')} ${guests} ${t('persons')}`}
                            {date && ` • ${new Date(date).toLocaleDateString()}`}
                            {time && ` • ${time}`}
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold" style={{ color: '#D9B075' }}>
                            {(() => {
                                const total = calculateTotal();
                                return `${total.min.toLocaleString()}-${total.max.toLocaleString()}₸`;
                            })()}
                        </div>
                        <div className="flex gap-2 mt-3">
                            <button
                                onClick={() => handleOrderSubmit('whatsapp')}
                                disabled={!selectedService}
                                className={`px-6 py-3 rounded-xl transition-colors font-medium ${!selectedService
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-green-500 text-white hover:bg-green-600'
                                    }`}
                            >
                                WhatsApp
                            </button>
                            <button
                                onClick={() => handleOrderSubmit('telegram')}
                                disabled={!selectedService}
                                className={`px-6 py-3 rounded-xl transition-colors font-medium ${!selectedService
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-blue-500 text-white hover:bg-blue-600'
                                    }`}
                            >
                                Telegram
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCalculator;