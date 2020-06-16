import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''

    };
    //this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1 className='header' >Monster Rolodex</h1>
        <SearchBox placeholder='Search Monster'
          handleSearchChange={this.handleSearchChange}
        ></SearchBox>
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
