/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. content: Where Tailwind should look for your HTML/JS files to tree-shake unused styles
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust this path based on your project structure
    // Add other paths if you have files outside of src that use Tailwind classes
    // e.g., "./public/index.html",
  ],

  // 2. theme: Customize Tailwind's default design tokens
  theme: {
    extend: {
      // Extend Tailwind's default color palette
      colors: {
        'ivmcrimson': '#C63233', // Example custom color
        'ivmbrown': '#CF9178',
        'ivmskyblue': '#40A2E3',
      },
   
      // Add custom fonts
      fontFamily: {
        'ivmSans': ["Encode Sans", "sans-serif"],
        'ivmItalic': ["Shadows Into Light", "cursive"],

      },
    },
    // If you want to *override* Tailwind's defaults instead of extending,
    // place your configurations directly in the `theme` object.
    // For example, to completely replace the default color palette:
    // colors: {
    //   red: '#FF0000',
    //   blue: '#0000FF',
    // },
  },

  // 3. plugins: Add Tailwind plugins for more advanced functionalities
  plugins: [
    // require('@tailwindcss/forms'), // Example plugin for styling forms
    // require('@tailwindcss/typography'), // Example plugin for styling rich text
  ],

  // 4. Important (Optional): Control the !important strategy
  // important: true, // Makes all Tailwind utilities !important
  // important: '#app', // Scopes !important to a specific selector

  // 5. prefix (Optional): Add a custom prefix to all Tailwind classes
  // prefix: 'tw-', // e.g., <div class="tw-bg-blue-500">
};