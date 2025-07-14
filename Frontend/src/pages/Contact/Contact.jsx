import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useLanguage } from '../../components/LanguageContext';
import '../Contact/Contact.css'

export default function Contact() {
    const { t } = useLanguage();
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        // Проверяем заполненность полей
        const formData = new FormData(form.current);
        const userName = formData.get('user_name');
        const userEmail = formData.get('user_email');
        const userMessage = formData.get('message');

        if (!userName || !userEmail || !userMessage) {
            setMessage(t('fillAllFields') || 'Пожалуйста, заполните все поля');
            setIsLoading(false);
            return;
        }

        // Создаем параметры для отправки
        const templateParams = {
            user_name: userName,
            user_email: userEmail,
            message: userMessage,
            to_email: 'info@sattyorganization.com',
            to_name: 'Satti Organization'
        };

        // Отправка через EmailJS
        emailjs
            .send(
                'service_ws8vzj8', // Service ID
                'template_d22c3pf', // Template ID
                templateParams,
                'cjMjQfemmbdcPF5mY' // Public Key
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    form.current.reset();
                    setMessage(t('messageSentSuccess') || 'Сообщение успешно отправлено!');
                    setIsLoading(false);
                },
                (error) => {
                    console.log('FAILED...', error);
                    // Альтернативный способ - mailto ссылка
                    const subject = encodeURIComponent('Сообщение с сайта Satti Organization');
                    const body = encodeURIComponent(`
Имя: ${userName}
Email: ${userEmail}
Сообщение: ${userMessage}
                    `);
                    window.location.href = `mailto:info@sattyorganization.com?subject=${subject}&body=${body}`;
                    setMessage(t('messageSentError') || 'Откроется почтовый клиент для отправки');
                    setIsLoading(false);
                },
            );
    };

    // Альтернативная функция отправки через mailto
    const sendViaEmail = () => {
        const formData = new FormData(form.current);
        const userName = formData.get('user_name') || '';
        const userEmail = formData.get('user_email') || '';
        const userMessage = formData.get('message') || '';

        const subject = encodeURIComponent('Сообщение с сайта Satty Catering');
        const body = encodeURIComponent(`
Имя: ${userName}
Email: ${userEmail}
Сообщение: ${userMessage}
        `);

        window.location.href = `mailto:info@sattyorganization.com?subject=${subject}&body=${body}`;
    };

    return (
        <div>
            <div className="page-header1 mb-0">
                <div className="container">
                    <div className="row mx-auto text-center justify-center">
                        <div className="col-12">
                            {/* <h2 className="font-extrabold  text-6xl text-red  pt-10">Contact US</h2> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact py-16">
                <div className="container mx-auto px-4">
                    <div className="section-header text-center">
                        <h2 className='text-black font-extrabold text-5xl my-4'>
                            {t('contactUsAnyQuestion')}
                        </h2>
                    </div>

                    {/* Контактная информация */}
                    <div className="flex flex-wrap justify-around contact-information my-10">
                        <div className="md:w-1/4 mb-6">
                            <div className="contact-info text-center">
                                <div className="contact-icon mb-3">
                                    <i className="fas fa-map-marker-alt text-[#D9B075] text-2xl"></i>
                                </div>
                                <div className="contact-text">
                                    <h3 className="font-bold text-lg mb-2">{t('ourAddress')}</h3>
                                    <p className="text-gray-600">Алматы, Казахстан</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/4 mb-6">
                            <div className="contact-info text-center">
                                <div className="contact-icon mb-3">
                                    <i className="fas fa-phone-alt text-[#D9B075] text-2xl"></i>
                                </div>
                                <div className="contact-text">
                                    <h3 className="font-bold text-lg mb-2">{t('contacts')}</h3>
                                    <p className="text-gray-600">+7 778 7575075</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/4 mb-6">
                            <div className="contact-info text-center">
                                <div className="contact-icon mb-3">
                                    <i className="fas fa-envelope text-[#D9B075] text-2xl"></i>
                                </div>
                                <div className="contact-text">
                                    <h3 className="font-bold text-lg mb-2">{t('email')}</h3>
                                    <p className="text-gray-600">info@sattyorganization.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Карта и форма */}
                    <div className='mt-20' id='FormMap'>
                        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
                            {/* Карта */}
                            <div className="w-full flex justify-center">
                                <iframe
                                    className='w-full max-w-md h-96 rounded-lg shadow-lg'
                                    title="My Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.175!2d76.8512!3d43.2220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDEzJzE5LjIiTiA3NsKwNTEnMDQuMyJF!5e0!3m2!1sru!2skz!4v1234567890123!5m2!1sru!2skz"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>

                            {/* Форма */}
                            <div className="w-full flex justify-center">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="user_name"
                                                placeholder={t('name') || 'Name'}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D9B075] focus:border-transparent outline-none transition-all"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="email"
                                                name="user_email"
                                                placeholder={t('email') || 'Email'}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D9B075] focus:border-transparent outline-none transition-all"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <textarea
                                                name="message"
                                                placeholder={t('message') || 'Message'}
                                                rows="5"
                                                style={{ resize: 'none' }}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D9B075] focus:border-transparent outline-none transition-all"
                                                required
                                            ></textarea>
                                        </div>

                                        {/* Сообщение о статусе отправки */}
                                        {message && (
                                            <div className={`p-3 rounded-lg text-sm ${message.includes('успешно') || message.includes('SUCCESS') ? 'bg-green-100 text-green-700' : 'bg-[#D9B075] bg-opacity-20 text-[#D9B075]'}`}>
                                                {message}
                                            </div>
                                        )}

                                        {/* Кнопки */}
                                        <div className="space-y-3">
                                            <button
                                                type="button"
                                                onClick={sendViaEmail}
                                                className="w-full bg-[#0099B1] hover:bg-[#007B94] text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                                            >
                                                {t('send')}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}