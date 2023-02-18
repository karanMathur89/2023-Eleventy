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
    eleventyConfig.addPassthroughCopy("src/css/")
    eleventyConfig.addWatchTarget('src/css/')

    eleventyConfig.addCollection("post", (collectionApi) => {
        return collectionApi.getFilteredByGlob("**/*.md")
    })

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },
        markdownTemplateEngine: "njk"
    }
}