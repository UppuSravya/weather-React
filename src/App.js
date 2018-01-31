import React, { Component } from 'react';
import SearchBar from './containers/searchBar';
import './App.css';

import Weatherlist from './containers/weatherlist';

class App extends Component {
  render() {
    return (
      <div >
        <SearchBar />
        <Weatherlist />
       </div>
    );
  }
}

export default App;
