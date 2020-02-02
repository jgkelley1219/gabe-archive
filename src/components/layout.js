import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

class Layout extends React.Component {
  render() {
    const { children } = this.props

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
  margin: 0 auto;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
