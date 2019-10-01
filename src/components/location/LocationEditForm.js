import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"

class LocationEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      address: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
        // prevent page load again
      evt.preventDefault()
    // set loading status
          this.setState({ loadingStatus: true });
    //   build a edited object
      const editedLocation = {
        id: this.props.match.params.locationId,
        name: this.state.name,
        address: this.state.address
      };

    // update JSON with API put and redirect to animals list page
      LocationManager.update(editedLocation)
      .then(() => this.props.history.push("/location"))
    }

    componentDidMount() {
      LocationManager.get(this.props.match.params.locationId)
      .then(location => {
          this.setState({
            name: location.name,
            address: location.address,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="address"
                value={this.state.address}
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default LocationEditForm
