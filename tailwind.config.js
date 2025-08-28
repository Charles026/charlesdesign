/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // 由于我们还在使用 Bootstrap，设置为 important 以确保 Tailwind 样式优先级
  important: true,
}
