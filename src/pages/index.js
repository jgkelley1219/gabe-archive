import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allFile.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="post-index">
          {posts.map(({ node }) => {
            const title = node.relativePath
            const relativeDirectory = node.relativeDirectory
            let postType

            if(relativeDirectory === 'blog') {
              postType = 'writing'
            } else if(relativeDirectory === 'photos') {
              postType = 'photo'
            } else if(relativeDirectory === 'links') {
              postType = 'link'
            }

            const classes = 'post-title ' + postType
            return (
              <div key={node.id} className={classes}>{title}</div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {absolutePath: {regex: "/content/posts/"}}, sort: {fields: birthTime, order: ASC}) {
      edges {
        node {
          id
          relativePath
          relativeDirectory
          extension
        }
      }
    }
  }
`
