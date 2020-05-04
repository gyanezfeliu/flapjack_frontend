import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudies, deleteStudy } from '../redux/actions/studies';
import Form from './Form';

export class Studies extends Component {
  state = {
    studies: []
  }

  static propTypes = {
    studies: PropTypes.array.isRequired,
    getStudies: PropTypes.func.isRequired,
    deleteStudy: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getStudies();
  }
  render() {
    return (
      <Fragment>
        <Form />
        <h1>Studies</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>DOI</th>
            </tr>
          </thead>
          <tbody>
            { this.props.studies.map(study => (
              <tr key={study.id}>
                <td>{study.name}</td>
                <td>{study.description}</td>
                <td>{study.doi}</td>
                <td>
                  <button onClick={this.props.deleteStudy.bind(this, study.id)} style={{color:'red'}}>Delete</button>
                  </td>
              </tr>
            )) }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  studies: state.studies.studies
});

export default connect(mapStateToProps, { getStudies, deleteStudy })(Studies);
