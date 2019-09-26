import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        AnimalManager.softDelete(this.props.animalId)
        .then(() => this.props.history.push("/animal"))
    }
    componentDidMount(){
        console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        AnimalManager.getOne(this.props.animalId)
        .then((animal) => {
          console.log("what happens here")
            this.setState({
                name: animal.name,
                breed: animal.breed,
                loadingStatus: false,
            });
        });
    }


    render() {
      return this.state.name === undefined ? (<p>This Animal Is No Longer Available</p>) :(
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./dog.svg')} alt="My Dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }
}

export default AnimalDetail;