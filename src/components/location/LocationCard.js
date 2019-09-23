import React, { Component } from 'react';
class LocationCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span className="card-locationName">{this.props.locationProp.name}</span></h3>
            <p>Address: {this.props.locationProp.address}</p>
            <button onClick = {()=> this.props.deleteLocation(this.props.locationProp.id)}>Delete</button>
          </div>
        </div>
      );
    }
  }

export default LocationCard;