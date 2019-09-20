import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import EmployeeList from './employee/EmployeeList'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animal" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/location" render={(props) => {
          return <LocationList />
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