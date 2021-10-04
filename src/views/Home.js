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
                    {/* {this.props.products.map(p => ()) */}
                        
                    <div className="card">
                        <div className="card-header">
                            <h6>
                                Product Name
                                <span className="float-right">$0.00</span>
                            </h6>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src="#" alt="" />
                            <button className="btn btn-dark  btn-block bg-secondary" style={{ marginTop: '10px' }}>Add to cart</button>
                            <p className="card-text" style={{ marginTop: '10px' }}>Description</p>
                        </div>
                    </div>



                    <div className="card">
                        <div className="card-header">
                            <h6>
                                Product Name
                                <span className="float-right">$0.00</span>
                            </h6>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src="#" alt="" />
                            <button className="btn btn-dark  btn-block bg-secondary" style={{ marginTop: '10px' }}>Add to cart</button>
                            <p className="card-text" style={{ marginTop: '10px' }}>Description</p>
                        </div>
                    </div>



                    <div className="card">
                        <div className="card-header">
                            <h6>
                                Product Name
                                <span className="float-right">$0.00</span>
                            </h6>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src="#" alt="" />
                            <button className="btn btn-dark btn-block bg-secondary" style={{ marginTop: '10px' }}>Add to cart</button>
                            <p className="card-text" style={{ marginTop: '10px' }}>Description</p>
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}
