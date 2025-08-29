/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
content: [
  "./app/**/*.{js,jsx,ts,tsx}", // add this line
  "./App.tsx",
  "./components/**/*.{js,jsx,ts,tsx}"
],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#2196F3',
        accent: '#FFC107',
        background: '#F9FAFB',
        text: '#111827',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['System'],
      },
    },
  },
  plugins: [],
}