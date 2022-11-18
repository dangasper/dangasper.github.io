module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'green-one': '#33FF00',
        'green-two': '#00FF33',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}