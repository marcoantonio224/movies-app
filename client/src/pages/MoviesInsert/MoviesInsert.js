import React, { Component } from 'react'
import api from '../../api'

class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',
            time: '',
        }
    }

    handleIncludeMovie = () => {
        const { name, rating, time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime }

        api.insertMovie(payload).then(res => {
            console.log(res)
            window.alert(`Movie inserted successfully`)
            this.setState({
                name: '',
                rating: '',
                time: '',
            })
        })
    }

    render() {
        return (
            <div className='form-group wrapper'>
                <h1>Create Movie</h1>

                <div className='label'>Name: </div>
                <input
                    className='form-control input-text'
                    type="text"
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                />

                <div className='label'>Rating: </div>
                <input
                    className='form-control input-text'
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={this.state.rating}
                    onChange={(event) => this.setState({ rating: event.target.value })}
                />

                <div className='label'>Time: </div>
                <input
                    className='form-control input-text'
                    type="text"
                    value={this.state.time}
                    onChange={(event) => this.setState({ time: event.target.value })}
                />

                <button className='btn btn-primary button' onClick={this.handleIncludeMovie}>Add Movie</button>
                <button className='btn btn-danger cancel-button' href={'/movies/list'}>Cancel</button>
            </div>
        )
    }
}

export default MoviesInsert