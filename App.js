import React, { Component } from 'react'
import Main from '../src/components/Main';

class App extends Component {
  constructor() {
    console.log('Constructed');
    super();

    this.state = {
      data:  []
    }
  }





  componentDidMount() {
    console.log('Mounted');
    fetch('https://fakebook-june-derek.herokuapp.com/shop/')
      .then(res => res.json())
      .then(data => {
        console.log( data )
        this.setState({
          data: data
          
        })
      })
  }




  render() {
    console.log('Rendered');

    return (


      <React.Fragment>

        <Main data={this.state.data} />

      </React.Fragment>
    )
  }
}

export default App;