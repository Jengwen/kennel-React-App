import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager'

class LocationDetail extends Component {

    state = {
        name: "",
        address: "",
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
        //get(id) from AnimalManager and hang on to that data; put it into state
       LocationManager.get(this.props.locationId)
        .then((location) => {
            this.setState({
                name: location.name,
                address: location.address,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close</button>
          </div>
        </div>
      );
    }
}

export default LocationDetail;