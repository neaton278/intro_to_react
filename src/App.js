import React, { Component } from "react";
import Main from './components/Main.js'

class App extends Component {
    render() {

        const products = [
            {
                description: "Test Product",
                id: "prod_JvLehPCqku52ts",
                images: [
                    "https://files.stripe.com/links/MDB8YWNjdF8xSkNVZVpJbmJlTnlCRThhfGZsX3Rlc3RfWWVTOWVVVEdmOTcyRURvdmNPUUtNVFMy001AiqdoDL"
                ],
                metadata: {
                    price: "0.99",
                    tax: "0.06"
                },
                name: "Test Product",
            },
            
            {
                description: "Third product description",
                id: "prod_JqUeZiYgbsl68t",
                images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSkNVZVpJbmJlTnlCRThhfGZsX3Rlc3RfRDFudUZJNFNpV1NocnlkQ2ZUalhuQjNm00sSkffBfK"
                ],
                metadata: {
                price: "199.99",
                tax: "29.99"
                },
                name: "AirMax Moscow",
            },

            {
                description: "Second shoe description",
                id: "prod_JqUdJE2hZNfz7z",
                images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSkNVZVpJbmJlTnlCRThhfGZsX3Rlc3Rfcm95RmRjc0xHcktMRWUyNGUxV2E4ZzN100bLg1gsgo"
                ],
                metadata: {
                price: "99.99",
                tax: "6.99"
                },
                name: "GoFly Ease",
            },
            
                {
                description: "These are the shoes Marty wore in Back II The Future",
                id: "prod_JqUNhw9h7GUrXY",
                images: [
                "https://files.stripe.com/links/MDB8YWNjdF8xSkNVZVpJbmJlTnlCRThhfGZsX3Rlc3RfaGlLaGs3eXhHelVEVUt4Z1hjeUx5NUtv001v8BKXyd"
                ],
                metadata: {
                price: "499.99",
                tax: "59.99"
                },
                name: "Marty McFly",
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