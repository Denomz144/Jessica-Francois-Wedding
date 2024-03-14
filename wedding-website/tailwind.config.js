module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "40rem", // You can set this value to the height you need
      },
    },
    
  },
  variants: {
    extend: {
      // If you want to enable hover for other utilities, add them here
      backgroundColor: ['hover'], // This is not needed unless you have disabled it somewhere else
      // Add other utilities that you want to enable hover for
    },
  },
  plugins: [],
};
