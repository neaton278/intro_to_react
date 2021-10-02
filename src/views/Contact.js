import React, { Component } from 'react'

export default class Contact extends Component {
    render() {

        const a_list = ['1', '2', '3', '4', '5']
        
        return (
            <div>

                <h3> Contact page </h3>
                <hr />
                
                <ul className="list-group">
                    { a_list.map(num => (
                        <li className="list-group-item">Item</li>
                    ) ) }

                </ul>
            </div>
        )
    }
}
