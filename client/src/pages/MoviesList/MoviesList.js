import React, { Component } from 'react'
import api from '../../api'
import './MoviesList.css'
import MovieCard from '../../components/MovieCard';

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            isLoading: false,
        }
    }

    componentDidMount = () => {
        this.setState({ isLoading: true })

        api.getAllMovies().then(movies => {
            console.log('here are my movie results: ', movies)
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })

    }

    doDeleteMovie = id => {
        this.setState({movies: this.state.movies.filter(movie => movie._id !== id)})
      }  

    render() {
        return (
            <div className='wrapper'>
                {this.state.isLoading ? 
                    <div>Please wait</div>
                    : 
                    // JSON.stringify(this.state.movies)
                    this.state.movies.map((movie) => (
                        <MovieCard 
                            key={movie._id}
                            id={movie._id}
                            title= {movie.name}
                            rating={movie.rating}
                            time={movie.time}
                            doDeleteMovie={this.doDeleteMovie}
                        />
                    ))
                }
            </div>
        )
    }
}

export default MoviesList
