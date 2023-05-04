//* Import Collections
const { getPosts } = require('./config/collections/index.js')

//* Import Plugins
const markdownLib = require('./config/plugins/markdown.js')
const metagen = require('eleventy-plugin-metagen')

//* Import Shortcodes
const imageShortcode = require('./config/shortcodes/index.js')

//* Import Filters
const upperCase = require('./config/filters/index.js')

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

module.exports = function (eleventyConfig) {

    //Set Library
    eleventyConfig.setLibrary("md", markdownLib)


    //Passthrough
    eleventyConfig.addPassthroughCopy("src/assets/")
    eleventyConfig.addPassthroughCopy("src/assets/css/")
    eleventyConfig.addPassthroughCopy("src/assets/fonts/")
    eleventyConfig.addPassthroughCopy({'src/favicon/*': '/'})
    eleventyConfig.addWatchTarget('src/assets/css/')


    //Collections
    eleventyConfig.addCollection("post", getPosts)


    //Shortcodes
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)


    //Plugins
    eleventyConfig.addPlugin(metagen)


    //Filters
    eleventyConfig.addFilter('upperCase', upperCase)


    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            layouts: '_layouts'
        }
    }
}