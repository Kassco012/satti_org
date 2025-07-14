import React from "react";
import { useLanguage } from "../components/LanguageContext";

const OurServices = () => {
    const { t } = useLanguage();

    const serviceLists = [
        {
            id: 1,
            title: t('catering'),
            des: t('cateringDesc'),
            img: "/images/home/services/icon1.png"
        },
        {
            id: 2,
            title: t('fastDelivery'),
            des: t('fastDeliveryDesc'),
            img: "/images/home/services/icon2.png"
        },
        {
            id: 3,
            title: t('onlineOrdering'),
            des: t('onlineOrderingDesc'),
            img: "/images/home/services/icon3.png"
        },
        {
            id: 4,
            title: t('giftCards'),
            des: t('giftCardsDesc'),
            img: "/images/home/services/icon4.png"
        },
    ];

    return (
        <div className="section-container my-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <div className="text-left md:w-4/5">
                        <p className="subtitle">{t('ourStoryServices')}</p>
                        <h2 className="title">{t('culinaryJourney')}</h2>
                        <p className="my-5 text-secondary leading-[30px]">
                            {t('culinaryDesc')}
                        </p>

                        <button className="bg-red font-semibold btn text-white px-8 py-3 rounded-full">
                            {t('learnMore')}
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
                        {
                            serviceLists.map((service) => (
                                <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-red cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
                                    <img src={service.img} alt="" className=" mx-auto" />
                                    <h5 className="pt-3 font-semibold"> {service.title}</h5>
                                    <p className="text-[#0099B1]">{service.des}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;