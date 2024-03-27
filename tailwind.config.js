/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                cardo: "Cardo, serif",
            },
            screens: {
                "3xl": "2560px",
            },
        },
    },
    plugins: [],
};
