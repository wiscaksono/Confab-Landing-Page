/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/header.webp')",
      },
      colors: {
        crayola: "#FB554C",
        coral: "#FDB3AF",
        misty: "#FDE9E3",
        mango: "#F4BB44",
        sunny: "#FFD6AD",
        linen: "#FFD6AD",
        stromy: "#323334",
        smoke: "#4E4F51",
        opal: "#8DBAB5",
        seafoam: "#CCE0DE",
        sage: "#EEF1EC",
        timber: "#BBA28B",
        oyster: "#E1D6CC",
        cloudy: "#F5F4F3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
