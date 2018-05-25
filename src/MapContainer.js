
import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react'
import redMarker from './img/red-marker.png'
import yellowMarker from './img/yellow-marker.png'
export class MapContainer extends Component {

state = {
    height: "200px",
    activeMarker: {},
    showingInfoWindow: false,
    park: {lat: 33.3731643, lng: -112.1379262},
    filterQuery: '',
    places: [],
    error: false,
    errorOccurred: '',
    marker: redMarker,
    center: {}
}




onMarkerClick = (props, marker, e) =>{
    //console.log(props);
    //console.log(marker);
    //console.log(e);  
    this.setAnimation(props,marker)
    
    
}


setAnimation = (props, marker) => {
    marker.setAnimation(null);
          marker.setAnimation(props.google.maps.Animation.BOUNCE);
          setTimeout(() => { 
            marker.setAnimation(null);
            this.setState({activeMarker: marker})

            this.props.focus(this.state.activeMarker.venueId)
             }, 700); 

} 


  onMapClicked = () =>{
    this.props.focus("clear")
  }



    fetchPlaces = () => {
        
        const CLIENT_ID = "31CKWWBUCZVIOYGS0BHCR3X3YKEO1NOIF0PXQINYJFJCS1UZ";
        const CLIENT_SECRET = "3W1S2NSF5ACDAVQFSJPOG5AKHOCAQ11OUL0PDEDREGW055DU";
        const version = 20180520;
        let ll = "33.3731598,-112.1379262";
        const URL = 'https://api.foursquare.com/v2/venues/search?limit=5&' +
                    "client_id=" + CLIENT_ID +
                    "&client_secret=" + CLIENT_SECRET +
                   ' &ll=' + ll  +
                    '&v=' + version +
                    '&venuePhotos=1' +
                    '&query=history'
        console.log(URL);
        fetch(URL)
            .then( (response) => {
                return response.json()
            })
            .then((json) =>{
                this.setState({
                    places: json.response['venues']
                })
                console.log(json.response['venues']);

                this.props.updateInfo(json.response['venues'])
            })
            .catch(error => {
                this.setState({ errorOccurred: true, errorMessage: error})
            })
        }




 hmm = () => {
    console.log("hmmmmmmmmm");
 }



 test = (props) => {
     this.fetchPlaces();
   
}



componentDidMount(){
   
    var map = document.getElementById("map-container");
    map.parentNode.classList.add("map-view");
    
}

componentWillReceiveProps(){
console.log( "venue list " + this.props.venueList.length);
}

render(){
 

	return (
    <div id="map-container" role='application' aria-label='Google Maps'>


	<Map 
        
        onReady={this.test}
        onClick={this.onMapClicked}
        google={this.props.google}
        zoom={15}
        initialCenter={{
        lat: 33.3732037,
        lng:  -112.1381732
                    }}
        center={this.state.center}
        style={{order: "2", flexGrow: "2", color:"black"}}
        >
                        {this.props.venueList.map((place) =>
                            <Marker
                                key={place.id}
                                onClick={this.onMarkerClick}
                                venueId={place.id}
                                name={place.name}
                                title={place.name}
                                Animation="null"
                                position={{ lat: place.location.lat, lng: place.location.lng}}
                                
                            />
                        )
                    }
      </Map>
   </div>
		);
	}
}




export default GoogleApiWrapper({
    apiKey: "AIzaSyAw1hcHx_0nmrZ9hv5E-MO_u3Q3ftLULEY",
    libraries: ['places'],
})(MapContainer)

