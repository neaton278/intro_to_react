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
            },
            {
                active: true,
                attributes: [ ],
                created: 1626190597,
                description: "Third product description",
                id: "prod_JqUeZiYgbsl68t",
                images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSkNVZVpJbmJlTnlCRThhfGZsX3Rlc3RfRDFudUZJNFNpV1NocnlkQ2ZUalhuQjNm00sSkffBfK"
                ],
                livemode: false,
                metadata: {
                price: "199.99",
                tax: "29.99"
                },
                name: "AirMax Moscow",
                object: "product",
                shippable: null,
                statement_descriptor: null,
                tax_code: null,
                type: "service",
                unit_label: null,
                updated: 1626192377,
                url: null
            },
            {
                active: true,
                attributes: [ ],
                created: 1626190559,
                description: "Second shoe description",
                id: "prod_JqUdJE2hZNfz7z",
                images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSkNVZVpJbmJlTnlCRThhfGZsX3Rlc3Rfcm95RmRjc0xHcktMRWUyNGUxV2E4ZzN100bLg1gsgo"
                ],
                livemode: false,
                metadata: {
                price: "99.99",
                tax: "6.99"
                },
                name: "GoFly Ease",
                object: "product",
                package_dimensions: null,
                shippable: null,
                statement_descriptor: null,
                tax_code: null,
                type: "service",
                unit_label: null,
                updated: 1626192444,
                url: null
                },
                {
                active: true,
                attributes: [ ],
                created: 1626189563,
                description: "These are the shoes Marty wore in Back II The Future",
                id: "prod_JqUNhw9h7GUrXY",
                images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSkNVZVpJbmJlTnlCRThhfGZsX3Rlc3RfaGlLaGs3eXhHelVEVUt4Z1hjeUx5NUtv001v8BKXyd"
                ],
                livemode: false,
                metadata: {
                price: "499.99",
                tax: "59.99"
                },
                name: "Marty McFly",
                object: "product",
                package_dimensions: null,
                shippable: null,
                statement_descriptor: null,
                tax_code: null,
                type: "service",
                unit_label: null,
                updated: 1626192466,
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