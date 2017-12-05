var h = maquette.h;
var projector = maquette.createProjector();
var data = [];

function render() {
  return h('table', [
  		h('thead', [
  			h('tr', [
  				h('th', ['Email']),
  				h('th',['Email']),
					h('th',['Password']),
					h('th',['First name']),
					h('th',['Last name']),
					h('th',['Gender']),
					h('th',['Phone']),
					h('th',['Address line1']) ,
					h('th',['Address line2']) ,
					h('th',['State']),
					h('th',['City']),
					h('th',['Country']),
					h('th',['Status']),
					h('th',['Marital status'])
  			])
			]),
    	h('tbody', [
    		data.map(function(user, index){
    			return h('tr', [
	  				h('td', [user.email]),
						h('td', [user.password]),
						h('td', [user.first_name]),
						h('td', [user.last_name]),
						h('td', [user.gender]),
						h('td', [user.phone]),
						h('td', [user.address_line1]),
						h('td', [user.address_line2]),
						h('td', [user.state]),
						h('td', [user.city]),
						h('td', [user.country]),
						h('td', [user.status]),
						h('td', [user.marital_status])
    			])
    		})
    	])
  	]);
}

document.addEventListener('DOMContentLoaded', function () {
  // projector.append(document.body, render);
});
