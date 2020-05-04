import React, { Component } from 'react'
import axios from 'axios';

export class Test extends Component {
  state = {
    studies: []
  }

  componentDidMount() {
    axios.get('http://localhost:8989/api/study/')
          .then(res => {
            this.setState({
              studies: res.data.results
            });
            // console.log(res.data.results)
            console.log(this.state.studies)
          })
  }
  render() {
    return (
      <div>
        {this.state.studies.map((study, index) => (
          <p>{study.name}</p>
        ))}
      </div>
    )
  }
}

export default Test
