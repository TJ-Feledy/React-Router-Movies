import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    const propsList = this.props.list;
    this.state = {
      savedList: propsList,
    }
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <nav key={movie.id}>
            <Link to={`/movies/${movie.id}`} key={movie.id}><span className="saved-movie" key={movie.id}>{movie.title}</span></Link>
          </nav>
        ))}
        <Link to='/'><div className="home-button">Home</div></Link>
      </div>
    );
  }
}
