import React, { Component } from 'react';
class OwnerCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span className="card-employeename">{this.props.ownerProp.name}</span></h3>
            <p>Phone Number: {this.props.ownerProp.phoneNumber}</p>
            <button onClick= {()=>this.props.deleteOwner(this.props.ownerProp.id)}>Delete</button>
             {/* add eidt button */}
          <button
            type="button"
            onClick={() => {
              this.props.history.push(`/owner/${this.props.ownerProp.id}/edit`);
            }}
          >
            Edit
          </button>
          </div>
        </div>
      );
    }
  }

export default OwnerCard;