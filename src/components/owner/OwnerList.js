import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }
    // call method to delete one owner
    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(() => {
                OwnerManager.getAll()
                    .then((owners) => {
                        this.setState({
                            owners: owners
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("OWNERLIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        OwnerManager.getAll()
            .then((owners) => {
                this.setState({
                    owners: owners
                })
            })
    }

    render() {
        console.log("OWNER LIST: Render");

        return (
            <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/owner/new");
            }}
          >
            New Owner
          </button>
        </section>
            <div className="container-cards">
                {this.state.owners.map(singleOwner => <OwnerCard deleteOwner = {this.deleteOwner}key={singleOwner.id} ownerProp={singleOwner} />)}
            </div></>
        )
    }
}

export default OwnerList