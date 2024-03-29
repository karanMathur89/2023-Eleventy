const Image = require('@11ty/eleventy-img')

const imageShortcode =  async (src, alt, sizes = "100vw") => {

  src = "src/assets/images/" + src;

  let metadata = await Image(src, {
    widths: [300, 600, 900],
    formats: ["webp", "jpeg"],
    urlPath: "/assets/images/",
    outputDir: "./dist/assets/images/",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}


module.exports = imageShortcode