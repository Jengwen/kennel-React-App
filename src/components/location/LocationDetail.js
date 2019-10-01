import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationDetail extends Component {

    state = {
        name: "",
        address: "",
        employees: [],
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in LocationManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/location"))
    }
    componentDidMount(){
        console.log("LocationDetail: ComponentDidMount");
        //getLocation and employees with that location id and put it into state
          LocationManager.getEmployees(this.props.match.params.locationId).then((singleLocation => {
            console.log(singleLocation)
                     this.setState({
                name: singleLocation.name,
                address: singleLocation.address,
                employees: singleLocation.employees,
                loadingStatus: false
            })}));
    }

    render() {
      console.log("the location id is", this.props.match.params.locationId)
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
            <div>Employees: {this.state.employees.map(employee =>
            <p key={employee.id}>{employee.name}</p>)}</div>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close</button>
          </div>
        </div>
      );
    }
}

export default LocationDetail;