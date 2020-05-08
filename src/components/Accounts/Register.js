import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { register } from '../../redux/actions/auth';
// I want to make the pass checkings here not in the actions
import { createMessage } from '../../redux/actions/messages';
import { Input, Button, Typography } from 'antd'


export class Register extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  }

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault();
    const {username, email, password, password2} = this.state;
    if(password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match'})
    } else {
      const newUser = {
        username,
        email,
        password
      }
      this.props.register(newUser);
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})

  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to ="/" />;
    }
    const { username, email, password, password2} = this.state

    return (
      <div style={styles.formContainer}>
        <Typography.Title level={2}>
          Register on FlapJack
        </Typography.Title>
        <Input
          style={styles.formItem}
          name={'username'}
          type="string"
          placeholder="Username"
          onChange={this.onChange}
          value={username}
        />
        <Input
          style={styles.formItem}
          name={'email'}
          type="email"
          placeholder="Email"
          onChange={this.onChange}
          value={email}
        />
        <Input
          style={styles.formItem}
          name={'password'}
          type="password"
          placeholder="Password"
          onChange={this.onChange}
          value={password}
        />
        <Input
          style={styles.formItem}
          name={'password2'}
          type="password"
          placeholder="Password2"
          onChange={this.onChange}
          value={password2}
        />
        <Button type='primary' htmlType='submit' style={styles.formButton} onClick={this.onSubmit}>
          Register
        </Button>
      </div>
    )
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

export default connect(mapStateToProps, {register, createMessage})(Register);