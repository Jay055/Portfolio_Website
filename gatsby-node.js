const path = require("path")

// create pages dynamically
// Destructure from createPages function
exports.createPages = async ({ graphql, actions }) => {
  
  const { createPage } = actions
  // get results from graphql's query, we need slug as a unique query
  const result = await graphql(`
    {
      blogs: allStrapiBlogs {
        nodes {
          slog
        }
      }
    }
  `)

  // Create a page for each blog 
  result.data.blogs.nodes.forEach(blog => {
    createPage({
      // Path would be the blogslug
      path: `/blogs/${blog.slog}`,
      // component from blog template
      component: path.resolve(`src/templates/blog-template.js`),

      context: {
        slog: blog.slog,
      },
    })
  })
}
