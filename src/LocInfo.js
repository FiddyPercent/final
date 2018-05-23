
import React, { Component } from 'react'

class LocInfo extends Component {

	


	render(){

		return ( 
			<div className="location-info" tabIndex="-1">
			<div className="picture" style={{backgroundImage: "url(" + 'http://via.placeholder.com/100x100' + " )" }}></div>
				<div id="loc-name"> name </div>
				<div id="loc-address">address like 1111 n elm </div>
				<button id="loc-button" className="button"> more info </button>
			</div>);

	}

}

export default LocInfo;