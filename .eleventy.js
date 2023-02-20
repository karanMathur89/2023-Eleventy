const markdownIt = require("markdown-it")

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

module.exports = function (eleventyConfig) {
    let mdOptions = {
        html: true,
        breaks: true,
        linkify: true
    }
    eleventyConfig.setLibrary("md", markdownIt(mdOptions))

    eleventyConfig.addPassthroughCopy("src/assets/")
    eleventyConfig.addPassthroughCopy("src/assets/css/")
    eleventyConfig.addWatchTarget('src/assets/css/')

    eleventyConfig.addCollection("post", (collectionApi) => {
        return collectionApi.getFilteredByGlob("src/posts/**/*.md")
    })

    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: '_includes',
            layouts: '_layouts'
        },
        markdownTemplateEngine: "njk"
    }
}