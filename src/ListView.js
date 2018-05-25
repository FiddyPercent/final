
import React, { Component } from 'react'
import LocInfo from './LocInfo'

class ListView extends Component {


	state = {
		value: "all",
		venueDetails: [],
		options: [],
		updated: false
	}

	handleChange = (event) => {
   		var v = event.target.value;
    	this.setState({value: v})
    	this.props.filter(event);
  	}


	componentWillMount(){
	 	this.props.getVenueDetails(this.state.venueDetails)
 	}

 	componentWillReceiveProps() {
 		this.setState({updated: true})
 	}

 	componentWillUnMount() {
 		this.setState({updated: false})
 		this.setState({venueDetails: []})
 	}

 	updateVenueDetails = (info) => {
 		var vd = this.state.venueDetails;
 		vd.push(info);
 		this.setState({venueDetails: vd});
 		this.setupOptions();
 	}

 	//sets categories for filter
 	setupOptions = () => {
 		console.log("in the set up Options")
 		var o = [];
 		this.props.venueList.map(function (venue) { 
 			if (o.includes(venue.categories["0"].name) === false){
 			 o.push(venue.categories["0"].name);
 			}
 		})
 		this.setState({options: o})
 	}

	render(){

		return ( 


			<selection className="list-view" tabIndex="-1">
				<div> <h5> Filter Results </h5> </div>
				<label>
				Filter Results
				<select value={this.state.value} onChange={this.handleChange}>
            	    <option value="all">All</option>
           			{this.state.options.map((places) =>
           				<option value={places}>{places}</option> 
           			)}
          		</select>
          </label>
              
				{this.props.venueList.map((p) => 
				<LocInfo 
					place={p}
					updateVenueDetails={this.updateVenueDetails}
					venueDetails={this.state.venueDetails}
					update={this.state.update}
					/>
				)}
			</selection>
		)

	}
}

export default ListView;