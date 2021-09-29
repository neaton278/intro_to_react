import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <main className="container">
                <h3> Home page</h3>
                <hr />


                <div className="card-deck">
                    <div className="col-4">
                        
                        <div className="card">
                            <div className="card-header">
                                <h6>item name
                                    <span className="float-right">Price</span>
                                </h6>
                            </div>
                            <div className="card-body">
                                <img className="card-img-top" src="." alt="." ></img>
                                <a className="btn btn-primary btn-block" href=".">Add to cart</a>
                                <p className="card-text"   >Product description</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">
                                <h6>item name
                                    <span className="float-right">Price</span>
                                </h6>
                            </div>
                            <div className="card-body">
                                <img className="card-img-top" src="." alt="." ></img>
                                <a className="btn btn-primary btn-block" href=".">Add to cart</a>
                                <p className="card-text"  >Product description</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">
                                <h6>item name
                                    <span className="float-right">Price</span>
                                </h6>
                            </div>
                            <div className="card-body">
                                <img className="card-img-top" src="." alt="." ></img>
                                <a className="btn btn-primary btn-block" href=".">Add to cart</a>
                                <p className="card-text"  >Product description</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">
                                <h6>item name
                                    <span className="float-right">Price</span>
                                </h6>
                            </div>
                            <div className="card-body">
                                <img className="card-img-top" src="." alt="." ></img>
                                <a className="btn btn-primary btn-block" href=".">Add to cart</a>
                                <p className="card-text"  >Product description</p>
                            </div>
                        </div>
                    </div>
                </div>


                <ul className="list-group">
                    {this.props.data.map(p => (
                        <li key={p.id} className="list-group-item">
                            <p><a href={p.images}>{p.images}{p.metadata.price}</a></p>
                            <div>
                                <span>
                                    <cite>{p.name}</cite>
                                    <small className="float-right">{p.description}</small>
                                </span>
                            </div>

                        </li>
                    ))}
                </ul>

            </main>
        )
    }
}
