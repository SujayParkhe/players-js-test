import React, {Component} from 'react';
import {CardList} from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      searchField: ''
    };
  }
   
  componentDidMount() {
    fetch('https://api.npoint.io/d6bd0efc05639084eb17/playerList')
     .then(response => response.json())
    //  Tried sorting in ascending order but error appears
    //  .then(response => {
    //   let sorted = response.players.sort(function(a, b) {
    //       return a.Value - b.Value
    //   })
     .then(playerList => this.setState({ players: playerList}))
  }

  // sortDescending = () => {
  //   const { values } = this.state;
  //   values.sort((a, b) => a - b).reverse()
  //   this.setState({ values })
  // }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { players, searchField } = this.state;
    const filteredPlayers = players.filter(player => 
      player.PFName.toLowerCase().includes(searchField.toLowerCase())
    )
  return (
    <div className="App">
    <h1>Football Fanatics</h1>
      <SearchBox
      placeholder='search players'
      handleChange={this.handleChange} 
      />
      <CardList players={filteredPlayers} />
    </div>
  );
}
}

export default App;
