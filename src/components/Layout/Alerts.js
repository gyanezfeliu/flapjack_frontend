import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  }

  // When we get a new prop, such as the error, this is going to run
  componentDidUpdate(prevProps) {
    // Make sure props have changed
    const { error, alert } = this.props;
    if(error !== prevProps.error) {
      if(error.msg.name) {
        // name is an array, using .join() turns it into a string
        alert.error(`Name: ${error.msg.name.join()}`)
      }
      if(error.msg.description) {
        alert.error(`Description: ${error.msg.name.join()}`)
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  // reducer that we want (state.errors)
  error: state.errors
})

export default connect(mapStateToProps)(withAlert()(Alerts));