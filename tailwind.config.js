/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                ibm: ["'IBM Plex Sans'", 'sans-serif'],
                mplus: ["'M PLUS Rounded 1c'", 'sans-serif'],
                code: ["'Source Code Pro', 'monospace'"],
            },
        },
    },
    plugins: [],
}
