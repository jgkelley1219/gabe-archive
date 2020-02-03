const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  // const photoPost = path.resolve(`./src/templates/photo-post.js`)
  return graphql(
    `
      {
        allFile(filter: {relativeDirectory: {regex: "/blog/"}}) {
          edges {
            node {
              relativeDirectory
              fields {
                slug
              }
              childMdx {
                frontmatter {
                  title
                  posttype
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allFile.edges

    posts.forEach((post, index) => {
      createPage({
        path: `${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.relativeDirectory === `blog`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: value,
    })
  }
}
