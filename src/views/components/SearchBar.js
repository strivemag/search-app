import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import SearchResults from './SearchResults';
import '../styles/SearchBar.css';

import { push } from 'react-router-redux';
class SearchBar extends React.Component {
    // static contextTypes = {
    //   router: PropTypes.func.isRequired,
    // };

  static propTypes = {
    handleSearch: PropTypes.func.isRequired
  };

  constructor() {
    super(...arguments);

    this.state = {
      query: this.props.query,
      pageNum: 1,
      data: {
        results: [],
        total_pages: 0,
        total_results: 0
      }
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQueryChange(e) {
      this.setState({query: e.target.value});
  }

  // doSearch = (query) => {
  //   return axios({
  //     method: 'GET',
  //     url: `http://api.themoviedb.org/3/search/movie?query=${query}&api_key=b6cd56bf94f8f8f33f48689d00174b5b`
  //     // url: `${API_URL}/users/search?q=${term}`
  //   })
  //   .then(({data}) => {
  //     this.setState({
  //       data: data
  //     });
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    const SPACE_SPLITTER = /\s+/;
    var query = this.state.query.trim().split(SPACE_SPLITTER).join('+');

    // it'll not send request, if query length less than three letter
    if (!query || query.length < 0) {
        return;
    }
    this.input.blur();
    this.props.handleSearch(query);
  }



  render() {
      return (
        <div className="root-searchBar">
         <form className="searchForm" onSubmit={this.handleSubmit} noValidate>
          <input
              autoComplete="off"
              type="text"
              name="query"
              ref={e => this.input = e}
              placeholder="Search for a movie..."
              value={this.state.query}
              onChange={this.handleQueryChange}
          />

         </form>

       </div>
      );
  }
}

export default SearchBar;
