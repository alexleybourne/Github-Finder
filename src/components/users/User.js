import React, { Component } from 'react'
import Spinner from '../layout/Loading'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class User extends Component {
    
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,

    }

    render() {

        const {
            name, 
            avatar_url, 
            location, 
            bio, 
            company,
            blog, 
            login, 
            html_url, 
            followers, 
            following, 
            public_repos, 
            public_gists, 
            hireable
        } = this.props.user
    
        const { loading } = this.props

        if (loading) return <Spinner/>

        return ( 
        <>
            <Link to='/' className='btn btn-light'><i className="fas fa-arrow-left"></i>  Back To Search</Link>
            Hireable: {' '}
            {hireable ? (<i className='fas fa-check text-success'/>) : (<i className='fas fa-times-circle text-danger'/>)}
            <div className="card grid-2"> 

                <div className="all-center">
                    <img src={avatar_url} alt='User profile' className='round-img' style={{width: '150px'}} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                
                </div>

                <div className="all-center">
                {bio && (
                <>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                </>)}
                <a href={html_url} target="-blank" className="btn btn-primary btn-sm my-1 rounded"> View Profile on Github <i className="fab fa-github"> </i></a>
                <ul>
                    <li>
                        {login && (<>
                            <strong> Username: {login}</strong>
                        </>)}
                    </li>
                    <li>
                        {company && (<>
                            <strong> Company: {company}</strong>
                        </>)}
                    </li>
                    <li>
                        {blog && (<>
                            <strong> Website: {blog}</strong>
                        </>)}
                    </li>
                </ul>
                </div>

            </div>

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-primary">Following: {following}</div>
                <div className="badge badge-primary">Public Repos: {public_repos}</div>
                <div className="badge badge-primary">Public Gists: {public_gists}</div>
            </div>
            
        </>
        )
    }
}

export default User
