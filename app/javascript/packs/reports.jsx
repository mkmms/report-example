// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Report extends Component{
	state = {
		users: []
	}
	componentDidMount(){
		var _that = this;
		$.ajax({ 
			url: "/users.json",
			success: function(res){
				_that.setState({
					users: res
				})
			}
		})	
	}
	render(){
		if( this.state.users.length == 0 ){
			return null;
		}
		return(
		  <table>
			  <thead>
			    <tr>
			      <th>Email</th>
			      <th>Password</th>
			      <th>First name</th>
			      <th>Last name</th>
			      <th>Gender</th>
			      <th>Phone</th>
			      <th>Address line1</th>
			      <th>Address line2</th>
			      <th>State</th>
			      <th>City</th>
			      <th>Country</th>
			      <th>Status</th>
			      <th>Marital status</th>
			    </tr>
			  </thead>
			  <tbody>
			    {
			    	this.state.users.map((user, key) => {
			    		return (
			    			<tr key={key}>
					        <td>{user.email}</td>
					        <td>{user.password}</td>
					        <td>{user.first_name}</td>
					        <td>{user.last_name}</td>
					        <td>{user.gender}</td>
					        <td>{user.phone}</td>
					        <td>{user.address_line1}</td>
					        <td>{user.address_line2}</td>
					        <td>{user.state}</td>
					        <td>{user.city}</td>
					        <td>{user.country}</td>
					        <td>{user.status}</td>
					        <td>{user.marital_status}</td>
					      </tr>
			    		)
			    	})
			    }
			  </tbody>
			</table>
		)
	}
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Report name="React" />,
    document.getElementById('reports-table')
  )
})
