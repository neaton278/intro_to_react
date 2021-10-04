import React, { Component } from "react";
import Main from './components/Main.js'

class App extends Component {
    render() {

        const products = [
            {
                active: true,
                attributes: [],
                created: 1627310328,
                description: "Test Product",
                id: "prod_JvLehPCqku52ts",
                images: [
                    "https://files.stripe.com/links/MDB8YWNjdF8xSkNVZVpJbmJlTnlCRThhfGZsX3Rlc3RfWWVTOWVVVEdmOTcyRURvdmNPUUtNVFMy001AiqdoDL"
                ],
                livemode: false,
                metadata: {
                    price: "0.99",
                    tax: "0.06"
                },
                name: "Test Product",
                object: "product",
                shippable: null,
                type: "service",
                unit_label: null,
                updated: 1627310742,
                url: null
            }
        ];

        return (
            <React.Fragment>
                <Main products={products} />
            </React.Fragment >
        )
    }
}


export default App;