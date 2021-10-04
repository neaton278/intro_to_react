import React, { Component } from "react";
import Main from './components/Main.js'

class App extends Component {
    constructor() {
        super();


        this.state = {
            products: []
        }
    }

    componentDidMount() {

        fetch('../data.json')
            .then(res => res.json() )
            .then(data => {
                this.setState({
                    products: data

                })
            })
    }


    render() {

        return (
            <React.Fragment>
                <Main products={this.state.products} />
            </React.Fragment >
        )
    }
}


export default App;