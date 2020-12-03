import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import MoviesList from '../pages/MoviesList'
import MoviesInsert from '../pages/MoviesInsert'
import MoviesUpdate from '../pages/MoviesUpdate'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list">
                    <MoviesList/>
                </Route>

                <Route path="/movies/create">
                    <MoviesInsert/>
                </Route>

                <Route path="/movies/update/:id">
                    <MoviesUpdate/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;