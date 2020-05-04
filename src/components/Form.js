import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addStudy } from '../redux/actions/studies';

export class Form extends Component {
  state = {
    name: '',
    description: '',
    doi: ''
  }

  static propTypes = {
    addStudy: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, description, doi } = this.state;
    const study = { name, description, doi }
    this.props.addStudy(study);
  }

  render() {
    const {name, description, doi} = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div>
            <label>DOI</label>
            <textarea
              type="text"
              name="doi"
              onChange={this.onChange}
              value={doi}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addStudy })(Form);
