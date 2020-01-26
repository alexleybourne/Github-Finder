import React from "react"
import PropTypes from "prop-types"
import logo from "./GithubFinderLogoWhite.png"
import { Link } from "react-router-dom"

const NavBar = ({ title }) => {
  return (
    <div>
        <nav
          className='navbar bg-primary'
          style={{ position: "fixed", top: 0, margin: "0 0 50px 0" }}
        >
          <h1>
            <img
              src={logo}
              alt='Logo'
              style={{ height: "20px", width: "auto" }}
            />
            {title}
          </h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      <div style={{ position: "relative", top: 0, margin: "0 0 80px 0" }}></div>
    </div>
  )
}

NavBar.defaultProps = {
  title: " Github Finder"
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default NavBar
