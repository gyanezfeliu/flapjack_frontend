import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  }

  onSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})

  render() {
    const { username, email, password, password2} = this.state

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Register</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={this.onChange}
              value={email}
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
          <div>
            <label>Pass2</label>
            <textarea
              type="text"
              name="password2"
              onChange={this.onChange}
              value={password2}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Register