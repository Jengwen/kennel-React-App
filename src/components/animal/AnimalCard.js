import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.animalProp.name}</span></h3>
          <p>Breed: {this.props.animalProp.breed}</p>
          {/* button to see just detail on single animal */}
          <Link to={`/animal/${this.props.animalProp.id}`}><button>Detail</button></Link>
        </div>
              </div>
    );
  }
}

export default AnimalCard;