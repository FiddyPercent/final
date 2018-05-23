

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListView from "./ListView"
import MapView from './MapView'
import Home from './Home'
class App extends Component {

mapHeight = () =>{
  return 500;
}


  render() {
    return (
      <div className="app">
       <header> <h1> Neighborhood Map (React) </h1> </header>
        <main className="main">
        <ListView/>
        <MapView 
        containerElement={<div id="map-cont" className="map-view" role='application' aria-label='Google Maps' />}
        mapElement={<div id="map" />}  
        center={{lat: 40.7413549, lng: -73.9980244}}
        zoom={17}
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
        />
        </main>
        <footer>footer</footer>


    

      </div>
      );
  }
}

export default App;
