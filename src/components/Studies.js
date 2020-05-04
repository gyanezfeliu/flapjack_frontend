import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudies } from '../redux/actions/studies';

export class Studies extends Component {
  state = {
    studies: []
  }

  static propTypes = {
    studies: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getStudies();
  }
  render() {
    return (
      <Fragment>
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
              <tr key={study.url}>
                <td>{study.name}</td>
                <td>{study.description}</td>
                <td>{study.doi}</td>
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

export default connect(mapStateToProps, { getStudies })(Studies);
