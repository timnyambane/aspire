/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: { sans: ["Hanken Grotesk", "sans serif"] },
        },
    },
    plugins: [require("tailwind-scrollbar"), require("tailwindcss-primeui")],
    darkMode: "selector",
};
