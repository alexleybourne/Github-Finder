import React, { Component } from "react"
import PropTypes from 'prop-types'
import logo from './GithubFinderLogoWhite.png'

export class NavBar extends Component {
  static defaultProps = {
    title: ' Github Finder'
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <img src={logo} alt="Logo" style={{height: "20px", width: "auto"}} />
          {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default NavBar
