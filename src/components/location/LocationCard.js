import React, { Component } from 'react';
import {Link} from "react-router-dom";

class LocationCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span className="card-locationName">{this.props.locationProp.name}</span></h3>
            <p>Address: {this.props.locationProp.address}</p>
<Link to ={`/location/${this.props.locationProp.id}`}><button>Details</button></Link>
 {/* add eidt button */}
 <button
            type="button"
            onClick={() => {
              this.props.history.push(`/location/${this.props.locationProp.id}/edit`);
            }}
          >
            Edit
          </button>
          </div>
        </div>
      );
    }
  }

export default LocationCard;