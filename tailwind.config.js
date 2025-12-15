/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#b99b6d",      // Golden
          background: "#0F0F0F",   // Deep dark
          muted: "#1A1A1A",        // Slightly lighter dark
          secondary: "#FFFFFF",    // White text
          "muted-foreground": "#B0B0B0", // Subtext gray
        },
      },
    },
    plugins: [],
  };
  