module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'icon-ball': "url('/icon_ball.png')",
        'icon-next': "url('/icon_next.png')",
      },
      text: {
        set: "font-size: .75rem, line-height: 1rem",
      },
      colors: {
        gray1: "#C9CDD2",
        gray2: "#C2C2CC",
        gray3: "#535960",
        gray4: "#454B50",
        black1: "#000",
        black2: "#1C1F26",
        black3: "#15181d",
        blue1: "#34a0ff",
        blue2: "#ebf7ff",
      },
      boxShadow: {
        shadow10: "rgb(0 0 0 / 10%) 2px 2px 8px 0px",
        shadow021: 'rgba(0,0,0,0.21) 6px 4px 14px 5px'
      },
    },
  },
  plugins: [],
};