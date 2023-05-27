/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            "white": "#fff",
            "black": "#000",
            "dark-grey": "#373737",
            "purple": "#7F23E9",
            "blue": "#238de9",
            // --------------------------------
            "light-primary": "#6200EE",
            "light-primary-variant": "#3700B3",
            "light-secondary": "#03DAC6",
            "light-secondary-variant": "#018786",
            "light-background": "#fff",
            "light-text": "#121212",
            "light-error": "#B00020",
            "light-on-primary": "#fff",
            "light-on-secondary": "#000",
            // --------------------------------
            "dark-primary": "#BB86FC",
            "dark-primary-variant": "#3700B3",
            "dark-secondary": "#03DAC6",
            "dark-secondary-variant": "#018786",
            "dark-background": "#121212",
            "dark-text": "#fff",
            "dark-error": "#CF6679",
            "dark-on-primary": "#000",
            "dark-on-secondary": "#000",
        },
        fontFamily: {
            // "open-sans": ["'Open Sans'"]
        }
    },
    plugins: [],
}

