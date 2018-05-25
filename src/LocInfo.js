
import React, { Component } from 'react'

class LocInfo extends Component {


state = {
	error: false,
	venueInfo: {},
	loadingInfo: true
}

	 componentDidMount = () => {
 	 this.getVenueInfo(this.state.venueInfo)
 	 
 }


 selectPhoto = () => {

 	if(this.state.venueInfo.venue === undefined || 
 		this.state.venueInfo.venue.photos.count < 1 ||
 		 this.state.venueInfo.venue.bestPhoto.visibility != "public"){
 		//console.log(this.props.place.categories[0].icon.prefix + "100" + this.props.place.categories[0].icon.suffix)
 		return (this.props.place.categories[0].icon.prefix + "100" + this.props.place.categories[0].icon.suffix)
 	
 	}else{
 		//console.log(this.state.venueInfo.venue.bestPhoto.prefix + "100" +this.state.venueInfo.venue.bestPhoto.suffix)
 	return (this.state.venueInfo.venue.bestPhoto.prefix + "300x300" +this.state.venueInfo.venue.bestPhoto.suffix)
 	
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
                if (response.ok === false) {
                    this.setState({ error: true })
                }
                return response.json()
            })
            .then((json) => {
                this.setState({ venueInfo: json.response })
                //this.props.updateVenueDetails(this.state.venueInfo)
               
            })
            .then(()=> this.setState({loadingInfo: false}))
            .catch(error => console.log(error))
    }


	render(){

		return ( 
			<div className="location-info" tabIndex="-1">
			
				<div className="picture" style={{height: "300px", width: "300px", backgroundImage: "url(" + this.selectPhoto() + " )" }}></div>
					<div id="loc-name"> {this.props.place.name} </div>
					<div id="loc-address">{this.props.place.location.address} {"\n"} {this.props.place.location.city},  
					  {" " + this.props.place.location.state} {this.props.place.location.postalCode }</div>

					<button id="loc-button" className="button"> more info </button>
				</div>
			
		)
	}

}

export default LocInfo;