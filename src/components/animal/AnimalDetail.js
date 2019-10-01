import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        employeeName: "",
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
            this.setState({
                name: animal.name,
                breed: animal.breed,
                employeeId: animal.employeeId,
                employeeName: animal.employee.name,
                loadingStatus: false,
            });
        });
    }


    render() {
      // return an error message if the animal id number does ont exist
      return this.state.name === undefined ? (<p>This Animal Is No Longer Available</p>) :(
// return animal details if animal id exists
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./dog.svg')} alt="My Dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <p>Employee: {this.state.employeeName}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }
}

export default AnimalDetail;