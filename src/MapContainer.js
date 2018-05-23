
import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {

render(){

	return (

		
            <div className="map-view" role='application' aria-label='Google Maps' tabIndex="-1">
             <div id="map">
            /* <Map google={this.props.google} zoom={14}>

             </Map>*/
            </div>
		);
	}
}

/*export default GoogleApiWrapper({
    apiKey: "AIzaSyAw1hcHx_0nmrZ9hv5E-MO_u3Q3ftLULEY"
})(MapContainer)
*/
export default MapContainer