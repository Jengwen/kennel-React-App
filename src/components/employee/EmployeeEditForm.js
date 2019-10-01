import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      jobTitle: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        // prevent page load again
      evt.preventDefault()
    // set loading status
          this.setState({ loadingStatus: true });
    //   build a edited object
      const editedEmployee = {
        id: this.props.match.params.employeeId,
        name: this.state.name,
        jobTitle: this.state.jobTitle
      };

    // update JSON with API put and redirect to employees list page
      EmployeeManager.update(editedEmployee)
      .then(() => this.props.history.push("/employee"))
    }

    componentDidMount() {
      EmployeeManager.get(this.props.match.params.employeeId)
      .then(employee => {
          this.setState({
            name: employee.name,
            jobTitle: employee.jobTitle,
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
              <label htmlFor="name">Employeename</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="jobTitle"
                value={this.state.jobTitle}
              />
              <label htmlFor="breed">Job Title</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EmployeeEditForm