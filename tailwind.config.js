/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./src/components/*.{html,js,vue}",  "./node_modules/flowbite/**/*.js", "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [..., require('flowbite/plugin')],
  // plugins: [ 'flowbite/plugin' ],
}
