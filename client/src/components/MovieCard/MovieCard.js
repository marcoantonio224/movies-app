import React, { Component } from 'react';
import './MovieCard.css'
import api from '../../api'

class MovieCard extends Component {

    deleteMovie = event => {
        console.log("deleting this: ", this)
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the movie ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMovieById(this.props.id)
            this.props.doDeleteMovie(this.props.id)       
        }
    }

    render() {

    return (
        <div className='movieInfo'>
            <span>Title: {this.props.title}</span>
            <br/>
            <span>Rating: {this.props.rating}</span>
            <br/>
            <span>Times: {this.props.time}</span>
            <br/>
            <span>Id: {this.props.id}</span>
            <div className='deleteBtn' onClick={this.deleteMovie}>Delete</div>
            <br/>
        </div>
    )}
}

export default MovieCard;