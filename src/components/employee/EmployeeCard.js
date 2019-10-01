import React, { Component } from 'react';
class EmployeeCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: {this.props.employeeProp.name}</h3>
            <p>Job Title: {this.props.employeeProp.jobTitle}</p>
            <button onClick= {() => this.props.deleteEmployee(this.props.employeeProp.id)}>Fire Employee</button>
           {/* add eidt button */}
           <button
            type="button"
            onClick={() => {
              this.props.history.push(`/employee/${this.props.employeeProp.id}/edit`);
            }}
          >
            Edit
          </button>
          <button type="button"
        onClick={() => { this.props.history.push(`/employee/${this.props.employeeProp.id}`) }}>Details</button>
          </div>
        </div>
      );
    }
  }

export default EmployeeCard;