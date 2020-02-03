import React from "react"
import styled from "styled-components"
import Header from "./header"



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
          <Header />
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
