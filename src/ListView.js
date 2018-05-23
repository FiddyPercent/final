
import React, { Component } from 'react'
import LocInfo from './LocInfo'

class ListView extends Component {

	


	render(){

		return ( 
			<selection className="list-view" tabIndex="-1">
				<div> <h5> Filter Results </h5> </div>
				<LocInfo />
				<LocInfo />
				<LocInfo />
				<LocInfo />
				<LocInfo />
				<LocInfo />
			</selection>
			);

	}

}

export default ListView;