import React, { Component } from 'react';

import CardList from './components/cardList/cardList'
import './App.css';
import SearchBox from './components/searchbox/searchbox';
import Scroll from './components/scroll/scroll';
import ErrorBoundry from './components/errorBoundry/errorBoundry';


class App extends Component {

  constructor() {
    super()
    this.state = {
      teams: [],
      searchbox: ''
    }
  }

  componentDidMount() {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => {
        return res.json();
      })
      .then(teamsData => {
        return (
          console.log(teamsData),
          this.setState({ teams: teamsData.teams }));
      })
      .then(() => console.log(this.teamsData))
  }

  onSearchChange = (event) => {
    this.setState({ searchbox: event.target.value })
  }


  render() {

    const { teams, searchbox } = this.state

    const filteredTeams = teams.filter(team => {
      return team.strTeam.toLowerCase().includes(searchbox.toLowerCase()
      )
    })
    if (!teams.length) {
      return (
        <div className="tc">
          <h1>PREMIER LEAGUE TEAMS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <h1>Loading...</h1>
        </div>
      )
    }
    if (!filteredTeams.length) {
      return (
        <div className="tc">
          <h1>PREMIER LEAGUE TEAMS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <h2>Couldn't find any team</h2>
        </div>
      )
    }



    return (

      <div className="tc">
        <h1>PREMIER LEAGUE TEAMS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList teams={filteredTeams} />
          </ErrorBoundry>
        </Scroll>
      </div>



    );
  }
}


export default App;
