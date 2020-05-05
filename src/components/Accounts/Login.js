import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component() {

  state = {
    username: "",
    password: "",
  }

  onSubmit = e => {
    e.preventDefault();
       console.log('submit');
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})

  render() {
    const { username, password} = this.state

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div>
            <label>Pass</label>
            <textarea
              type="text"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login