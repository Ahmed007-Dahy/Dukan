/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            screens: {
                sm: "640px",
                md: "767px",
                tablet: "992px",
                lg: "1200px",
                xl: "1300px",
                "2xl": "1400px",
                "3xl": "1536px",
                portrait: {
                    raw: "(orientation: portrait)",
                },
                landscape: {
                    raw: "(orientation: landscape)",
                },
            },
            colors: {
                pageInfo: "#F9F9F9",
                pageInfoTextColor: "#070706",
                categoriesBorder: "#B0B0B0",
                cashback: "#F7DE6F",
                navbarResponsive: "#007460",
                locationResponsive: "#DCF3F3",
                banner: "#00A9A2",
                paginationColor: "#FF4300",
                bannerResponsive: "#D5F07D",
                onlineShop: "#A092E0",
                richGround: "#004837",
                titleOfCard: "#FF8540",
                footer: "#272727",
                household: "#DCF3F3",
                vitamins: "#71C562",
            },
            fontFamily: {
                Quicksand: "Quicksand",
            },
        },
    },
    plugins: [],
};
