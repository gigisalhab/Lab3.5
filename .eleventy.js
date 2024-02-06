// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/**/*.md");
  });

  return {
    dir: {
      input: ".",        
      output: "_site",  
      includes: "_includes", 
      data: "_data"      
    },
    passthroughFileCopy: true 
  };
};
