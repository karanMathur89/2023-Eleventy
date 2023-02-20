
//https://www.npmjs.com/package/markdown-it

const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')


const markdownLib = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
})
.use(markdownItAttrs)

module.exports = markdownLib