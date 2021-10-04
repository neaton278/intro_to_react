import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h3> Shop with us</h3>
                    <hr />
                </div>

                <div className="card-deck">
                    {this.props.products.map(p => ( 
                        
                        <div key={p.id }className="card">
                        <div className="card-header">
                            <h6>
                                {p.name}
                                <span className="float-right">{p.metadata.price}</span>
                            </h6>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src={p.images} alt="" />
                            <button className="btn btn-dark  btn-block bg-secondary" style={{ marginTop: '10px' }}>Add to cart</button>
                                <p className="card-text" style={{ marginTop: '10px' }}>{ p.description}</p>
                        </div>
                    </div>
                     ) ) }
                </div>


            </React.Fragment>
        )
    }
}
