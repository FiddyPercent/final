
import React, { Component } from 'react';
import './App.css';
import ListView from "./ListView";
import MapContainer from "./MapContainer";
class App extends Component {

state = {
  venues: [],
  venueDetails: [],
  displayedVenues: [],
  activeVenue: []
}

setWindowHeight = () => {
   var appElement = document.querySelector(".app");
   var listElement = document.querySelector(".main");
   console.log(listElement.innerHeight);
   appElement.style.height =  window.innerHeight + "px";
  }

 componentDidMount(){
    window.addEventListener("resize", this.setWindowHeight, false);
    this.setWindowHeight();
 }

 componentWillUnMount(){
  window.removeEventListener("resize");
 }

 updateInfo = (venues) =>{
  this.setState({venues: venues, displayedVenues: venues})
 }


 filterResults = (e) =>{
    var value = e.target.value;
    if(value != "all"){
    var sortedVenues = this.state.venues.filter((v) => v.categories["0"].name !== value);
      this.setState({displayedVenues: sortedVenues})
    }else{
      this.setState({displayedVenues: this.state.venues})
    }
   }
 
  focusResults = (id) => {
    if(id != "clear"){
      var focusVenue = this.state.venues.filter((v) => v.id == id);
      console.log(focusVenue);
      console.log(id + ": id")
      this.setState({displayedVenues: focusVenue})
    }else{
       this.setState({displayedVenues: this.state.venues})
    }
  }




 getVenueDetails = (details) => {
  this.setState({venueDetails: details})
 }


  render() {
    return (
      <div className="app">
       <header> <h1> Neighborhood Map (React) </h1> </header>
        <main className="main">
        <ListView
          venueList={this.state.displayedVenues}
          filter={this.filterResults}
          getVenueDetails={this.getVenueDetails}
          focus={this.focusResults}/>
        <MapContainer 
          updateInfo={this.updateInfo}
          venueList={this.state.displayedVenues}
          focus={this.focusResults}/>
        </main>
        <footer>footer</footer>


    

      </div>
      );
  }
}

export default App;
