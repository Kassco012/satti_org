import React, { useState, useEffect } from 'react';
import { useLanguage } from '../components/LanguageContext';

const ReviewsCarousel = () => {
    const { t, currentLanguage } = useLanguage();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Данные отзывов с переводами
    const getReviews = () => {
        const reviewsData = {
            ru: [
                {
                    id: 1,
                    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Невероятно показала хорошую организацию, всё было выдержано по тайминг! Удивительно организационный подход, когда нужно было доделать обслуживание блюда. Были очень внимательны! Удовлетворены сервисом и качеством!",
                    author: "Ерлан и Алия",
                    event: "Свадебное торжество"
                },
                {
                    id: 2,
                    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Спасибо за прекрасно организованный корпоратив! Коллеги до сих пор в восторге от ужина и обслуживания. Все блюда были свежими и очень вкусными. Персонал работал четко и незаметно.",
                    author: "Алан Сырым",
                    event: "Корпоративное мероприятие"
                },
                {
                    id: 3,
                    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Заказывали кейтеринг на день рождения мамы. Все гости были в восторге! Особенно понравились канапе и горячие закуски. Сервис на высшем уровне, всё было очень красиво оформлено.",
                    author: "Даулет Турсын",
                    event: "День рождения"
                },
                {
                    id: 4,
                    image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Выездное мероприятие на природе прошло просто идеально! Несмотря на сложные условия, команда справилась на отлично. Еда была горячая и вкусная, сервировка — как в ресторане.",
                    author: "Марат Абдуллаев",
                    event: "Выездной банкет"
                }
            ],
            kz: [
                {
                    id: 1,
                    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Керемет ұйымдастыру көрсетті, бәрі уақыт бойынша сақталды! Тағамды қызмет көрсетуді аяқтау керек болғанда ғажайып ұйымдастырушылық тәсіл. Өте мұқият болды! Қызмет пен сапаға қанағаттанамыз!",
                    author: "Ерлан және Әлия",
                    event: "Үйлену тойы"
                },
                {
                    id: 2,
                    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Керемет ұйымдастырылған корпоратив үшін рахмет! Әріптестер әлі күнге дейін кешкі ас пен қызмет көрсетуден қуанып тұр. Барлық тағамдар жаңа және өте дәмді болды. Персонал нақты және байқаусыз жұмыс істеді.",
                    author: "Алан Сырым",
                    event: "Корпоративтік іс-шара"
                },
                {
                    id: 3,
                    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Ананың туған күніне кейтеринг тапсырыс бердік. Барлық қонақтар қуанышта болды! Әсіресе канапе мен ыстық тағамдар ұнады. Қызмет жоғары деңгейде, бәрі өте әдемі безендірілген.",
                    author: "Дәулет Тұрсын",
                    event: "Туған күн"
                },
                {
                    id: 4,
                    image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Табиғаттағы сыртқы іс-шара өте керемет өтті! Қиын жағдайларға қарамастан, команда өте жақсы справка берді. Тағам ыстық және дәмді, ресторандағы сияқты үстел жабдығы.",
                    author: "Марат Абдуллаев",
                    event: "Сыртқы банкет"
                }
            ],
            en: [
                {
                    id: 1,
                    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Incredibly showed good organization, everything was kept on time! Amazing organizational approach when it was necessary to finish serving the dish. They were very attentive! Satisfied with service and quality!",
                    author: "Erlan and Aliya",
                    event: "Wedding Celebration"
                },
                {
                    id: 2,
                    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "Thank you for the wonderfully organized corporate event! Colleagues are still delighted with the dinner and service. All dishes were fresh and very tasty. The staff worked clearly and discreetly.",
                    author: "Alan Syrym",
                    event: "Corporate Event"
                },
                {
                    id: 3,
                    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "We ordered catering for mom's birthday. All guests were delighted! Especially liked the canapés and hot appetizers. Service at the highest level, everything was very beautifully decorated.",
                    author: "Daulet Tursyn",
                    event: "Birthday"
                },
                {
                    id: 4,
                    image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    text: "The outdoor event in nature went just perfectly! Despite difficult conditions, the team did excellently. The food was hot and tasty, table setting - like in a restaurant.",
                    author: "Marat Abdullayev",
                    event: "Outdoor Banquet"
                }
            ]
        };

        return reviewsData[currentLanguage] || reviewsData.ru;
    };

    const reviews = getReviews();
    const totalSlides = reviews.length;

    // Автопроигрывание
    useEffect(() => {
        let autoPlayInterval;
        let timerInterval;

        if (isAutoPlaying) {
            autoPlayInterval = setInterval(() => {
                setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
                setTimeLeft(5);
            }, 5000);

            timerInterval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        return 5;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(autoPlayInterval);
            clearInterval(timerInterval);
        };
    }, [isAutoPlaying, totalSlides]);

    const nextSlide = () => {
        setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
        setTimeLeft(5);
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        setTimeLeft(5);
    };

    const goToSlide = (index) => {
        setCurrentSlideIndex(index);
        setTimeLeft(5);
    };

    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
        setTimeLeft(5);
    };

    // Обработка свайпов
    const handleTouchStart = (e) => {
        const touchStart = e.touches[0].clientX;
        e.currentTarget.touchStartX = touchStart;
    };

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;
        const touchStart = e.currentTarget.touchStartX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Заголовок */}
                <h2 className="text-5xl font-bold mb-12" style={{
                    background: `linear-gradient(to right, #D9B075, #D9B075)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    {t('clientReviews')}
                </h2>

                {/* Карусель */}
                <div
                    className="relative bg-white rounded-3xl shadow-2xl p-8 overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Слайды */}
                    <div className="relative">
                        {reviews.map((review, index) => (
                            <div
                                key={review.id}
                                className={`transition-all duration-500 ${index === currentSlideIndex
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-95 absolute top-0 left-0 right-0'
                                    }`}
                            >
                                <div className="flex flex-col items-center max-w-2xl mx-auto">
                                    {/* Изображение */}
                                    <div className="relative mb-8">
                                        <img
                                            src={review.image}
                                            alt={`${t('clientReviews')} ${review.author}`}
                                            className="w-80 h-96 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>

                                    {/* Контент отзыва */}
                                    <div className="text-center">
                                        <div className="relative mb-6">
                                            <span className="text-6xl absolute -top-4 -left-8" style={{ color: '#D9B075' }}>"</span>
                                            <p className="text-lg leading-relaxed text-black-600 italic px-8">
                                                {review.text}
                                            </p>
                                            <span className="text-6xl absolute -bottom-8 -right-4" style={{ color: '#D9B075' }}>"</span>
                                        </div>

                                        <div className="border-t pt-4">
                                            <h4 className="text-xl font-semibold mb-2" style={{ color: '#D9B075' }}>
                                                {review.author}
                                            </h4>
                                            <p className="text-sm" style={{ color: '#D9B075' }}>
                                                {review.event}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Навигация */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            style={{ background: `linear-gradient(to right, #0099B1, #0099B1)` }}
                        >
                            ‹
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            style={{ background: `linear-gradient(to right, #0099B1, #0099B1)` }}
                        >
                            ›
                        </button>
                    </div>

                    {/* Индикаторы точек */}
                    <div className="flex justify-center gap-3 mt-6">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlideIndex
                                    ? 'scale-125'
                                    : 'hover:bg-gray-400'
                                    }`}
                                style={{
                                    backgroundColor: index === currentSlideIndex
                                        ? '#0099B1'
                                        : '#d1d5db'
                                }}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-4 text-gray-500 text-sm">
                        {isAutoPlaying ? (
                            <> {timeLeft}с</>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>

                {/* Дополнительная информация */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold mb-2" style={{ color: '#D9B075' }}>500+</div>
                        <div className="text-gray-600">{t('satisfiedClients')}</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold mb-2" style={{ color: '#D9B075' }}>1000+</div>
                        <div className="text-gray-600">{t('completedEvents')}</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold mb-2" style={{ color: '#D9B075' }}>5★</div>
                        <div className="text-gray-600">
                            {currentLanguage === 'ru' ? 'Средняя оценка' :
                                currentLanguage === 'kz' ? 'Орташа бағалау' : 'Average Rating'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCarousel;
