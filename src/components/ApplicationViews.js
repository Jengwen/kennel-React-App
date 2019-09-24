import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import EmployeeList from './employee/EmployeeList'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animal" render={(props) => {
          return <AnimalList />
        }} />
      <Route path="/animal/:animalId(\d+)" render={(props) => {
              // Pass the animalId to the AnimalDetailComponent
              return <AnimalDetail {...props} animalId={parseInt(props.match.params.animalId)} />
        }} />
        <Route exact path="/location" render={(props) => {
          return <LocationList />
        }} />
      <Route path="/location/:locationId(\d+)" render={(props) => {
              // Pass the locationId to the LocationDetailComponent
              return <LocationDetail {...props} locationId={parseInt(props.match.params.locationId)} />
            }} />
        <Route path="/owner" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/employee" render={(props) => {
          return <EmployeeList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews