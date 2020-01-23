import React from "react"
import PropTypes from 'prop-types'
import logo from './GithubFinderLogoWhite.png'

const NavBar = ({title}) => {
  
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <img src={logo} alt="Logo" style={{height: "20px", width: "auto"}} />
          {title}
        </h1>
      </nav>
    )
}

NavBar.defaultProps = {
    title: ' Github Finder'
}

NavBar.propTypes = {
title: PropTypes.string.isRequired,
}


export default NavBar
