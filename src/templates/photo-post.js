import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PhotoPostTemplate extends React.Component {
  render() {
    const post = this.props.data
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

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
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`photos/${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`photos/${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default PhotoPostTemplate

export const pageQuery = graphql`
  query PhotoPostBySlug {
    site {
      siteMetadata {
        title
        author
      }
    }
    allFile(filter: {relativeDirectory: {eq: "photos"}}) {
      edges {
        node {
          id
          name
          relativeDirectory
          extension
        }
      }
    }
  }
`
