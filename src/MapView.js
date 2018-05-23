
import React, { Component } from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

class MapView extends Component {

 state = {
    map: null
  }

mapLoaded(map){
 if(this.state.map != null){
   this.setState({map: map});
	}
 }

componentDidMount(){
	this.setHeight();
}




setHeight =() =>{
	    var mapElement = document.querySelector("#map");
        var mapContainter = document.querySelector('.list-view');
        console.log(mapContainter.innerHeight + " inside");
    	mapElement.style.height =  mapContainter.innerHeight + "px";

}


	render() {

		return (
			
				<GoogleMap 
					ref={this.mapLoaded.bind(this)}
					defaultZoom={this.props.zoom}
					defaultCenter={this.props.center}>
				</GoogleMap>
		
			)
	}
} 


export default GoogleApiWrapper({
    apiKey: "AIzaSyDeA0OzVvDzQTHeucB5reWyr7qZs2vJEF8"
})(MapContainer)