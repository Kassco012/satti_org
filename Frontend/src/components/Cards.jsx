import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import Swal from 'sweetalert2'

const Cards = ({ item }) => {
    const { name, image, price, description, _id } = item;
    const { t } = useLanguage();

    const navigate = useNavigate();
    const location = useLocation();
    const user = null;

    const handleAddToCart = (item) => {
        Swal.fire({
            title: t('orderViaChat'),
            text: t('orderViaChatDesc'),
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#25D366',
            cancelButtonColor: '#0088cc',
            confirmButtonText: 'WhatsApp',
            cancelButtonText: 'Telegram'
        }).then((result) => {
            if (result.isConfirmed) {
                // Отправка в WhatsApp
                const message = ` ${t('order')}: ${name}\n ${t('price')}: ${price} ₸\n ${description || ''}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/77017220051?text=${encodedMessage}`, '_blank');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Отправка в Telegram
                const message = ` ${t('order')}: ${name}\n ${t('price')}: ${price} ₸\n ${description || ''}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://t.me/77017220051?text=${encodedMessage}`, '_blank');
            }
        });
    };

    return (
        <div className="card shadow-xl relative mr-5 md:my-5 bg-white">
            <figure>
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="hover:scale-105 rounded-lg transition-all w-auto duration-200 md:h-60"
                    />
                ) : (
                    // Заглушка для изображения, если его нет
                    <div className="h-60 flex items-center justify-center rounded-lg" style={{ background: `linear-gradient(to bottom right, #D9B075, #cc9999)` }}>
                        <span className="text-6xl"></span>
                    </div>
                )}
            </figure>

            <div className="card-body text-black">
                <Link to={`/menu/${_id}`}>
                    <h2 className="card-title text-lg transition-colors" style={{ color: 'inherit' }}>
                        {name}
                    </h2>
                </Link>

                {description && (
                    <p className="text-md text-gray-600">
                        {description}
                    </p>
                )}

                <div className="card-actions justify-between items-center mt-2">
                    <h5 className="font-semibold">
                        <span className="text-sm text-red-500">₸ </span>
                        {price}
                    </h5>
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn text-white border-none hover:opacity-80"
                        style={{ backgroundColor: '#cc0000' }}
                    >
                        {t('orderButton')}
                    </button>
                </div>
            </div>

            <style jsx>{`
                .card-title:hover {
                    color: #0099B1 !important;
                }
            `}</style>
        </div>
    );
};

export default Cards;