
//https://www.npmjs.com/package/markdown-it

const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItMark = require('markdown-it-mark')
const markdownItAnchor= require('markdown-it-anchor')
const markdownItToc= require('markdown-it-toc-done-right')

//* Add Plugins
const markdownLib = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
})
.use(markdownItAttrs)
.use(markdownItMark)
.use(markdownItAnchor, {
  permalink: markdownItAnchor.permalink.linkInsideHeader({
    symbol: `
      <span aria-hidden="true">#</span>
    `,
    placement: 'before'
  })
})
.use(markdownItToc)



module.exports = markdownLib