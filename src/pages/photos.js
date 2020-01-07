import React from "react"
import Img from "react-image"
import Masonry from "react-masonry-component"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const masonryOptions = {
  gutter: 16,
  transitionDuration: 1
}

class Photos extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allFile.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Masonry
          options={masonryOptions}>
          {posts.map(({ node }) => {
            return (
              <div className="photo-post" key={ node.name }>
                <Img src={ node.publicURL } />
              </div>
            )
          })}
        </Masonry>
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
