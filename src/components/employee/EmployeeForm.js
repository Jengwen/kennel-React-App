import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        Name: "",
        jobTitle: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create location     object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.jobTitle === "") {
            window.alert("Please input an location name and job title");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                name: this.state.name,
                jobTitle: this.state.jobTitle,
                    };

            // Create the location and redirect user to location list
            EmployeeManager.post(employee)
            .then(() => this.props.history.push("/employee"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Employee name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="jobTitle"
                        placeholder="Job Title"
                        />
                        <label htmlFor="jobTitle">Job Title</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default EmployeeForm