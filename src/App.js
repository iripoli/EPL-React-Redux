import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from './components/cardList/cardList'
import './App.css';
import SearchBox from './components/searchbox/searchbox';
import Scroll from './components/scroll/scroll';
import ErrorBoundry from './components/errorBoundry/errorBoundry';

import { setSearchBox } from './actions'



const mapStateToProps = state =>{
  return {
    searchBox: state.searchBox
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
  onSearchChange: (event)=>dispatch(setSearchBox(event.target.value))
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => {
        return res.json();
      })
      .then(teamsData => {
        return (
          this.setState({ teams: teamsData.teams }));
      })
  }


  render() {

    const { teams } = this.state
    const { searchBox, onSearchChange } = this.props

    const filteredTeams = teams.filter(team => {
      return team.strTeam.toLowerCase().includes(searchBox.toLowerCase()
      )
    })
    if (!teams.length) {
      return (
        <div className="tc">
          <h1>PREMIER LEAGUE TEAMS</h1>
          <SearchBox searchChange={onSearchChange} />
          <h1>Loading...</h1>
        </div>
      )
    }
    if (!filteredTeams.length) {
      return (
        <div className="tc">
          <h1>PREMIER LEAGUE TEAMS</h1>
          <SearchBox searchChange={onSearchChange} />
          <h2>Couldn't find any team</h2>
        </div>
      )
    }



    return (

      <div className="tc" style={{overflow:'hidden'}}>
        <h1>PREMIER LEAGUE TEAMS</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList teams={filteredTeams} />
          </ErrorBoundry>
        </Scroll>
      </div>



    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
