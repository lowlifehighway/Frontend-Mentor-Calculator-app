/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'main-text': 'hsl(var(--main-text))',
      },
      backgroundColor: {
        'main-background1': 'hsl(var(--mainBackground1))',
        'toggle-keypad1': 'hsl(var(--toggle-keypad1))',
        'key-background1Primary': 'hsl(var(--key-background1Primary))',
        'key-background1Secondary': 'hsl(var(--key-background1Secondary))',
        'background-toggle1Tertiary': 'hsl(var(--background-toggle1Tertiary))',
        'screen-background': 'hsl(var(--toggle-keypad1))',
      },
    },
  },
  plugins: [],
};
