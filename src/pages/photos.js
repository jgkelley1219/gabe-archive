import React from "react"
import Img from "react-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Photos extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allFile.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
      <SEO title="All posts" />
        <div className="photos">
            {posts.map(({ node }) => {
              return (
                <div className="photo-post" key={ node.name }>
                  <Img src={ node.publicURL } />
                </div>
              )
            })}
        </div>
      </Layout>
    )
  }
}

export default Photos

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {relativeDirectory: {eq: "photos"}}) {
      edges {
        node {
          id
          name
          publicURL
        }
      }
    }
  }
`
