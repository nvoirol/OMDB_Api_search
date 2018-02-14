
import React, {Component} from 'react';

import omdb_api from './../api/omdb_api';

export default class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        results: undefined
      };
  }
  searchOmdb(e){
    console.log(e)
    //e.preventDefault();
    omdb_api(this.refs.omdbSearch.value).then((res) => {
      console.log(res)
      this.setState({
        results: res.data
      })
      //this.refs.omdbSearch.value = "";
    })
  }
  render() {
    console.log(this.state.results)
    const displayOmdb = () => {
      if(this.state.results){
        return (
          <div>
            <h5>Movie Results</h5>
            <p>Title: {this.state.results.Title}</p>
            <p>Director: {this.state.results.Director}</p>
            <p>Year: {this.state.results.Year}</p>
            <p>Rating: {this.state.results.Rated}</p>
          </div>
        )
      }
    }
    return (
      <div style={{width: '15%'}}>
          <label>Movies</label>
          <input onChange={this.searchOmdb.bind(this)} type="text" ref="omdbSearch"/>
        <br></br>
        {displayOmdb()}
      </div>
    );
  }
};
