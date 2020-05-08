import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../redux/actions/auth';
import { Input, Button, Typography } from 'antd';

export class Login extends Component {

  state = {
    username: "",
    password: "",
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password)
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})
  
  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password} = this.state
    return (
      <div style={styles.formContainer}>
      <Typography.Title level={2}>
        Login to FlapJack
      </Typography.Title>
      <Input
        style={styles.formItem}
        name={'username'}
        type="string"
        onChange={this.onChange}
        placeholder="Username"
        value={username}
      />
      <Input
        style={styles.formItem}
        name={'password'}
        type="password"
        onChange={this.onChange}
        placeholder="Password"
        value={password}
      />
      <Button type='primary' htmlType='submit' style={styles.formButton} onClick={this.onSubmit}>
        Login
      </Button>
      <Typography.Text style={{ marginTop: 20 }}>
        {'Don\'t have an account? '}<a href='/register'>Register here!</a>
      </Typography.Text>
    </div>
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
    width: '60%'
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);