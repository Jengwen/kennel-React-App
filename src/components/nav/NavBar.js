import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  // method to change link color upon active link
  changeLinkColor = pathname => {
    if (pathname === this.props.location.pathname) {
      return "nav-link enabled";
    } else {
      return "nav-link";
    }
  };

  render() {

    return (
      <header>
        <h1 className="site-title">
          Student Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li>
              <Link className={this.changeLinkColor("/")} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={this.changeLinkColor("/animal")} to="/animal">
                Animals
              </Link>
            </li>
            <li>
              <Link className={this.changeLinkColor("/location")} to="/location">
                Locations
              </Link>
            </li>
            <li>
              <Link className={this.changeLinkColor("/employee")} to="/employee">
                Employees
              </Link>
            </li>
            <li>
              <Link className={this.changeLinkColor("/owner")} to="/owner">
                Owners
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(NavBar);
