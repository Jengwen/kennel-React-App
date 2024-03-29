import { Route, Redirect } from "react-router-dom";
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
import Login from "./auth/Login";
import AnimalEditForm  from "./animal/AnimalEditForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import LocationEditForm from "./location/LocationEditForm";
import OwnerEditForm from "./owner/OwnerEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
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
          exact path="/animal/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              this.isAuthenticated()?
              <AnimalDetail
                {...props}
                animalId={parseInt(props.match.params.animalId)}
              /> :
              <Redirect to = "/login"/>
            );
          }}
        />
        <Route
          exact
          path="/location"
          render={props => {
            return this.isAuthenticated()?<LocationList {...props} />: <Redirect to= "/login"/>;
          }}
        />
        <Route
          path="/location/:locationId(\d+)"
          render={props => {
            // Pass the locationId to the LocationDetailComponent
            return this.isAuthenticated()?(
              <LocationDetail
                {...props}
                locationId={parseInt(props.match.params.locationId)}
              />
            ): <Redirect to= "/login"/>;
          }}
        />
        <Route
          exact
          path="/owner"
          render={props => {
            return this.isAuthenticated()? <OwnerList {...props} />: <Redirect to= "/login"/>;
          }}
        />
        <Route
          exact
          path="/employee"
          render={props => {
            return this.isAuthenticated()? <EmployeeList {...props} />: <Redirect to= "/login"/>;
          }}
        />
        <Route
          path="/animal/new"
          render={props => {
            return this.isAuthenticated()? <AnimalForm {...props}/> : <Redirect to= "/login"/>;
          }}
        />
        <Route
          exact
          path="/animal"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/location/new"
          render={props => {
            return this.isAuthenticated()? <LocationForm {...props} />: <Redirect to= "/login"/>;
          }}
        />
        <Route
          path="/owner/new"
          render={props => {
            return this.isAuthenticated()? <OwnerForm {...props} />: <Redirect to= "/login"/>;
          }}
        />
        <Route
          path="/employee/new"
          render={props => {
            return this.isAuthenticated()? <EmployeeForm {...props} />: <Redirect to= "/login"/>;
          }}
        />
        <Route path="/login" component={Login} />
        <Route
  path="/animal/:animalId(\d+)/edit" render={props => {
    return <AnimalEditForm {...props} />
  }}
/>
        <Route
  exact path="/employee/:employeeId(\d+)/edit" render={props => {
    return <EmployeeEditForm {...props} />
  }}
/>
<Route
  path="/location/:locationId(\d+)/edit" render={props => {
    return <LocationEditForm {...props} />
  }}
/>
<Route
  path="/owner/:ownerId(\d+)/edit" render={props => {
    return <OwnerEditForm {...props} />
  }}
/>
<Route path="/employee/:employeeId(\d+)" render={(props) => {
    return <EmployeeWithAnimals {...props} />
}} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
