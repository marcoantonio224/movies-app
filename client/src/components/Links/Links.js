import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    My first MERN Application
                </Link>
                <div className='collapse navbar-collapse'>
                    <div className='navbar-nav mr-auto'>
                    <div className='collpase navbar-collapse'>
                            <Link to="/movies/list" className="nav-link">
                                View All Movies
                            </Link>
                        </div>
                        <div className='collpase navbar-collapse'>
                            <Link to="/movies/create" className="nav-link">
                                Add a Movie
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Links