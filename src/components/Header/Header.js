import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// We need to check if we are logged in
// In order to do that we need to deal with REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Bring logout action
import { logout } from '../../redux/actions/auth';
import { Input, Button, Typography } from 'antd';


export class Header extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = ( 
      <Button type='primary' htmlType='submit' style={styles.formButton} onClick={this.props.logout}>
        Logout
      </Button>
    );

    const guestLinks = (
      <div>
        <Button style={styles.formButton}>
          <Link to="/register">Register</Link>
        </Button>
        <Button style={styles.formButton}>
          <Link to="/login">Login</Link>
        </Button>
      </div>
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
            <Link to="/">Flapjack</Link>
          </button>
          { isAuthenticated ? authLinks: guestLinks}
        </div>
      </nav>
    );
  }
}

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formItem: {
    marginBottom: 15,
    width: '60%'
  },
  formButton: {
    display: 'flex',
    width: '30%',
    align: 'right'
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);