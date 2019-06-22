import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div>
          <Route exact path='/' render={(props) => <MovieList addToSavedList={this.addToSavedList} {...props} />} />
          <Route exact path='/movies/:movieId' render={(props) => <Movie addToSavedList={this.addToSavedList} {...props} />} />
        </div>
      </div>
    );
  }
}
