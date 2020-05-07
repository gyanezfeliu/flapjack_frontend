import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// We need to check if we are logged in
// In order to do that we need to deal with REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Bring logout action
import { logout } from '../../redux/actions/auth';


export class Header extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul>
        <li>
          <button onClick={this.props.logout}>
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/">Flapjack</Link>
          </div>
          { isAuthenticated ? authLinks: guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);