
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
    e.preventDefault();
    omdb_api(this.refs.omdbSearch.value).then((res) => {
      this.setState({
        results: res.data
      })
    })
  }
  render() {
    console.log(this.state.results)
    const displayOmdb = () => {
      if(this.state.results){
        return (
          <div>
            <h5>Movie Results</h5>
            {
              this.state.results.map((res, index) => {
                return (
                  <div>
                    <img src={res.images.fixed_height.url}/>
                  </div>
                )
              })
            }
          </div>
        )
      }
    }
    return (
      <div style={{width: '15%'}}>
        <form onSubmit={this.searchOmdb.bind(this)}>
          <label>Movies</label>
          <input type="text" ref="omdbSearch"/>
          <input type="submit"/>
        </form>
        <br></br>
        {displayOmdb()}
      </div>
    );
  }
};
