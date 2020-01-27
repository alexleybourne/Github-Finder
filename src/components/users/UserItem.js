import React from "react"
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem = ({user: {login, avatar_url, html_url}}) => {
    
    return (
      <div className='card text-center smallRounded flip-in-hor-bottom' >
        <img
          src={avatar_url}
          alt='User Icon'
          className='round-img'
          style={{ width: "60px", margin: "10px" }}
        />
        <h3>{login}</h3>
        <div>
            <Link to={`/user/${login}`} className="btn btn-primary btn-sm my-1 rounded" >View</Link>
        </div>
      </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
