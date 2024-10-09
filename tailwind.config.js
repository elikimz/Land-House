/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',     // Blue
        secondary: '#FBBF24',   // Amber
        accent: '#F472B6',      // Pink
        background: '#F9FAFB',  // Light Gray
        text: '#111827',        // Dark Gray
        link: '#3B82F6',        // Sky Blue
        border: '#E5E7EB',      // Gray
      },
    },
  },
  plugins: [],
}
