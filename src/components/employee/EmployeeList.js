import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

    //call delete employee method
    deleteEmployee = id => {
        EmployeeManager.delete(id)
        .then(() => {
          EmployeeManager.getAll()
          .then((employees) => {
            this.setState({
                employees: employees
            })
          })
        })
      }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    EmployeeManager.getAll()
    .then((employees) => {
        this.setState({
            employees: employees
        })
    })
}

render(){
    console.log("EMPLOYEE LIST: Render");

    return(
        <div className="container-cards">
            {this.state.employees.map(singleEmployee => <EmployeeCard
            deleteEmployee = {this.deleteEmployee} key= {singleEmployee.id} employeeProp={singleEmployee} />)}
        </div>
    )
}
}

export default EmployeeList