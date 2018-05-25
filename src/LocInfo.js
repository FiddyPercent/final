
import React, { Component } from 'react'

class LocInfo extends Component {

constructor(props) {
    super(props);

state = {
	error: false,
	venueInfo: {},
	loaded: true,
	update: false
	}
}
	 componentDidMount = () => {
	 console.log("updating")
 	 this.getVenueInfo()
 	 this.setState({update: this.props.update}) 
 }


 selectPhoto = () => {
 	//console.log(this.state.venueInfo.venue.id);
 	if(this.state.venueInfo.venue === undefined || 
 		this.state.venueInfo.venue.photos.count < 1 ||
 		 this.state.venueInfo.venue.bestPhoto.visibility != "public"){
 		//console.log(this.props.place.categories[0].icon.prefix + "100" + this.props.place.categories[0].icon.suffix)
 		return (this.props.place.categories[0].icon.prefix + "100" + this.props.place.categories[0].icon.suffix)
 	
 	}else{
 		//console.log(this.state.venueInfo.venue.bestPhoto.prefix + "100" +this.state.venueInfo.venue.bestPhoto.suffix)
 		console.log(this.state.venueInfo.venue.id +" ----- " +this.props.place.id);
 	return (this.state.venueInfo.venue.bestPhoto.prefix + "300x300" +this.state.venueInfo.venue.bestPhoto.suffix)
 	
 	}
 }

what = () => {
	if(this.state.venueInfo.venue != undefined){
		//console.log("name the game " + this.state.venueInfo.venue.name)
		return this.state.venueInfo.venue.name
	}else{
		return "idk man"
	}
}


getVenueInfo = () => {
        const CLIENT_ID = "31CKWWBUCZVIOYGS0BHCR3X3YKEO1NOIF0PXQINYJFJCS1UZ";
        const CLIENT_SECRET = "3W1S2NSF5ACDAVQFSJPOG5AKHOCAQ11OUL0PDEDREGW055DU";
        const version = 20180520;
        const url = 'https://api.foursquare.com/v2/venues/' +
         this.props.place.id +
        '?&client_id=' + CLIENT_ID +
        '&client_secret=' + CLIENT_SECRET+
        '&v=' + version

       //console.log(url);
             fetch(url)
             .then(response => {
             	this.setState({loaded: false})
                if (response.ok === false) {
                    this.setState({ error: true })
                }
                return response.json()
            })
            .then((json) => {
                this.setState({ venueInfo: json.response })
                this.props.updateVenueDetails(this.state.venueInfo)
               
            })
            .then(()=>(this.setState({loaded: true})))
            .catch(error => console.log(error))
    }


	render(){

		return ( 
			<div className="location-info" tabIndex="-1">
				
				<div className="picture" style={{maxHeight: "300px", maxWidth: "300px",  }}>{this.state.loaded? this.what(): "fail"}</div>
					<div id="loc-name"> {this.props.place.name} </div>
					<div id="loc-address">{this.props.place.location.address} {"\n"} {this.props.place.location.city},  
					  {" " + this.props.place.location.state} {this.props.place.location.postalCode }</div>

					<button id="loc-button" className="button"> more info </button>
				</div>
			
		)
	}

}

export default LocInfo;