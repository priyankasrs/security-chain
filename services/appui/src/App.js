import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { ratingContract } from "./Ethereumsetup";
import {ShowCrimes } from "./ShowCrimes";
import {Button } from "./Button";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movies : [{name:'West San Jose',rating:0},{name:'East San Jose',rating:0},{name:'South San Jose',rating:0},{name:'North San Jose',rating:0}]
    }
    this.handleVoting=this.handleVoting.bind(this)
  }

handleVoting(movie){
    ratingContract.voteForMovie(movie)
    let votes=ratingContract.totalVotesFor(movie).toNumber()
    this.setState({movies:this.state.movies.map(
      (el)=>el.name===movie? Object.assign({},el,{rating:votes}):el
    
    )});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SecureChain</h1>
        </header>
        <p className="App-intro">
          Crime Update App in Ethereum and React
        </p>
        <div className="movie-table">
          <ShowCrimes movies={this.state.movies} vote={this.handleVoting}/>
        </div>
        <br/>
        
        <br/>
      </div>
    );
  }
}

export default App;
