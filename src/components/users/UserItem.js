import React from "react"
import PropTypes from 'prop-types'

const UserItem = ({user: {login, avatar_url, html_url}}) => {
  
    return (
      <div className='card text-center smallRounded'>
        <img
          src={avatar_url}
          alt='User Icon'
          className='round-img'
          style={{ width: "60px", margin: "10px" }}
        />
        <h3>{login}</h3>
        <div>
            <a href={html_url} className="btn btn-primary btn-sm my-1 rounded" target="_blank" rel="noopener noreferrer" >View</a>
        </div>
      </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
