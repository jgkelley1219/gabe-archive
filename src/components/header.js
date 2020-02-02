import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ data }) => (
    <header>
        <div className="nav__left">
            <h1><Link to={`/`}>Gabe Kelley</Link></h1>
            <h2>Last updated {data.site.buildTime}</h2>
        </div>
    </header>
)
  
export default props => (
    <StaticQuery
        query={graphql`
        query {
            site {
                buildTime(fromNow: true)
            }
        }
        `}
        render={data => <Header data={data} {...props} />}
    />
)

Header.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            buildTime: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}

