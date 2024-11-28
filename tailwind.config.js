/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./js/*.js"],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
            // sm: {
            //     padding: '6rem'
            // },



        },
        extend: {
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(0%)' },
                    '33.33%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(-100%)' },
                    '83.33%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(-200%)' },
                },


                swipein: {
                    '0%, 25%': { transform: 'translateY(115%)' },
                    '50% 100%': { transform: 'translateX(0%)' },
                },

            },
            animation: {
                slide: 'slide 12s infinite ease-in-out',
                swipein: 'swipein 0.4s ease-in',
            },

            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
                opensans: ['Open Sans', 'sans-serif'],
                fantasy: ['Fantasy', 'cursive'],
            },

            boxShadow: {
                insideshadow: 'inset 6px -6px 7px 0 rgba(0, 0, 0, 0.3), inset -6px 6px 7px 0 rgba(255, 255, 255, 1)',
                buttonshadow: 'inset 6px 6px 6px 0 rgba(0, 0, 0, 0.3), inset -6px -6px 6px 0 rgba(255, 255, 255, 1)',
                outsideshadow: '-6px -6px 7px 0 rgba(255, 255, 255, 1), 6px 6px 7px 0 rgba(0, 0, 0, 0.3)',
            },
            colors: {
                backgroundcolo: 'rgb(235, 236, 240)',
                brightyellow: '#ffc107',
                brightgray: '#6c757d',
                darkgray: '#343a40',
                brightorange: '#fd7e14',
                darkorange: 'rgb(234, 115, 21)',
                darkblue: 'hsl(243, 87%, 12%)',
                desblue: 'hsl(238, 22%, 44%)',
                brightblue: 'hsl(224, 93%, 58%)',
                modcyan: 'hsl(170, 45%, 43%)',
                grayishblue: 'hsl(240, 75%, 98%)',
                lightgray: 'hsl(0, 0%, 75%)',

            },
            borderRadius: {
                slightcurve: '6px',
            },
            fontSize: {
                large: '2.7rem',
                tiny: '0.5rem',
                little: '0.6'
            },

        },
    },
    plugins: [],
}