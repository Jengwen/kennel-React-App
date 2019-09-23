import React, { Component } from 'react';
class OwnerCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span className="card-employeename">{this.props.ownerProp.name}</span></h3>
            <p>Phone Number: {this.props.ownerProp.phoneNumber}</p>
            <button onClick= {()=>this.props.deleteOwner(this.props.ownerProp.id)}>Delete</button>
          </div>
        </div>
      );
    }
  }

export default OwnerCard;