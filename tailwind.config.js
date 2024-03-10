/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                yale_blue: {
                    100: "#d1d9e4",
                    200: "#a4b3c9",
                    300: "#768caf",
                    400: "#496694",
                    500: "#1b4079",
                    600: "#163361",
                    700: "#102649",
                    800: "#0b1a30",
                    900: "#050d18",
                },
                cambridge_blue: {
                    100: "#f5f9e9",
                    200: "#eaf2d3",
                    300: "#e0ecbc",
                    400: "#d5e5a6",
                    500: "#cbdf90",
                    600: "#a2b273",
                    700: "#7a8656",
                    800: "#51593a",
                    900: "#292d1d",
                },
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
