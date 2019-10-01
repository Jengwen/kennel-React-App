import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"
import "./OwnerForm.css"

class OwnerEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      phoneNumber: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
        // prevent page load again
      evt.preventDefault()
    // set loading status
          this.setState({ loadingStatus: true });
    //   build a edited object
      const editedOwner = {
        id: this.props.match.params.ownerId,
        name: this.state.name,
        phoneNumber: this.state.phoneNumber
      };

    // update JSON with API put and redirect to animals list page
     OwnerManager.update(editedOwner)
      .then(() => this.props.history.push("/owner"))
    }

    componentDidMount() {
      OwnerManager.get(this.props.match.params.ownerId)
      .then(owner => {
          this.setState({
            name: owner.name,
            phoneNumber: owner.phoneNumber,
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
              <label htmlFor="name">Owner Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="phoneNumber"
                value={this.state.phoneNumber}
              />
              <label htmlFor="phoneNumber">Breed</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingOwner}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default OwnerEditForm