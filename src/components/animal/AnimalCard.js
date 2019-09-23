import React, { Component } from 'react';

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
          {/* button to delete animal when clciked */}
          <button onClick= {() => this.props.deleteAnimal(this.props.animalProp.id)}>Check Out</button>
        </div>
              </div>
    );
  }
}

export default AnimalCard;