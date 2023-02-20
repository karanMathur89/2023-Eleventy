//* Import Collections
const { getPosts } = require('./config/collections/index.js');

//* Import Plugins
const markdownLib = require('./config/plugins/markdown.js')


/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

module.exports = function (eleventyConfig) {

    //Set Library
    eleventyConfig.setLibrary("md", markdownLib)


    //Passthrough
    eleventyConfig.addPassthroughCopy("src/assets/")
    eleventyConfig.addPassthroughCopy("src/assets/css/")
    eleventyConfig.addWatchTarget('src/assets/css/')


    //Collections
    eleventyConfig.addCollection("post", getPosts)




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