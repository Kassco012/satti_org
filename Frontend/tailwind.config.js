/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        './pages/**/*.{html,js}',
    ],
    theme: {
        extend: {
            colors: {
                "Green": "#ffb534", // Изменено с #ffb534 на темно-бордовый
                "secondary": "#555",
                "primaryBG": "#ffff",
                "buffetBg": "#f3f1ed",
                "red": "#8B0000", // Изменено с #73bf10 на темно-бордовый
                "hover": "#660000", // Изменено с #46b141 на темно-бордовый для hover
                // Добавляем дополнительные бордовые оттенки
                "burgundy": "#8B0000",
                "burgundy-light": "#A0002A",
                "burgundy-dark": "#660000",
                // Новые цвета согласно требованиям
                "teal": "#0099B1", // заменяет все teal цвета
                "yellow": "#D9B075", // заменяет все yellow цвета
                "orange": "#D9B075", // заменяет все orange цвета
            },
            fontFamily: {
                'great-vibes': ['Great Vibes', 'cursive']
            }
        },
    },
    plugins: [require("daisyui")],
}