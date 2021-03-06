import React, { Component } from "react"
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ""
  }

  static propTypes= {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  }
  

  onSubmit = (e) => {
      e.preventDefault()
      if (this.state.text === "") {
        this.props.setAlert('Please Do not leave the field blank', 'light')
      } else {
        this.props.searchUsers(this.state.text)
        this.setState({ text: ''})
      }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {

    const { showClear, clearUsers } = this.props

    return (

      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={this.state.text}
            onChange ={this.onChange}
          />
          <button className='btn btn-primary btn-block rounded spacing' type="submit">Search <i className="fas fa-search"></i></button>
        </form>
        { showClear && 
        <button className="btn btn-light btn-block rounded spacing" onClick ={clearUsers} >Clear <i className="far fa-times-circle"></i></button>
        }
      </div>
    )
  }
}

export default Search
