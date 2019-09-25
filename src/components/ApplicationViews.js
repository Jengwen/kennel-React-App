import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import EmployeeList from "./employee/EmployeeList";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationForm from "./location/LocationForm";
import OwnerForm from "./owner/OwnerForm";
import EmployeeForm from "./employee/EmployeeForm";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
               <Route
          path="/animal/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <AnimalDetail
                {...props}
                animalId={parseInt(props.match.params.animalId)}
              />
            );
          }}
        />
        <Route
          exact
          path="/location"
          render={props => {
            return <LocationList {...props}/>;
          }}
        />
        <Route
          path="/location/:locationId(\d+)"
          render={props => {
            // Pass the locationId to the LocationDetailComponent
            return (
              <LocationDetail
                {...props}
                locationId={parseInt(props.match.params.locationId)}
              />
            );
          }}
        />
        <Route
          exact path="/owner"
          render={props => {
            return <OwnerList {...props}/>;
          }}
        />
        <Route
         exact path="/employee"
          render={props => {
            return <EmployeeList {...props}/>;
          }}
        />
        <Route
          path="/animal/new"
          render={props => {
            return <AnimalForm {...props} />;
          }}
        />
        <Route
          exact
          path="/animal"
          render={props => {
            return <AnimalList {...props} />;
          }}
        />
        <Route
          path="/location/new"
          render={props => {
            return <LocationForm {...props} />;
          }}
        />
        <Route
          path="/owner/new"
          render={props => {
            return <OwnerForm {...props} />;
          }}
        />
        <Route
          path="/employee/new"
          render={props => {
            return <EmployeeForm {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
