import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`

    // if (location.pathname === rootPath || location.pathname === blogPath) {
    //   header = (
    //     <h1
    //       style={{
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={location.pathname === blogPath ? `/blog/` : `/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/blog/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <Wrapper className="wrapper">
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <header>
            <div className="nav__left">

              <h1><Link to={`/`}>Gabe Kelley</Link></h1>
            </div>
            <div className="nav__right">
              <Link to={`/photos`} activeClassName="active">Photos</Link>
              <Link to={`/blog`} activeClassName="active">Writing</Link>
              <Link to={`/projects`} activeClassName="active">Projects</Link>
            </div>
          </header>
          <main>{children}</main>
        </div>
        <Footer></Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 85%;
  margin: 8rem auto;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
