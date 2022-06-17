module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            'darkBlue': '#344151',
            'green':'#0bc469',
            'white':'white',
            'grey':'#7a7a7a',
            'black':'black'
        },
        screens: {
            xsm: "0px",
            sm: "320px",
            // => @media (min-width: 320px) { ... }

            md: "640px",
            // => @media (min-width: 640px) { ... }

            lg: "768px",
            // => @media (min-width: 768px) { ... }
            xl: "1024px",
            // => @media (min-width: 1024px) { ... }

            "2xl": "1280px",
            // => @media (min-width: 1280px) { ... }

            "3xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },

    plugins: [],
};
