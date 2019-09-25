import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        Name: "",
        phoneNumber: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create location     object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.phoneNumber === "") {
            window.alert("Please input an location name and job title");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.name,
                phoneNumber: this.state.phoneNumber,
                    };

            // Create the location and redirect user to location list
            OwnerManager.post(owner)
            .then(() => this.props.history.push("/owner"));
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
                        placeholder="Owner name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="phoneNumber"
                        placeholder="phoneNumber"
                        />
                        <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default OwnerForm