import React from "react"
import {  graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.allFile
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="post-body">
          <h1>{post.frontmatter.title}</h1>
          <div className="post-body__body">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug {
    site {
      siteMetadata {
        title
        author
      }
    }
    allFile {
      edges {
        node {
          id
          childMdx {
            excerpt(pruneLength: 160)
            body
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              description
            }
          }
        }
      }
    }
  }
`
