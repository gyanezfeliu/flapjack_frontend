import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addStudy } from '../redux/actions/studies';
import { Input, Button, Typography } from 'antd';


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
    this.setState({
      name: "",
      description: "",
      doi: ""
    })
  }

  render() {
    const {name, description, doi} = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <Typography.Title level={2}>
          Add a study
        </Typography.Title>
        <Input
          style={styles.formItem}
          name={'name'}
          type="string"
          onChange={this.onChange}
          placeholder="Name"
          value={name}
        />
        <Input
          style={styles.formItem}
          name={'description'}
          type="string"
          onChange={this.onChange}
          placeholder="Description"
          value={description}
        />
        <Input
          style={styles.formItem}
          name={'doi'}
          type="string"
          onChange={this.onChange}
          placeholder="DOI"
          value={doi}
        />
        <Button type='primary' htmlType='submit' style={styles.formButton} onClick={this.onSubmit}>
          Add
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

export default connect(null, { addStudy })(Form);
